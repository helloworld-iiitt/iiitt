"use client";
import { numberToWords } from "@/types/numbertoWords";
import {
    Box, List, ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import { validURL } from "../../types/validator";
import styles from './Admission_pg.module.css';


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
        <Box mb={2} display="flex" justifyContent="center">
        <Typography
          variant="h3"
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}
          className={styles.themeText}
        >
          <strong>M.Tech. Admission 2025</strong>
        </Typography>
      </Box>
            <Grid container className={styles.container} style={{ marginTop: "2rem" }}>
                <Grid size={1} />
                <Grid size={10}>

                <Box mb={2}>
                        <Typography
                            variant="h4"
                            sx={{ color: "#2e8b57"}}
                            className={styles.themeText}
                        >
                            <strong>List of Postgraduate Programs</strong>
                        </Typography>
                    </Box>

                    <Box my={2} mt={6} sx={{ pl: { xs: 1, sm: 6 } }}>
                        <Typography variant="body1">
                            IIIT Tiruchirappalli offers the following {numberToWords(admissionData.programs.length)}&nbsp;
                            <strong>Postgraduate Programs</strong>:
                        </Typography>

                    </Box>
                    <Box my={2} sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}>
        <List sx={{ listStyleType: 'disc', pl: 2 }}>
          {admissionData.programs.map((program: string, index: number) => (
            <ListItem
              key={index}
              sx={{ display: 'list-item', listStyleType: 'disc', pl: 2 }}
              disableGutters
            >
              <ListItemText primary={program} />
            </ListItem>
          ))}
        </List>
      </Box>
                    <Typography
                        variant="h3"
                        component="h3"
                        gutterBottom
                        className={styles.themeText}
                    >
                        <Box component="span">M.Tech Admission</Box>
                    </Typography>


                    {admissionData.programdetails.map((program: any) => (
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
