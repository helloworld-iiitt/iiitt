"use client";
import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./departments.module.css";
interface Department {
  name: string;
  description: string;
  url: string;
}

const Departments: React.FC = () => {
  const [depts, setDepts] = useState<Department[] | null>(null);

  useEffect(() => {
    document.title = "Departments";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    fetch("/json/departments/departments.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch departments data");
        }
        return response.json();
      })
      .then((data) => {
        setDepts(data.data);
      })
      .catch((error) => {
        console.error("Error fetching department data:", error);
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
            <Box
              component="span"
              sx={{
                fontSize: { xs: "32px", sm: "42px", md: "54px" },
                fontWeight: 580,
                display: "inline-block",
                background: "linear-gradient(45deg, #1a5d3a, #2e8b57)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "2rem",
                letterSpacing: "1px",
              }}
            >
              Departments
            </Box>
          </Typography>
          <div className={styles.cardContainer}>
            {depts &&
              depts.map((dept, index) => (
                <div
                  key={index}
                  className={styles.card}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Typography
                    variant="h5"
                    className={styles.themeText}
                    gutterBottom
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.5rem",
                        color: "#1a5d3a",
                      }}
                    >
                      {dept.name}
                    </Box>
                  </Typography>
                  <Box component="p" className={styles.deptDesc}>
                    {dept.description}
                  </Box>
                  <Box mt={2} textAlign="right">
                    <a
                      href={`/departments/${dept.url}`}
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
              ))}
          </div>
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default Departments;