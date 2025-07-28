"use client";

import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { Card, Typography, CardContent } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import nextConfig from "../../../next.config";
import styles from "../director/Director.module.css";

export default function Director() {
  useEffect(() => {document.title = "Registrar | IIIT Tiruchirappalli";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Administration - IIIT Trichy</title>
        <meta name="description" content="Registrar's profile at IIIT Tiruchirappalli." />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          <Card className={styles.styledCard}>
            <div className={styles.imageContainer}>
              <Image
                src={`${nextConfig.env?.IMAGE}/faculty/Photo_Registrar(ic).jpg`}
                alt="Registrar( i\c)"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Dr. N. Renugadevi
              </Typography>
              <Typography variant="subtitle1">Registrar(i\c), IIIT Tiruchirappalli</Typography>
              <br />
              <a href="mailto:registrar@iiitt.ac.in" className={styles.linkStyle}>
                <ContactMailIcon /> registrar@iiitt.ac.in
              </a>
            </CardContent>
          </Card>

          <Card className={styles.messageCard}>
            <CardContent>
              <Typography variant="h5" className={styles.messageTitle} gutterBottom>
              Registrar(i/c)’s Message
              </Typography>
              <Typography className={styles.messageText}>
              At Indian Institute of Information Technology Tiruchirappalli (IIITT), we believe that true leadership is not defined by position or authority but by the willingness to take responsibility and inspire positive change. Every member of our community - our dedicated faculty, motivated students, and committed staff - contributes to the collective progress and success of our growing institution.
              </Typography>
              <Typography className={styles.messageText}>
              As an emerging Institute of National Importance, IIITT is dedicated to creating an environment where responsibility, self-awareness, and continuous improvement are deeply valued. We believe that every individual has within them the power to shape their own success and, in doing so, uplift the institution as a whole.
              </Typography>
              <Typography className={styles.messageText}>
              Our faculty members embody this spirit through their commitment to excellence in teaching and research, nurturing curious minds and encouraging students to go beyond conventional boundaries. Our students, with their enthusiasm, creativity, and sense of purpose, bring fresh perspectives and innovations that help our institute steadily climb the ladder of national and global recognition.
              </Typography>
              <Typography className={styles.messageText}>
              The Registrar’s Office remains focused on enabling transparent, efficient, and supportive administrative systems that empower our faculty, students, and staff to thrive. We aim to nurture a culture where collaboration, respect, and self-driven growth are not just ideals but everyday practices.
              </Typography>
              <Typography className={styles.messageText}>
              When each of us takes full responsibility for what we can do, and strives to overcome what seems impossible, challenges turn into opportunities, and obstacles become stepping stones for collective success. It is this mindset that will guide IIITT towards building robust academic foundations, advancing research frontiers, strengthening industry and community partnerships, and shaping students into responsible leaders for the future.
              </Typography>
              <Typography className={styles.messageText}>
              Together, let us continue this journey with clarity, inclusiveness, and a shared commitment to transform vision into reality - contributing meaningfully to our nation and the world.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
