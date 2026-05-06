/***
 *  Director's Page
 *
 *
 *
 *
 */


"use client";

import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { Card, Typography, CardContent } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import nextConfig from "../../../next.config";
import styles from "./Director.module.css";

export default function Director() {
  useEffect(() => {document.title = "Director | IIIT Tiruchirappalli";
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
                src={`${nextConfig.env?.IMAGE}/admin/Director_2026/Prof (Dr.). Anupam Sukla_Sir.jpeg`}
                alt="Director(i\c)"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Prof. (Dr.) Anupam Shukla
              </Typography>
              <Typography variant="subtitle1">Director(i/c), IIIT Tiruchirappalli. </Typography>
              <br />
              <a href="mailto:director@iiitt.ac.in" className={styles.linkStyle}>
                <ContactMailIcon /> director@iiitt.ac.in
              </a>
            </CardContent>
          </Card>

          <Card className={styles.messageCard}>
            <CardContent>
  <Typography variant="h5" className={styles.messageTitle} gutterBottom>
    About the Director
  </Typography>

  <Typography className={styles.messageText}>
    Prof. (Dr.) Anupam Shukla took charge as Director (i/c) of IIIT Tiruchirappalli on 28 April 2026. He is also serving as the Director of SVNIT Surat and previously served as the Director of the Indian Institute of Information Technology, Pune.
  </Typography>

  <Typography className={styles.messageText}>
    He is a Professor in the Department of Information and Communication Technology (ICT) at ABV-IIITM Gwalior and a visiting faculty at IIM Rohtak, with over 31 years of experience in administration, research, and teaching.
  </Typography>

  <Typography className={styles.messageText}>
    A globally recognized researcher in Artificial Intelligence, he has authored four books published by CRC Press and Springer, 182 peer-reviewed publications, edited four books by IGI Global, and mentored 123 doctoral and postgraduate theses.
  </Typography>

  <Typography className={styles.messageText}>
    He has successfully completed 13 government-sponsored projects worth ₹10 Crores, focusing on IT applications for Indian farmers, youth skill development, and institutional infrastructure.
  </Typography>

  <Typography className={styles.messageText}>
    He currently serves as a nominated expert member of the National Board of Accreditation (NBA) and as a member of the Project Review & Steering Group (PRSG), MeitY, Government of India. He has also served as a member of the Board of Governors at ABV-IIITM Gwalior.
  </Typography>

  <Typography className={styles.messageText}>
    At NIT Raipur, he was the founding Head of the Departments of Biomedical Engineering and Computer Science and Engineering, and the founding coordinator of the Chhattisgarh–IIT Kanpur Knowledge Sharing Program, a pioneering e-learning initiative in India.
  </Typography>

  <Typography className={styles.messageText}>
    His vision is to enhance institutional rankings, deliver comprehensive and integrative education, and advance high-quality research in Engineering, Science, and Technology in alignment with the National Education Policy (NEP) 2020 for national development.
  </Typography>
</CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
