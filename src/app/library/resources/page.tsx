"use client";

import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./resources.module.css";
import { useEffect, useState } from "react";

export default function Resources() {
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resourcesRes] = await Promise.all([
          fetch("/json/library/resources.json").then((res) => res.json()),
        ]);

        setResources(resourcesRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container className={styles.container}>
      <Grid size={12}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          className={styles.themeText}
          align="center"
        >
          <Box component="span" fontWeight={300}>
            Classification of Books
          </Box>
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : resources && resources.length > 0 ? (
          <TableContainer component={Paper}>
            <Table className={styles.styledTable}>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.tableHead}>S. No.</TableCell>
                  <TableCell className={styles.tableHead}>Resources</TableCell>
                  <TableCell className={styles.tableHead}>
                    Collections
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resources.map((resource, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{resource.sno}</TableCell>
                    <TableCell>{resource.resources}</TableCell>
                    <TableCell>{resource.collections}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
}
