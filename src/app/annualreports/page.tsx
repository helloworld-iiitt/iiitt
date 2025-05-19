"use client"
import TableComponent from "@/components/tablecomponent/tablecomponent";
import { Box, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useCallback, useEffect, useState } from "react";
import styles from "../scholarship/scholarship.module.css";

interface FormData {
    title: string;
    link: string;
}
export default function AnnualReports() {
    const [forms, setForms] = useState<FormData[] | null>(null);
    const [fromloading, setLoading] = useState<boolean>(true);
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [formresponse] = await Promise.allSettled([
                fetch("/json/general/annualreports.json"),
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
        document.title = "Annual Reports | IIITT";
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
                    className={styles.themeText}
                    align="center"
                >
                    <Box component="span" fontWeight={380}>
                        Annual Reports
                    </Box>
                </Typography>

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