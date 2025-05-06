"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Typography, Divider, Card, CardContent } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ScienceIcon from "@mui/icons-material/Science";
import styles from "./programs.module.css";

const Programs: React.FC = () => {
  useEffect(() => {
    document.title = "Programs";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <Grid container className={styles.container} spacing={2}>
      <Grid size={1} />
      <Grid size={10}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          color= "#2e8b57"
          sx={{ fontWeight: 300 }}
        >
          Programs
        </Typography>



        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5" className={styles.themeText} gutterBottom>
              <SchoolIcon color="success" /> Undergraduate Program
            </Typography>
            <Typography>
              The admission to Undergraduate Programs is done through JEE Mains.
              The JEE-Mains qualified candidates are admitted to UG program
              through CSAB and JoSAA following the reservation policy of India.
            </Typography>
            <Typography className={styles.sectionPadding}>
              IIIT Tiruchirappalli offers the following two Undergraduate Programs:
            </Typography>
            <ul className={styles.list}>
              <li>B.Tech in Computer Science and Engineering</li>
              <li>B.Tech in Electronics and Communication Engineering</li>
            </ul>
          </CardContent>
        </Card>

        <Divider />


        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5" className={styles.themeText} gutterBottom>
              <WorkIcon color="primary" /> Postgraduate Program
            </Typography>
            <Typography>
              IIIT Tiruchirappalli offers the following Postgraduate Programs:
            </Typography>
            <ul className={styles.list}>
              <li>M.Tech in Computer Science and Engineering</li>
              <li>M.Tech in VLSI Systems</li>
            </ul>
          </CardContent>
        </Card>

        <Divider />

        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5" className={styles.themeText} gutterBottom>
              <ScienceIcon color="secondary" /> Doctoral Program
            </Typography>
            <Typography>
              IIIT Tiruchirappalli offers Ph.D. programs in the following departments:
            </Typography>
            <Grid container spacing={4}>
              <Grid size={12}>
                <Typography fontWeight="bold">Computer Science and Engineering</Typography>
                <Typography variant="body2">
                  Data Analytics, Machine Learning, Deep Learning, IoT, Cloud Computing,
                  Medical Image Processing
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography fontWeight="bold">Electronics and Communication Engineering</Typography>
                <Typography variant="body2">
                  VLSI Design, Wireless Communication, Micro & Nano Electronics,
                  Compact Modeling & Simulation
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography fontWeight="bold">Mechanical Engineering</Typography>
                <Typography variant="body2">
                  Additive Manufacturing, Powder Metallurgy, Smart Materials,
                  Energy storage materials
                </Typography>
              </Grid>
              <Grid>
                <Typography fontWeight="bold">Science and Humanities</Typography>
                <ul className={styles.list}>
                  <li>Physics - Optoelectronic Materials, Fiber optics, Plasmonics</li>
                  <li>Mathematics - Fluid Dynamics</li>
                  <li>Economics - Health Economics, Global issues in health</li>
                  <li>English - Applied Linguistics, Indian Writing in English</li>
                </ul>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={1} />
    </Grid>
  );
};

export default Programs;
