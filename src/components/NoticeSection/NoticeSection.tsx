"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import styles from "./NoticeSection.module.css";
import nextConfig from "../../../next.config";
import { validURL } from "../../types/validator";
import { FiberNew } from "@mui/icons-material";
import { EventItem } from "@/types/common.types";
const NoticeSection = ({
  title,
  notices,
}: {
  title: string;
  notices: EventItem[];
}) => {
  if (notices.length === 0) return null;

  return (
    <section className={styles.item_section} style={{ marginBottom: "2rem" }}>
  <Typography
    variant="h5"
    sx={{
      mb: 2,
      borderBottom: "2px solid #e0e0e0",
      pb: 0.5,
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}
    className={styles.themeText}
  >
    {title}
  </Typography>

  <ul className="doclist">
    {notices.map((item,i) => (

      <li key={i} style={{ marginBottom: "1.2rem" }}>
        <a
          href={
            validURL(item.link!)
              ? item.link
              : `${nextConfig.env?.DOCUMENT}/${item.link}`
          }
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.item}>
            <Box className={styles.themeText} component="span" display="flex" alignItems="center" gap={1}>
              {item.title}
              {item.isNew && title!=="Open Tenders" && <FiberNew  style={{ color: "red"}} fontSize="small" />}
            </Box>
            {item.date && (
              <>
                <Typography variant="caption" color="textSecondary">
                  Posted on: {item.date}
                </Typography>
              </>
            )}
          </div>
        </a>
      </li>

    ))}
  </ul>
</section>
  );
};

export default NoticeSection;
