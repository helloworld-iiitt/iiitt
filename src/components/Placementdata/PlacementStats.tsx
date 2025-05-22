'use client';

import {
  Box,
  CircularProgress,
  Typography,
  useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface PlacementRawData {
  placement: {
    [company: string]: {
      CTC: number;
      'students Placed': number;
    };
  };
}

interface PlacementData {
  company: string;
  ctc: number;
  students: number;
}

const PlacementChart: React.FC = () => {
  const theme = useTheme();
  const [data, setData] = useState<PlacementData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlacementData = async () => {
      try {
        const res = await fetch('/json/general/placement_stats.json');
        const rawData: PlacementRawData = await res.json();

        const transformed = Object.entries(rawData.placement).map(
          ([company, info]) => ({
            company,
            ctc: info.CTC,
            students: info['students Placed'],
          })
        );

        setData(transformed);
      } catch (error) {
        console.error('Error fetching placement data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacementData();
  }, []);

  return (
    <Box sx={{ width: '100%', height: 420 }}>
      <Typography variant="h6" gutterBottom>
        Placement Overview (2025)
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <CircularProgress />
        </Box>
      ) : (
        <ResponsiveContainer width="100%" height="90%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="company" />
            <YAxis
              yAxisId="left"
              allowDecimals={false}
              label={{ value: 'Students', angle: -90, position: 'insideLeft' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{ value: 'CTC (LPA)', angle: 90, position: 'insideRight' }}
            />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="students"
              fill={theme.palette.primary.main}
              name="Students Placed"
            >
              <LabelList dataKey="students" position="top" />
            </Bar>
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="ctc"
              stroke={theme.palette.warning.main}
              name="CTC (LPA)"
              dot
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
};

export default PlacementChart;
