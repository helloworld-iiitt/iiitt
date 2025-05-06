"use client";
import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from './Admission_pg.module.css';
import nextConfig from "../../../next.config";
import { validURL } from "../achievements/validator";

const Admission_pg: React.FC = () => {
    const [admissionData, setAdmissionData] = useState<any>(null);

    useEffect(() => {
        fetch('/json/admission/pg.json')
            .then((response) => response.json())
            .then((data) => setAdmissionData(data))
            .catch((error) => console.error("Error loading admission data:", error));
    }, []);

    if (!admissionData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Grid container className={styles.container} style={{ marginTop: "2rem" }}>
                <Grid size={1} />
                <Grid size={10}>
                    <Typography
                        variant="h3"
                        component="h3"
                        gutterBottom
                        className={styles.themeText}
                    >
                        <Box component="span">M.Tech Admission</Box>
                    </Typography>

                    {admissionData.programs.map((program: any) => (
                        <Box key={program.id} >
                            <h3><strong>{program.title}</strong></h3>
<hr></hr>
                            {program.items.map((item: any, index: number) => (
                                <p key={index}>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={validURL(item.url) ? item.url : `${nextConfig?.env?.DOCUMENT}/${item.url}`}
                                        className={styles.link}
                                    >
                                        {item.label}
                                    </a>
                                </p>
                            ))}
                            <br />
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default Admission_pg;
