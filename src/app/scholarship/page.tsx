"use client"
import { useEffect, useState, useCallback } from "react";
import styles from "./scholarship.module.css"
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { Divider } from "@mui/material";
import { CircularProgress } from "@mui/material";
import TableComponent from "@/components/tablecomponent/tablecomponent";
import nextConfig from "../../../next.config";

interface FormData {
    title: string;
    link: string;
}
export default function Scholarship() {
    const [forms, setForms] = useState<FormData[] | null>(null);
    const [fromloading, setLoading] = useState<boolean>(true);
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [formresponse] = await Promise.allSettled([
                fetch("/json/general/scholarship.json"),
            ]);
            if (formresponse.status === "fulfilled") {
                const meetingsJson = await formresponse.value.json();
                setForms(meetingsJson);
            }
        } catch (error) {
            console.error("Error fetching form data:", error);
            setForms([]);
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        document.title = "Scholarship | IIITT";
        fetchData();
        return () => {
            document.title = "IIIT Trichy";
        };
    }, [fetchData]);
    return (
        <Grid container className={styles.container}>
            <Grid size={1} />
            <Grid size={10}>
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    align="center"
                    color="#2e8b57"
                    sx={{ fontWeight: 300 }}
                >
                    Scholarship
                </Typography>

                <section className={styles.sectionPadding}>
                    <Typography variant="h4" className={styles.themeText} gutterBottom>
                        <Box component="span" fontWeight="fontWeightBold">
                            NSP
                        </Box>
                    </Typography>
                    <Box component="span" fontSize="1.2rem" >
                        National Scholarship Portal (NSP 2.0) is Inviting applications (Fresh and Renewal) under various schemes for the year 2024-25
                        <a href="https://scholarships.gov.in/">
                            <Typography variant="h6">NSP portal</Typography>
                        </a>
                        <a href={`${nextConfig.env?.DOCUMENT}${"/scholarships/Circular_NSP_2024_25.pdf"}`}>
                            <Typography variant="h6">Announcement for the NSP Scholarship 2024-2025</Typography>
                        </a>
                    </Box>
                    <ul>
                        <li className={styles.linear}>
                            For information (use the link : <a href="https://scholarships.gov.in/All-Scholarships">https://scholarships.gov.in/All-Scholarships</a>)
                        </li>
                        <br></br>
                        <li className={styles.linear}>
                            To apply on National Scholarship Portal (use the link : <a href="https://scholarships.gov.in/">https://scholarships.gov.in/</a> )
                        </li>

                    </ul>
                </section>
                <Divider />
                {fromloading ? (
                    <CircularProgress />
                ) : forms && forms.length > 0 ? (
                    <TableComponent
                        title=""
                        loading={fromloading}
                        columns={[]}
                        isMeetingTable={true}
                        members={forms}
                    ></TableComponent>
                ) : (
                    <Typography variant="body1" color="error">
                        No forms available.
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
}