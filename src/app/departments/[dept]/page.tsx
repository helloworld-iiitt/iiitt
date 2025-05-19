"use client";

import { Box, Typography, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "../department.module.css";
import InfoSection from "@/components/InfoSection/InfoSection";
import EmptyNotice from "@/components/EmptySection/EmptyNotice";

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

const Cse: React.FC = () => {
  const params = useParams();
  const dept = params?.dept as string;
  const [cseData, setCseData] = useState<Department | null>(null);

  useEffect(() => {
    document.title = `${dept}`;
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    fetch(`/json/departments/${dept}.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to fetch ${dept} data`);
        return response.json();
      })
      .then((data) => setCseData(data.data))
      .catch((error) =>
        console.error("Error fetching department data:", error)
      );
  }, [dept]);

  return (
    <div>
      <Grid container className={styles.departmentContainer}>
        <Grid size={1} />
        <Grid size={10}>
          {/* Department Title */}
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
              {cseData ? cseData.department : <Skeleton width="200px" />}
            </Box>
          </Typography>

          {/* Content Section */}
          {cseData ? (
            <>
              {/* About */}
              <InfoSection title="About">
                <Box component="p" className={styles.departmentDesc}>
                  {cseData.about}
                </Box>
              </InfoSection>

              {/* Message from HOD */}
              <InfoSection title="Message from the Head of Department">
                <Box
                  component="p"
                  className={styles.departmentDesc}
                  sx={{ fontStyle: "italic" }}
                >
                  "{cseData.message_from_hod.message}"
                </Box>
                <Typography variant="subtitle2" color="text.secondary">
                  – {cseData.message_from_hod.name},{" "}
                  {cseData.message_from_hod.designation}
                </Typography>
              </InfoSection>

              {/* Faculty Members */}
              <InfoSection title="Faculty Members">
                {Array.isArray(cseData.faculty_members) &&
                  cseData.faculty_members.length > 0 ? (
                  cseData.faculty_members.map((faculty, index) => (
                    <Box key={index} mb={1}>
                      <Typography>{faculty.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {faculty.designation}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <EmptyNotice />
                )}
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
              </InfoSection>

              {/* Research Scholars */}
              <InfoSection title="Research Scholars">
                {Array.isArray(cseData.research_scholars) &&
                  cseData.research_scholars.length > 0 ? (
                  cseData.research_scholars.map((scholar, index) => (
                    <Box key={index} mb={1}>
                      <Typography>{scholar.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Research Topic: {scholar.topic}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <EmptyNotice />
                )}
              </InfoSection>
   {/* Research Area */}
              <InfoSection title="Research Areas">
                {Array.isArray(cseData.research_areas) &&
                  cseData.research_areas.length > 0 ? (
                  cseData.research_areas.map((area, i) => (
                    <Box key={i} mb={1.5}>
                      <Typography>{area}</Typography>
                    </Box>
                  ))
                ) : (
                  <EmptyNotice />
                )}
              </InfoSection>

              {/* Announcements */}
              <InfoSection title="Announcements">
                {Array.isArray(cseData.announcements) && cseData.announcements.length > 0 ? (
                  cseData.announcements.map((a, i) => (
                    <Box key={i} mb={1.5}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {a.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {a.date}
                      </Typography>
                    </Box>
                  ))) : (<EmptyNotice />)}


              </InfoSection>


              {/* Latest News */}
              <InfoSection title="Latest News">
                {Array.isArray(cseData.latest_news) &&
                  cseData.latest_news.length > 0 ? (
                  cseData.latest_news.map((news, i) => (
                    <Box key={i} mb={1.5}>
                      <Typography>{news.title}</Typography>
                    </Box>
                  ))
                ) : (
                  <EmptyNotice />
                )}
              </InfoSection>

              {/* Contact Us */}
              {cseData.contact && (
                <InfoSection title="Contact Us">
                  {cseData.contact.department && (
                    <Typography>
                      <strong>Department:</strong> {cseData.contact.department}
                    </Typography>
                  )}
                  {cseData.contact.college && (
                    <Typography>
                      <strong>College:</strong> {cseData.contact.college}
                    </Typography>
                  )}
                  {cseData.contact.location && (
                    <Typography>
                      <strong>Location:</strong> {cseData.contact.location}
                    </Typography>
                  )}
                  {cseData.contact.email && (
                    <Typography>
                      <strong>Email:</strong> {cseData.contact.email}
                    </Typography>
                  )}
                  {cseData.contact.phone && (
                    <Typography>
                      <strong>Phone:</strong> {cseData.contact.phone}
                    </Typography>
                  )}
                </InfoSection>
              )}
            </>
          ) : (
            <>
              {[...Array(5)].map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={150}
                  sx={{ borderRadius: 2, mb: 2 }}
                />
              ))}
            </>
          )}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

// Reusable Section Component

export default Cse;
