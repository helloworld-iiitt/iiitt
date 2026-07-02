"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import styles from "../scholarship/scholarship.module.css";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

interface ManualData {
  title: string;
  link: string;
}

export default function ManualsPage() {
  const [manuals, setManuals] = useState<ManualData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = "Manuals | IIIT Tiruchirappalli";

    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    const fetchManualData = async () => {
      try {
        const response = await fetch("/json/general/manual.json");
        const data = await response.json();
        setManuals(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Manuals data:", error);
      }
    };
    fetchManualData();
  }, []);

  return (
    <Grid container className={styles.container}>
      <Grid size={1} />
      <Grid size={10}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          className={styles.themeText}
          align="center"
        >
          <Box component="span" fontWeight={300}>
            Manuals
          </Box>
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : manuals && manuals.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {manuals.map((manual, idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={{ fontWeight: "normal" }}>
                      {idx + 1}
                    </TableCell>
                    <TableCell>{manual.title}</TableCell>
                    <TableCell>
                      <a
                        href={manual.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {manual.link}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="body1" color="error">
            No manuals available.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
