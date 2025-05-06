"use client";

import {
  Box,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";

import styles from "./antiragging.module.css";

const AntiRagging = () => {
  useEffect(() => {
    document.title = "Anti Raggign Committe | IIIT Tiruchirappalli";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <div className="page-container">
      <Grid container>
        <Grid size={1} />
        <Grid container size={10} className={styles.container}>
          <Grid size={12}>
             <Typography
                      variant="h2"
                      component="h2"
                      gutterBottom
                      align="center"
                      color= "#2e8b57"
                      sx={{ fontWeight: 300 }}
                    >
                      Ragging is a Crime
                    </Typography>
          </Grid>
          <section>
            <Typography variant="h4">What Constitutes Ragging?</Typography>
            <ul style={{ lineHeight: "35px " }}>
              <br />
              Ragging constitutes one or more of any of the following acts:
              <br />
              <li>
                {" "}
                Any conduct by any student or students whether by words spoken
                or written or by an act which has the effect of teasing,
                treating or handling with rudeness a fresher or any other
                student.
              </li>
              <li>
                {" "}
                Indulging in rowdy or undisciplined activities by any student or
                students which causes or is likely to cause annoyance, hardship,
                physical or psychological harm or to raise fear or apprehension
                thereof in any fresher or any other student.
              </li>
              <li>
                {" "}
                Asking any student to do any act which such student will not in
                the ordinary course do and which has the effect of causing or
                generating a sense of shame, or torment or embarrassment so as
                to adversely affect the physique or psyche of such fresher or
                any other student.
              </li>
              <li>
                {" "}
                Any act by a senior student that prevents, disrupts or disturbs
                the regular academic activity of any other student or a fresher.
              </li>
              <li>
                {" "}
                Exploiting the services of a fresher or any other student for
                completing the academic tasks assigned to an individual or a
                group of students.
              </li>
              <li>
                {" "}
                Any act of financial extortion or forceful expenditure burden
                put on a fresher or any other student by students
              </li>
              <li>
                {" "}
                Any act of physical abuse including all variants of it: sexual
                abuse, homosexual assaults, stripping, forcing obscene and lewd
                acts, gestures, causing bodily harm or any other danger to
                health or person
              </li>
              <li>
                {" "}
                Any act or abuse by spoken words, emails, post, public insults
                which would also include deriving perverted pleasure, vicarious
                or sadistic thrill from actively or passively participating in
                the discomfiture to fresher or any other student.{" "}
              </li>
              <li>
                {" "}
                Any act that affects the mental health and self-confidence of a
                fresher or any other student with or without an intent to derive
                a sadistic pleasure or showing off power, authority or
                superiority by a student over any fresher{" "}
              </li>
            </ul>
            <br />
            <br />
            <Typography variant="h4">Seeking Help:</Typography>
            <br />
            <ul className="seekhelp">
              <li>
                {" "}
                Reach out to the Anti-Ragging Squad of IIIT Trichy
                <ul className="doclist">
                  <li>
                    
                      IIITT Anti-Ragging Committee
                    
                  </li>
                </ul>
              </li>
              <br />
              <br />
              <li>
                Seek help at National The Anti-Ragging Portal:&nbsp;
                <a href="https://www.antiragging.in/">
                  https://www.antiragging.in/
                </a>
              </li>
              <br />
              <br />
              <li>
                National Anti Ragging Help Line (UGC Crisis Hotline) 24x7 Toll
                Free Number: <a href="tel:1800-180-5522">1800-180-5522</a>
              </li>
              <br />
              <br />
              <li>
                Reaching out to helpline via Email:{" "}
                <a href="mailto:helpline@antiragging.in">
                  helpline@antiragging.in
                </a>
              </li>
            </ul>
          </section>
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default AntiRagging;
