"use client";
import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./holiday.module.css";
import nextConfig from "../../../next.config";
import EventIcon from "@mui/icons-material/Event";

interface Calendar {
  title: string;
  url: string;
}

const Holidays: React.FC = () => {
  const [calendar, setCalendar] = useState<Calendar[] | null>(null);

  useEffect(() => {
    document.title = "Holiday";
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
                    href={`${nextConfig.env?.DOCUMENT}/${item.url}`}
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
