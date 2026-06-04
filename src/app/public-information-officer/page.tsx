"use client";

import { RTIData } from "@/types/common.types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../rti/rti.module.css";

const isPioRelatedRole = (officer: RTIData) => {
  const combinedRole = `${officer.head} ${officer.designation}`.toLowerCase();
  return (
    combinedRole.includes("public information officer") ||
    combinedRole.includes("pio") ||
    combinedRole.includes("nodal officer") ||
    combinedRole.includes("first appellate authority")
  );
};

export default function PublicInformationOfficerPage() {
  const [pioHistory, setPioHistory] = useState<RTIData[]>([]);

  useEffect(() => {
    document.title = "Public Information Officer | IIIT Tiruchirappalli";

    const fetchPioHistory = async () => {
      try {
        const response = await fetch("/json/committee/members/pio.json");
        const data = await response.json();
        const filteredHistory = (data.data as RTIData[]).filter(isPioRelatedRole);
        setPioHistory(filteredHistory);
      } catch (error) {
        console.error("Error fetching PIO history:", error);
      }
    };

    fetchPioHistory();

    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Typography variant="h2" component="h2" gutterBottom className={styles.heading}>
        Public Information Officer
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        The details below are aligned with the RTI tenure history and list the officers who have served in PIO-related
        roles at IIIT Tiruchirappalli.
      </Typography>

      <TableContainer component={Paper} className={styles.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHead}>Sl. No.</TableCell>
              <TableCell className={styles.tableHead}>Name</TableCell>
              <TableCell className={styles.tableHead}>Designation</TableCell>
              <TableCell className={styles.tableHead}>From Date</TableCell>
              <TableCell className={styles.tableHead}>To Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pioHistory.map((officer, index) => (
              <TableRow key={`${officer.name}-${officer.fromDate ?? index}`} className={styles.tableRow}>
                <TableCell className={styles.tableCell}>{index + 1}</TableCell>
                <TableCell className={styles.tableCell}>{officer.name}</TableCell>
                <TableCell className={styles.tableCell}>{officer.head}</TableCell>
                <TableCell className={styles.tableCell}>{officer.fromDate || "-"}</TableCell>
                <TableCell className={styles.tableCell}>{officer.toDate || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
