"use client";

import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { Card, Typography, CardContent } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import styles from "./Registrar.module.css";
import nextConfig from "../../../next.config";
export default function Registrar() {
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
        <meta name="description" content="Registrar's profile at IIIT Tiruchirappalli." />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.centeredContent}>
          <Card className={styles.styledCard}>
            <div className={styles.imageContainer}>
              <Image
                src={`${nextConfig.env?.IMAGE}/registrar_2022feb.jpeg`}
                alt="Registrar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Dr. G. Seetharaman
              </Typography>
              <Typography variant="subtitle1">
                Registrar i/c, IIIT Tiruchirappalli
              </Typography>
              <br />
              <a href="mailto:registrar@iiitt.ac.in" className={styles.contactLink}>
                <ContactMailIcon /> registrar@iiitt.ac.in
              </a>
            </CardContent>
          </Card>
        </div>
        <Typography className={styles.textContent}>
          The Registrar is one of the Principal Officers of the Institute. He is entrusted with
          statutory functions as per the IIITT-Act and the related statutes. He oversees the
          administration of the Institute and serves as the ex-officio Secretary to statutory
          bodies like the Board of Governors, Senate, Finance Committee, and Building Works
          Committee. Additionally, he assists the Director on administrative matters.
        </Typography>
      </div>
    </>
  );
}
