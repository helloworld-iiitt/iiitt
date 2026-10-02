/**
 *
 * Reservation Policy Page
 *
 */

"use client";

import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import {
  Typography,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import styles from "./reservation.module.css";

const Programs: React.FC = () => {
  useEffect(() => {
    document.title =
      "Reservation Policy of the Institute | IIIT Tiruchirappalli";
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
            <Typography
              variant="h5"
              className={styles.themeText}
              gutterBottom
            ></Typography>
            <Typography>
              Indian Institute of Information Technology Tiruchirappalli
              strictly follows the Reservation Policy as per Government of India
              norms. The age relaxation for SC/ST/OBC(NCL) applicants shall be
              applicable as per Government of India norms. The relaxation of age
              will be applicable only if a sanctioned position is earmarked for
              the particular category. The ST, SC, OBC-NCL, EWS certificates
              obtained in the current Financial Year will only be considered as
              valid.
            </Typography>

            <List dense sx={{ pl: 2 }}>
  <ListItem disablePadding>
    <ListItemText
      primary={
        <Link
          href={`${nextConfig.env?.DOCUMENT}/IIITT_Reservation%20Roster%20as%20per%20GoI%20Guidelines.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Reservation Roster as per GoI Guidelines
        </Link>
      }
    />
  </ListItem>
</List>

            <Typography>
              <b>
                The Reservation Policy as per Government of India guidelines are
                as follows:
              </b>
            </Typography>
            <ul className={styles.list}>
              <li>
                1. The Gazette of India, Part II., Section 1,No. 29, dated 09,
                July 2019 and The Gazette of India, No.2289, dated 12, July 2019
                regarding “The Central Educational Institutions (Reservation in
                Teacher's Cadre) Act, 2019”.
              </li>
              <li>
                2. GoI, No. No.36039/1/2019-Estt (Res), dated 31, January 2019
                regarding “Reservation for EWSs”.
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={1} />
    </Grid>
  );
};

export default Programs;
