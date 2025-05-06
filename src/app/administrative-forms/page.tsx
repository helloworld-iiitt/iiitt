"use client";
import React, { useEffect, useState, useCallback } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Paper,
  Button,
  CircularProgress,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import styles from "./forms.module.css";
import nextConfig from "../../../next.config";
interface FormData {
  title: string;
  link: string;
}



export default function AdministrativeForms() {
  const [forms, setForms] = useState<FormData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFormsData = useCallback(async () => {
    try {
      const response = await fetch("/json/general/administrativeForms.json");
      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid JSON format. Expected an array.");
      }

      setForms(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
      setForms([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    document.title = "ADMINISTRATIVE FORMS | IIITT";
    fetchFormsData();
    return () => {
      document.title = "IIIT Trichy";
    };
  }, [fetchFormsData]);

  return (
    <div>
      <Typography variant="h2" className={styles.themeText}>
        Administrative Forms
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : forms && forms.length > 0 ? (
        <TableContainer component={Paper} className={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableHead}>S. No.</TableCell>
                <TableCell className={styles.tableHead}>Form Title</TableCell>
                <TableCell className={styles.tableHead}>Download</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forms.map((form, index) => {
                const fileUrl = `${nextConfig.env?.DOCUMENT}/${form.link}`;
                return (
                  <TableRow key={index} className={styles.tableRow}>
                    <TableCell className={styles.tableCell}>{index + 1}</TableCell>
                    <TableCell className={styles.tableCell}>{form.title}</TableCell>
                    <TableCell className={styles.tableCell}>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<DownloadIcon />}
                        href={fileUrl}
                        download
                      >
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1" color="error">
          No forms available.
        </Typography>
      )}
    </div>
  );
}
