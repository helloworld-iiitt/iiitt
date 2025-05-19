"use client";

import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "../department.module.css";

interface Department {
  department: string;
  about: string;
  message_from_hod: {
    name: string;
    designation: string;
    message: string;
  };
  faculty_members: {
    name: string;
    designation: string;
  }[];
  research_scholars: {
    name: string;
    topic: string;
  }[];
  research_areas: string[];
  announcements: {
    title: string;
    date: string;
  }[];
  latest_news: {
    title: string;
  }[];
  contact: {
    department: string;
    college: string;
    location: string;
    email: string;
    phone: string;
  };
}

const Mech: React.FC = () => {
  const [mechData, setMechData] = useState<Department | null>(null);

  useEffect(() => {
    document.title = "MECH";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    fetch("/json/departments/mech.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Mech data");
        }
        return response.json();
      })
      .then((data) => {
        setMechData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching department data:", error);
      });
  }, []);

  return (
    <div>
      <Grid container className={styles.departmentContainer}>
        <Grid size={1} />
        <Grid size={10}>
          {/* Heading */}
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={styles.departmentThemeText}
          >
            <Box
              component="span"
              sx={{
                fontSize: { xs: "32px", sm: "42px", md: "54px" },
                fontWeight: 600,
                display: "inline-block",
                background: "linear-gradient(45deg, #1a5d3a, #2e8b57)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "2rem",
                letterSpacing: "1px",
              }}
            >
              {mechData ? mechData.department : "Loading..."}
            </Box>
          </Typography>

          {mechData && (
            <>
              {/* About */}
              <div className={styles.departmentCard}>
                <Typography
                  variant="h5"
                  className={styles.departmentThemeText}
                  gutterBottom
                >
                  <Box component="span" fontWeight="fontWeightBold">
                    About
                  </Box>
                </Typography>
                <Box component="p" className={styles.departmentDesc}>
                  {mechData.about}
                </Box>
              </div>

              {/* HOD Message */}
              <div className={styles.departmentCard}>
                <Typography
                  variant="h5"
                  className={styles.departmentThemeText}
                  gutterBottom
                >
                  <Box component="span" fontWeight="fontWeightBold">
                    Message from the Head of Department
                  </Box>
                </Typography>
                <Box
                  component="p"
                  className={styles.departmentDesc}
                  sx={{ fontStyle: "italic" }}
                >
                  "{mechData.message_from_hod.message}"
                </Box>
                <Typography variant="subtitle2" color="text.secondary">
                  – {mechData.message_from_hod.name},{" "}
                  {mechData.message_from_hod.designation}
                </Typography>
              </div>

              {/* Faculty Members */}
              <div className={styles.departmentCard}>
                <Typography
                  variant="h5"
                  className={styles.departmentThemeText}
                  gutterBottom
                >
                  <Box component="span" fontWeight="fontWeightBold">
                    Faculty Members
                  </Box>
                </Typography>
                {mechData.faculty_members.map((faculty, index) => (
                  <Box key={index} mb={1}>
                    <Typography>{faculty.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {faculty.designation}
                    </Typography>
                  </Box>
                ))}
                <Box mt={2} textAlign="right">
                  <a
                    href="/faculty"
                    style={{
                      color: "#1a5d3a",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Know more &rarr;
                  </a>
                </Box>
              </div>

              {/* Research Scholars */}
              {mechData.research_scholars &&
                mechData.research_scholars.length > 0 && (
                  <div className={styles.departmentCard}>
                    <Typography
                      variant="h5"
                      className={styles.departmentThemeText}
                      gutterBottom
                    >
                      <Box component="span" fontWeight="fontWeightBold">
                        Research Scholars
                      </Box>
                    </Typography>
                    {mechData.research_scholars.map((scholar, index) => (
                      <Box key={index} mb={1}>
                        <Typography>{scholar.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          Research Topic: {scholar.topic}
                        </Typography>
                      </Box>
                    ))}
                  </div>
                )}

              {/* Announcements */}
              <div className={styles.departmentCard}>
                <Typography
                  variant="h5"
                  className={styles.departmentThemeText}
                  gutterBottom
                >
                  <Box component="span" fontWeight="fontWeightBold">
                    Announcements
                  </Box>
                </Typography>
                {mechData.announcements.map((a, i) => (
                  <Box key={i} mb={1.5}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      📢 {a.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {a.date}
                    </Typography>
                  </Box>
                ))}
              </div>

              {/* Research Areas */}
              <div className={styles.departmentCard}>
                <Typography
                  variant="h5"
                  className={styles.departmentThemeText}
                  gutterBottom
                >
                  <Box component="span" fontWeight="fontWeightBold">
                    Research Areas
                  </Box>
                </Typography>
                {mechData.research_areas.map((area, i) => (
                  <Box key={i} mb={1.5}>
                    <Typography>🔬 {area}</Typography>
                  </Box>
                ))}
              </div>

              {/* Latest News */}
              <div className={styles.departmentCard}>
                <Typography
                  variant="h5"
                  className={styles.departmentThemeText}
                  gutterBottom
                >
                  <Box component="span" fontWeight="fontWeightBold">
                    Latest News
                  </Box>
                </Typography>
                {mechData.latest_news.map((news, i) => (
                  <Box key={i} mb={1.5}>
                    <Typography>📰 {news.title}</Typography>
                  </Box>
                ))}
              </div>

              {/* Contact */}
              <div className={styles.departmentCard}>
                <Typography
                  variant="h5"
                  className={styles.departmentThemeText}
                  gutterBottom
                >
                  <Box component="span" fontWeight="fontWeightBold">
                    Contact Us
                  </Box>
                </Typography>
                <Typography>
                  <strong>Department:</strong> {mechData.contact.department}
                </Typography>
                <Typography>
                  <strong>College:</strong> {mechData.contact.college}
                </Typography>
                <Typography>
                  <strong>Location:</strong> {mechData.contact.location}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {mechData.contact.email}
                </Typography>
                <Typography>
                  <strong>Phone:</strong> {mechData.contact.phone}
                </Typography>
              </div>
            </>
          )}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default Mech;
