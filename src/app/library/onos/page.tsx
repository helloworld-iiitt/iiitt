"use client";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./onos.module.css";
import { useEffect, useState } from "react";

export default function ONOS() {
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resourcesRes] = await Promise.all([
          fetch("/json/library/resources.json").then((res) => res.json()),
        ]);

        setResources(resourcesRes.onos);
        setLoading(false);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container className={styles.container}>
      <Grid size={12}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          className={styles.themeText}
        >
          <Box component="span" fontWeight={380}>
            ONOS Accessible Resources
          </Box>
        </Typography>

        <Grid container columnSpacing={2}>
          {resources.map((resource, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
              <div className={styles.list}>
                <a href={resource.href} target="_blank" className={styles.link}>
                  {resource.resource}
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
