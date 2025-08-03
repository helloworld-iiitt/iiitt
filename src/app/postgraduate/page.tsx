/**
 *
 * PostGraduate Detail and Forms Page
 *
 * fetches data from /json/students/postgraduate
 * fetches css from /undergraduate/undergraduate
 */


"use client";
import { PostGraduateData } from "@/types/common.types";
import LinkIcon from "@mui/icons-material/Link";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import styles from "../undergraduate/undergraduate.module.css";
const PostGraduate: React.FC = () => {
  const [data, setData] = useState<PostGraduateData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = "Postgraduate | IIIT Tiruchirappalli ";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    fetch("/json/students/postgraduate.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch PostGraduate data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching PostGraduate data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container">
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
              Postgraduate
            </Box>
          </Typography>

          {loading && <Typography>Loading...</Typography>}

          {data &&
            Object.entries(data).map(([category, links], catIndex) => (
              <Grid size={12} key={catIndex}>
                <div
                  className={styles.card}
                  style={{
                    marginTop: "10px",
                    animationDelay: `${catIndex * 0.2}s`,
                  }}
                >
                  <Typography
                    variant="h4"
                    className={styles.themeText}
                    gutterBottom
                  >
                    <Box component="span" fontWeight="fontWeightBold">
                      {category}
                    </Box>
                  </Typography>

                  <ul className={styles.linkList}>
                    {links.map((linkItem, index) => (
                      <li key={index}>
                        <LinkIcon
                          style={{ marginRight: "5px", color: "#007bff" }}
                        />
                        <a
                          href={`${nextConfig.env?.DOCUMENT}${linkItem.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {linkItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid>
            ))}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default PostGraduate;
