"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./partners.module.css";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import nextConfig from "../../../next.config";
interface Partner {
  name: string;
  description: string;
  logo: string;
  link: string;
}

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    document.title = "Industry Partners";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch("/json/general/industry_partners.json");
        const data = await response.json();
        setPartners(data.partners);
      } catch (error) {
        console.error("Error fetching partners data:", error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Grid container className={styles.container}>
        <Grid size={1} />
        <Grid size={10}>
          <Typography variant="h2" gutterBottom className={styles.themeText}>
            <Box component="span" fontWeight={380}>
              Industry Partners
            </Box>
          </Typography>

          {partners.map((partner, index) => (
            <section key={index} className={styles.sectionPadding}>
              <Typography gutterBottom className={styles.themeText}>
                <Box component="h2" fontWeight="fontWeightBold">
                  {partner.name}
                </Box>
              </Typography>
              <Typography gutterBottom className={styles.text}>
                {partner.description}
              </Typography>
              <Grid container justifyContent="center">
                <Grid size={12} className={styles.logo}>
                  <Link href={partner.link} target="_blank">
                    <Image
                      src={`${nextConfig.env?.IMAGE}/${partner.logo}`}
                      
                      alt={`${partner.name} logo`}
                      width={150}
                      height={100}
                    />
                  </Link>
                </Grid>
                <Grid size={12} className={styles.logo}>
                  Logo of {partner.name}.
                </Grid>
              </Grid>
            </section>
          ))}

          <section className={styles.sectionPadding}>
            <Typography className={styles.text}>
              The Department of Training and Placement collaborates with Industry Partners to facilitate campus 
              placements and internships, enriching students’ programming skills and project experience.
            </Typography>
          </section>
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
}
