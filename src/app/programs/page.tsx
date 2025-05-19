"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Typography, Divider, Card, CardContent } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ScienceIcon from "@mui/icons-material/Science";
import styles from "./programs.module.css";
import { numberToWords } from "@/types/numbertoWords";

const Programs: React.FC = () => {
  const [data, setData] = useState({
    ug: [] ,
    pg: [] ,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ug, pg] = await Promise.all([
          fetch('/json/admission/ug.json').then(res => res.json()),
          fetch('/json/admission/pg.json').then(res => res.json()),
        ]);

        setData({
          ug: ug.programs,
          pg: pg.programs,
          loading: false
        });
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchData();
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
          color="#2e8b57"
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
              IIIT Tiruchirappalli offers the following <b>{numberToWords(data.ug.length)}</b> Undergraduate Programs:
            </Typography>
            <ul className={styles.list}>
          {data.ug?.map((program: string, index: number) => (
            <li key={index}>{program}</li>
          ))}
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
              IIIT Tiruchirappalli offers the following <b>{numberToWords(data.pg.length)}</b> Postgraduate Programs:
            </Typography>
            <ul className={styles.list}>
          {data.pg?.map((program: string, index: number) => (
            <li key={index}>{program}</li>
          ))}
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
