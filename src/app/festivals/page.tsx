"use client";
import MainCarousel from "@/components/Carousel/MainCarousel";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import { validURL } from "../../types/validator";
import styles from "./departments.module.css";
interface Festival {
  name: string;
  description: string;
  links: [
    {
      name: string;
      url: string;
      download: boolean;
    }
  ];
  images: [
    {
      name: string;
      path: string;
    }
  ];
}

const Festivals: React.FC = () => {
  const [festivals, setFestivals] = useState<Festival[] | null>(null);

  useEffect(() => {
    document.title = "Festivals";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const response = await fetch("/json/events/festivals.json");
        if (!response.ok) {
          throw new Error("Failed to fetch festivals data");
        }
        const data = await response.json();
        setFestivals(data.data);
      } catch (error) {
        console.error("Error fetching festival data:", error);
      }
    };

    fetchFestivals();
  }, []);

  return (
    <div className="page-container">
      <Grid container className={styles.container}>
        <Grid size={1} />
        <Grid size={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={styles.themeText}
          >
            <Box component="span" fontWeight={380} fontSize={{ sm: "48px", md: "54px" }}>
              Festivals
            </Box>
          </Typography>
          {festivals &&
            festivals.map((festival, index) => (
              <Grid size={12} key={index}>
                <div
                  className={styles.card}
                  style={{
                    marginTop: "3px",
                    animationDelay: `${index * 0.2}s`,
                  }}
                  //onClick={() => router.push(festival.url)}  Redirect on click
                >
                  <Typography
                    variant="h5"
                    className={styles.themeText}
                    gutterBottom
                  >
                    <Box component="span" fontWeight="fontWeightBold">
                      {festival.name}
                    </Box>
                  </Typography>
                  <Box component="p" className={styles.festivalDesc}>
                    {festival.description}
                  </Box>

                  {festival.links &&
                    festival.links.map((link, index) => (
                      <Box component="p" className={styles.festival} key={index}>
                        <a
                        href={
                          validURL(link.url)
                            ? link.url
                            : `${nextConfig.env?.IMAGE}/${link.url}`
                        }
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          <CloudDownloadIcon
                            className={styles.download}
                            style={{
                              marginRight: "5px",
                              verticalAlign: "middle",
                            }}
                          />
                          {link.name}
                        </a>
                      </Box>
                    ))}
                  <MainCarousel images={festival.images}/>
                </div>
              </Grid>
            ))}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default Festivals;
