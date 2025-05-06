"use client";

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "../notices/notices.module.css";
import nextConfig from "../../../next.config";
import { validURL } from "../achievements/validator";
interface Item {
  title: string;
  link: string;
  date?: string;
  isNew?: boolean;
  text?: string;
}



const News = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [oldNotices, setOldNotices] = useState<Item[]>([]);
  const [newNotices, setNewNotices] = useState<Item[]>([]);

  useEffect(() => {
    const fetchNoticesData = async () => {
      try {
        const response = await fetch("/json/events/events.json");
        if (!response.ok) throw new Error("Failed to fetch event data");

        const data = await response.json();
        console.info(data);

        const d: Item[] = data.data;
        const latest = d
          .filter((x) => x.isNew)
          .sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime());

        const old = d
          .filter((x) => !x.isNew)
          .sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime());

        setNewNotices(latest);
        setOldNotices(old);
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setError("Error loading notices data.");
      } finally {
        setLoading(false);
      }
    };

    fetchNoticesData();
  }, []);

  return (
    <div className="page-container">
      <Grid container className={styles.container}>
        <Grid size={1} />
        <Grid size={10}>
          <Typography variant="h2" gutterBottom className={styles.themeText}>
            <Box component="span" fontWeight={380}>
              Events
            </Box>
          </Typography>

          {error && <Typography color="error">{error}</Typography>}
          {loading && <Typography>Loading...</Typography>}

          {!loading && !error && (
            <>
              {/* New Notices */}
              <section className={styles.item_section}>
                <Typography variant="h5" className={styles.themeText}>
                  <Box component="span" fontWeight="fontWeightBold">
                    Recent Events
                  </Box>
                </Typography>
                <ul className="doclist">
                  {newNotices.map((item) => (
                    <li key={item.title}>
                      <a
                        href={
                          validURL(item.link)
                            ? item.link
                            : `${nextConfig.env?.DOCUMENT}/${item.link}`
                        }
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={styles.item}>
                          <Typography>
                            {item.date && (
                              <Typography variant="caption" color="textSecondary" gutterBottom>
                                Posted on: {item.date}
                              </Typography>
                            )}
                            <br />
                            <Box className={styles.themeText} component="span">
                              {item.title}
                            </Box>
                            <br />
                            <Box component="span">{item.text}</Box>
                          </Typography>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Old Notices */}
              <section className={styles.item_section} style={{ marginTop: "2rem" }}>
                <Typography variant="h5" className={styles.themeText}>
                  <Box component="span" fontWeight="fontWeightBold">
                    Archived Events
                  </Box>
                </Typography>
                <ul className="doclist">
                  {oldNotices.map((item) => (
                    <li key={item.title}>
                      <a
                        href={
                          validURL(item.link)
                            ? item.link
                            : `${nextConfig.env?.DOCUMENT}/${item.link}`
                        }
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={styles.item}>
                          <Typography>
                            {item.date && (
                              <Typography variant="caption" color="textSecondary" gutterBottom>
                                Posted on: {item.date}
                              </Typography>
                            )}
                            <br />
                            <Box className={styles.themeText} component="span">
                              {item.title}
                            </Box>
                            <br />
                            <Box component="span">{item.text}</Box>
                          </Typography>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default News;
