/**
 * Achievements Page
 *
 * Fetches data from /json/general/achievements.json
 * seperates into new and old notices
 * filters based on time frame
 * utilizes Notice Component
 *
 */

"use client";

// #region import
import NoticeSection from "@/components/NoticeSection/NoticeSection";
import { Item } from "@/types/achievements.types";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import styles from "../notices/notices.module.css";
// #endregion

const Achievements = () => {

  const [loading, setLoading] = useState<boolean>(true); // NOTE:renders Circular progress based on state
  const [error, setError] = useState<string | null>(null);


  const [oldNotices, setOldNotices] = useState<Item[]>([]);
  const [newNotices, setNewNotices] = useState<Item[]>([]);

  useEffect(() => {
    document.title = "Achievements | IIIT Tiruchirappalli";

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
              Achievements
            </Box>
          </Typography>

          {error && <Typography color="error">{error}</Typography>}
          {loading && <Typography>Loading...</Typography>}

          {!loading && !error && (
            <>
              <NoticeSection title="Achievements" notices={newNotices} />
              <br/>
              <NoticeSection   title="Old Achievements" notices={oldNotices} />
            </>
          )}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default Achievements;
