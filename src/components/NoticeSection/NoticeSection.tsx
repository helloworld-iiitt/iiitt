"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import styles from "./NoticeSection.module.css";
import nextConfig from "../../../next.config";
import { validURL } from "../../types/validator";

interface NoticeItem {
  title: string;
  link: string;
  date?: string;
  isNew?: boolean;
  text?: string;
}

const NoticeSection = ({
  title,
  notices,
}: {
  title: string;
  notices: NoticeItem[];
}) => {
  if (notices.length === 0) return null;

  return (
    <section className={styles.item_section}>
      <Typography variant="h5" className={styles.themeText}>
        <Box component="span" fontWeight="fontWeightBold">
          {title}
        </Box>
      </Typography>
      <br></br>
      <ul className="doclist">
        {notices.map((item) => (
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
                <Box className={styles.themeText} component="span">
                  {item.title}
                </Box>
                <br />
                {item.text && <Box component="span">{item.text}</Box>}
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
