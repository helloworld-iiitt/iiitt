"use client";

import { Box, Typography, Skeleton, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import InfoSection from "@/components/InfoSection/InfoSection";
import EmptyNotice from "@/components/EmptySection/EmptyNotice";
import PersonCard from "../PersonCard/PersonCard";
import styles from "./labcomponent.module.css";

interface LabPageProps {
  labName: string;
}

interface LabData {
  name: string;
  about: string;
  equipment: string[];
  faculty_incharge: {
    name: string;
    designation: string;
    src: string;
  };
  phdStudents: {
    name: string;
    src: string;
  }[];
  research_areas: string[];
  projects: {
    title: string;
    description: string;
  }[];
  publications: {
    [year: string]: string[];
  };
  books_published?: string[];
  contact: {
    email: string;
    phone: string;
  };
}

const LabPage: React.FC<LabPageProps> = ({ labName }) => {
  const [labData, setLabData] = useState<LabData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/json/labs/${labName}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Lab data not found");
        return res.json();
      })
      .then((data) => setLabData(data.data))
      .catch(() => setError("Failed to load lab data"));
  }, [labName]);

  if (error) {
    return (
      <Box p={4}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container>
        <Grid size={1} />
        <Grid size={10}>
          <Typography
            variant="h3"
            sx={{
              mt: 4,
              mb: 2,
              fontWeight: 600,
              background: "linear-gradient(to right, #003366, #006666)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {labData ? labData.name : <Skeleton width="300px" />}
          </Typography>
          <Box mb={2}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Indian Institute of Information Technology Tiruchirappalli
            </Typography>
          </Box>

          {labData ? (
            <>
              <InfoSection title="About">
                {labData.about ? (
                  <Typography>{labData.about}</Typography>
                ) : (
                  <EmptyNotice />
                )}
              </InfoSection>

              <InfoSection title="Faculty In-Charge">
                <PersonCard
                  name={labData.faculty_incharge.name}
                  designation={labData.faculty_incharge.designation}
                  src={labData.faculty_incharge.src}
                  src_type="phd"
                />
              </InfoSection>

              <InfoSection title="PhD Students">
                <div className={styles.gridContainer}>
                  {labData.phdStudents.map((member, index) => (
                    <div className={styles.gridItem} key={index}>
                      <PersonCard
                        key={index}
                        name={member.name}
                        src={member.src}
                        src_type="phd"
                      />
                    </div>
                  ))}
                </div>
              </InfoSection>

              <InfoSection title="Available Equipment">
                {labData.equipment.length ? (
                  labData.equipment.map((item, idx) => (
                    <Typography key={idx}>&bull; {item}</Typography>
                  ))
                ) : (
                  <EmptyNotice />
                )}
              </InfoSection>

              <InfoSection title="Research Areas">
                {labData.research_areas.length ? (
                  labData.research_areas.map((area, idx) => (
                    <Typography key={idx}>&bull; {area}</Typography>
                  ))
                ) : (
                  <EmptyNotice />
                )}
              </InfoSection>

              <InfoSection title="Projects">
                {labData.projects.length ? (
                  labData.projects.map((proj, idx) => (
                    <Box key={idx} mb={1}>
                      <Typography fontWeight={600}>{proj.title}</Typography>
                      <Typography variant="body2">{proj.description}</Typography>
                    </Box>
                  ))
                ) : (
                  <EmptyNotice />
                )}
              </InfoSection>

              <InfoSection title="Publications">
                {Object.keys(labData.publications).length > 0 ? (
                  Object.entries(labData.publications).map(([year, pubs]) => (
                    <Box key={year} mb={2}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginBottom: 1 }}
                      >
                        {year}
                      </Typography>
                      {pubs.map((pub, idx) => (
                        <Typography key={idx} sx={{ marginLeft: 2 }}>
                          &bull; {pub}
                        </Typography>
                      ))}
                    </Box>
                  ))
                ) : (
                  <EmptyNotice />
                )}
              </InfoSection>

              {labData.books_published && labData.books_published.length > 0 && (
                <InfoSection title="Books Published">
                  {labData.books_published.map((book, idx) => (
                    <Typography key={idx}>&bull; {book}</Typography>
                  ))}
                </InfoSection>
              )}

              <InfoSection title="Contact">
                <Typography>
                  <strong>Email:</strong> {labData.contact.email}
                </Typography>
                <Typography>
                  <strong>Phone:</strong> {labData.contact.phone}
                </Typography>
              </InfoSection>
            </>
          ) : (
            [...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                height={140}
                sx={{ borderRadius: 2, mb: 2 }}
              />
            ))
          )}
        </Grid>
        <Grid size={1} />
      </Grid>
    </Box>
  );
};

export default LabPage;
