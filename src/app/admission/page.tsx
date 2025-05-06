"use client";

import { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./admission.module.css";
import PersonCard from "@/components/PersonCard/PersonCard";
import Link from "next/link";
import CommitteePage from "@/components/tablecomponent/CommitteePage";

export default function AdmissionPage() {
  useEffect(() => {
    document.title = "Admission";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  const externalLinks = [
    {
      href: "http://www.ncbc.nic.in/Home.aspx",
      text: "National Commission for Backward Classes",
    },
    {
      href: "https://socialjustice.nic.in/",
      text: "Ministry of Social Justice and Empowerment",
    },
    {
      href: "https://tribal.nic.in/",
      text: "Ministry of Tribal Affairs, Government of India",
    },
    {
      href: "http://disabilityaffairs.gov.in/content/",
      text: "Department of Empowerment of Persons with Disabilities",
    },
  ];

  return (
    <main>
      <Grid container className={styles.container}>
        <Grid size={1} />
        <Grid size={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={styles.themeText}
          >
            <Box component="span" fontWeight={380}>
              Admission
            </Box>
          </Typography>
          <Typography variant="body1">
            Admission to the various courses offered by this institution is
            specific to the programme, and details can be found under each
            specific programme.
          </Typography>

          <ul className={styles.utilityMargin}>
            <li>
              <Link
                href="/admission_ug"
                className={`${styles.themeText} ${styles.link}`}
              >
                B.Tech
              </Link>
            </li>
            <li>
              <Link
                href="/admission_pg"
                className={`${styles.themeText} ${styles.link}`}
              >
                M.Tech
              </Link>
            </li>
            <li>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <Link
                  href="/programs"
                  className={`${styles.themeText} ${styles.link}`}
                >
                  Ph.D (full-time/part-time)
                </Link>
                <p>
                  [Check the website regularly for the forthcoming
                  advertisement]
                </p>
              </div>
            </li>
          </ul>

          <section className={styles.sectionPadding}>
            <Typography variant="h5" className={styles.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                Other Links
              </Box>
            </Typography>
            <ul className={styles.utilityMargin}>
              {externalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.themeText} ${styles.link}`}
                    aria-label={link.text}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.sectionPadding}>
            <Typography variant="h5" className={styles.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                Admissions Committee
              </Box>
            </Typography>
            <CommitteePage committee="admission" />
          </section>

          <Grid container>
            <Grid size={10}>
              <section className={styles.sectionPadding}>
                <Typography variant="h5" className={styles.themeText}>
                  <Box component="span" fontWeight="fontWeightBold">
                    Contact Details of Admission Incharge
                  </Box>
                </Typography>
                <Typography variant="body1">
                  For Admission-related queries, contact Chairman Admissions,
                  IIIT Tiruchirappalli.
                </Typography>
                <PersonCard
                  name="Dr. G. Seetharaman"
                  designation="Chairman Admissions"
                  emailID="admissions@iiitt.ac.in"
                  src="/faculty/Seetharaman.jpg"
                  src_type="faculty"
                  phone="9486631181"
                />
              </section>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={1} />
      </Grid>
    </main>
  );
}
