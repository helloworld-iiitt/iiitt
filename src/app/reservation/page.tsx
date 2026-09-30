/**
 *
 * Programs Page
 *
 * fetches data from /json/admission/ug
 * fetches data from /json/admission/pg
 */
"use client";;
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Divider, Card, CardContent } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ScienceIcon from "@mui/icons-material/Science";
import styles from "./reservation.module.css";
import { numberToWords } from "@/types/numbertoWords";

const Programs: React.FC = () => {
  const [data, setData] = useState({
    ug: [] ,
    pg: [] ,
    loading: true,
  });

  useEffect(() => {
    document.title = "Reservation Policy of the Institute | IIIT Tiruchirappalli";
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
    document.title = "Reservation Policy of the Institute";
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
          Reservation Policy of the Institute
        </Typography>

        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5" className={styles.themeText} gutterBottom>
            </Typography>
            <Typography>
              Indian Institute of Information Technology Tiruchirappalli strictly follows the  
              Reservation Policy as per Government of India norms. 
              The age relaxation for SC/ST/OBC(NCL) applicants shall be applicable as per Government of India norms. 
              The relaxation of age will be applicable only if a sanctioned position is earmarked for the particular category. 
              The ST, SC, OBC-NCL, EWS certificates obtained in the current Financial Year  will only be considered as valid.
            </Typography>
            <Typography className={styles.sectionPadding}>
              <b>The Reservation Policy as per Government of India guidelines are as follows:</b>
            </Typography>
            <ul className={styles.list}>
            <li>The Gazette of India, Part II., Section 1,No. 29, dated 09, July 2019 and The Gazette of India, No.2289, dated 12, July 2019 regarding 
                “The Central Educational Institutions (Reservation in Teacher's Cadre) Act, 2019”.</li>
            <li>GoI, No. No.36039/1/2019-Estt (Res), dated 31, January 2019 regarding “Reservation for EWSs”.</li>    
          </ul>
          </CardContent>
        </Card>

        <Divider />
      </Grid>
      <Grid size={1} />
    </Grid>
  );
};

export default Programs;
