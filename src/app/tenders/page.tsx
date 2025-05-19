"use client";

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "../notices/notices.module.css";
import nextConfig from "../../../next.config";
import { validURL } from "../../types/validator";
import NoticeSection from "@/components/NoticeSection/NoticeSection";
interface Item {
  title: string;
  link: string;
  date?: string;
  isNew?: boolean;
  text?: string;
}



const Tenders = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [oldNotices, setOldNotices] = useState<Item[]>([]);
  const [newNotices, setNewNotices] = useState<Item[]>([]);

  useEffect(() => {
    const fetchNoticesData = async () => {
      try {
        const response = await fetch("/json/general/tenders.json");
        if (!response.ok) throw new Error("Failed to fetch tenders data");

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
            <NoticeSection title="Open Tenders" notices={newNotices}/>
            <br/>
            <NoticeSection title="Close Tenders" notices={oldNotices}/>
            </>
          )}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default Tenders;
