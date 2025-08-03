/**
 * Holiday Page
 *
 * fetches data from /json/general/holidays
 *
 *
 */
"use client";
import { FormData } from "@/types/common.types";
import EventIcon from "@mui/icons-material/Event";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import styles from "./holiday.module.css";

const Holidays: React.FC = () => {
  const [calendar, setCalendar] = useState<FormData[] | null>(null);

  useEffect(() => {
    document.title = "Holiday | IIIT Tiruchirappalli ";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    fetch("/json/general/holidays.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch calendar data");
        }
        return response.json();
      })
      .then((data) => {
        setCalendar(data.data);

      })
      .catch((error) => {
        console.error("Error fetching calendar data:", error);

      });
  }, []);

  return (
    <div className={styles.pageContainer}>
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
              Holidays
            </Box>
          </Typography>

          <div className={styles.timeline}>
            {calendar &&
              calendar.map((item, id) => (
                <div key={id} className={styles.timelineSection}>
                  <div className={styles.timelineIcon}>
                    <EventIcon />
                  </div>
                  <Typography variant="h5" className={styles.themeText}>
                    {item.title}
                  </Typography>
                  <a
                    href={`${nextConfig.env?.DOCUMENT}/${item.link}`}
                    download={`${item.title}`}
                    className={styles.link}
                  >
                    Download {item.title}
                  </a>
                </div>
              ))}
          </div>
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default Holidays;
