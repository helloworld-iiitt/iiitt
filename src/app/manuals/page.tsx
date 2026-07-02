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

    // Static data for manuals
    const data: ManualData[] = [
      { title: "The IIIT Act 2017", link: "https://iiitt.ac.in/about" },
      { title: "IIITT Statutes", link: "https://iiitt.ac.in/about" },
      { title: "Faculty Rule Book", link: "https://iiitt.ac.in/faculty" },
      { title: "Student Code of Conduct (2024)", link: "http://store.iiitt.ac.in/downloads/notices/codeofconductforstudents(%202024).pdf" },
      { title: "Student Code of Conduct (2025)", link: "http://store.iiitt.ac.in/downloads/notices/Regulations%20for%20Academic%20and%20Hostel%20Students_IIITT-2025-1.pdf" },
      { title: "Ph.D. Regulations", link: "https://iiitt.ac.in/doctorate" },
      { title: "Curriculum", link: "https://iiitt.ac.in/curriculum" },
    ];

    setManuals(data);
    setLoading(false);

    return () => {
      document.title = "IIIT Trichy";
    };
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
                    <TableCell sx={{ fontWeight: "normal" }}>{idx + 1}</TableCell>
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
