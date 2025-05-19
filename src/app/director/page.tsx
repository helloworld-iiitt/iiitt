"use client";

import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { Card, Typography, CardContent } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import nextConfig from "../../../next.config";
import styles from "./Director.module.css";

export default function Director() {
  useEffect(() => {
    document.title = "Administration";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Administration - IIIT Trichy</title>
        <meta name="description" content="Director's profile at IIIT Tiruchirappalli." />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          <Card className={styles.styledCard}>
            <div className={styles.imageContainer}>
              <Image
                src={`${nextConfig.env?.IMAGE}/ushanatesan.jpg`}
                alt="Director"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Prof. Usha Natesan
              </Typography>
              <Typography variant="subtitle1">Director, IIIT Tiruchirappalli</Typography>
              <br />
              <a href="mailto:director@iiitt.ac.in" className={styles.linkStyle}>
                <ContactMailIcon /> director@iiitt.ac.in
              </a>
            </CardContent>
          </Card>

          <Card className={styles.messageCard}>
            <CardContent>
              <Typography variant="h5" className={styles.messageTitle} gutterBottom>
                DIRECTOR'S MESSAGE
              </Typography>
              <Typography className={styles.messageText}>
                As an Institute of National Importance under the Ministry of Education, Government of India, IIIT Tiruchirappalli is dedicated to advancing education, research, and innovation in Information Technology and related fields.
              </Typography>
              <Typography className={styles.messageText}>
                In today's fast-paced digital era, we strive to shape engineers, innovators, and leaders through rigorous, industry-relevant, and research-driven programmes. Our dynamic curriculum, aligned with emerging domains such as Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, and the Internet of Things, ensures that students are equipped to lead and transform society.
              </Typography>
              <Typography className={styles.messageText}>
                Our faculty members bring in rich experience from leading institutions and are actively engaged in pioneering research across diverse areas of computing technologies and electronics.
              </Typography>
              <Typography className={styles.messageText}>
                We strongly believe in the holistic development of our students and strive to shape them into visionaries who will lead the technological transformation of the future. Hence, they are encouraged to think critically, engage in interdisciplinary research, participate in national and international competitions, and contribute to societal challenges through technology-driven solutions.
              </Typography>
              <Typography className={styles.messageText}>
                IIITT is proud to be a part of the collaborative Public-Private Partnership (PPP) model, drawing strength from both academic autonomy and industry partnership. This synergy helps us bridge the gap between academia and industry, making our students future-ready professionals.
              </Typography>
              <Typography className={styles.messageText}>
                The Institute also emphasizes fostering the entrepreneurial skills of the students through various startup-related initiatives, innovation labs, and incubation support.
              </Typography>
              <Typography className={styles.messageText}>
                IIITT remains steadfast in its mission to advance knowledge, foster innovation, and serve as a catalyst for technological and societal progress. With a commitment to academic excellence, cutting-edge research, and strong industry partnerships, the Institute continues to evolve as a hub of intellectual growth and impactful contributions at the global level.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
