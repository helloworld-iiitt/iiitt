"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, Typography, Box, CardMedia, CardContent } from "@mui/material";
import styles from "./rti.module.css";
import nextConfig from "../../../next.config";

interface RTI {
  head: string;
  name: string;
  designation: string;
  emailID: string;
  phone?: string;
  fax?: string;
  src: string;
}

export default function RTI() {
  const [rtiList, setRtiList] = useState<RTI[]>([]);

  useEffect(() => {
    document.title = "RTI";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    const fetchRTIData = async () => {
      try {
        const response = await fetch("/json/committee/members/rti.json");
        const data = await response.json();
        setRtiList(data.data);
      } catch (error) {
        console.error("Error fetching RTI data:", error);
      }
    };

    fetchRTIData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Typography variant="h2" component="h2" gutterBottom className={styles.heading}>
        <Box component="span" fontWeight={380}>
          RTI
        </Box>
      </Typography>

      <div className={styles.cardsContainer}>
        {rtiList.map((rti, index) => (
          <Card key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.imageWrapper}>
                <Image
                  src={`${nextConfig.env?.IMAGE}/${rti.src}`}
                  alt={rti.name}
                  width={200}
                  height={300}
                  className={styles.media}
                />
              </div>

              <div className={styles.textContent}>
                <Typography variant="h5" className={styles.themeText}>
                  {rti.head}
                </Typography>

                <Typography variant="h6" className={styles.name}>
                  {rti.name}
                </Typography>

                <Typography className={styles.designation}>
                  {rti.designation}
                </Typography>

                <div className={styles.contactInfo}>
                  <a href={`mailto:${rti.emailID}`} className={styles.emailLink}>
                    {rti.emailID}
                  </a>




                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}