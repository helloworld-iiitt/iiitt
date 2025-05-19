"use client";

import NoticeSection from "@/components/NoticeSection/NoticeSection";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import styles from "../notices/notices.module.css";

interface Item {
  title: string;
  link: string;
  date?: string;
  isNew?: boolean;
  text?: string;
}

const Achievements = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [oldNotices, setOldNotices] = useState<Item[]>([]);
  const [newNotices, setNewNotices] = useState<Item[]>([]);

  useEffect(() => {
    const fetchNoticesData = async () => {
      try {
        const response = await fetch("/json/general/achievements.json");
        if (!response.ok) throw new Error("Failed to fetch achievements data");

        const data = await response.json();
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
              Notices
            </Box>
          </Typography>

          {error && <Typography color="error">{error}</Typography>}
          {loading && <Typography>Loading...</Typography>}

          {!loading && !error && (
            <>
              <NoticeSection title="Achievements" notices={newNotices} />

              <NoticeSection title="Old Achievements" notices={oldNotices} />
            </>
          )}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default Achievements;
