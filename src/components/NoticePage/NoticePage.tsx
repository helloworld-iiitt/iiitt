"use client";

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import NoticeSection from "@/components/NoticeSection/NoticeSection";
import styles from "@/components/NoticePage/noticespage.module.css"
import { EventItem } from "@/types/common.types";
import { NoticePageProps } from "@/types/noticepage.types";


const NoticePage: React.FC<NoticePageProps> = ({
  pageTitle,
  documentTitle,
  jsonPath,
  newSectionTitle,
  oldSectionTitle,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newNotices, setNewNotices] = useState<EventItem[]>([]);
  const [oldNotices, setOldNotices] = useState<EventItem[]>([]);

  useEffect(() => {
    document.title = documentTitle;

    const fetchData = async () => {
      try {
        const res = await fetch(jsonPath);
        if (!res.ok) throw new Error("Failed to fetch data");

        const json = await res.json();
        const data: EventItem[] = json.data;

        const latest = data
          .filter((item) => item.isNew)
          .sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime());

        const old = data
          .filter((item) => !item.isNew)
          .sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime());

        setNewNotices(latest);
        setOldNotices(old);
      } catch (err) {
        console.error("Error loading JSON data:", err);
        setError("Error loading data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [documentTitle, jsonPath]);

  return (
    <div className="page-container">
      <Grid container className={styles.container}>
        <Grid size={1} />
        <Grid size={10}>
          <Typography variant="h2" gutterBottom className={styles.themeText}>
            <Box component="span" fontWeight={380}>
              {pageTitle}
            </Box>
          </Typography>

          {error && <Typography color="error">{error}</Typography>}
          {loading && <Typography>Loading...</Typography>}

          {!loading && !error && (
            <>
              <NoticeSection title={newSectionTitle} notices={newNotices} />
              <br />
              <NoticeSection title={oldSectionTitle} notices={oldNotices} />
            </>
          )}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default NoticePage;
