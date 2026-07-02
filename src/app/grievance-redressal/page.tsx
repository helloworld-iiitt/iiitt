"use client";

import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./grievance-redressal.module.css";
import { useEffect, useState } from "react";

interface GrievanceRedressalList {
  internal_complaints: {
    name: string;
    designation: string;
    position: string;
  }[];
  disciplinary: {
    name: string;
    designation: string;
    position: string;
  }[];
  anti_ragging: {
    name: string;
    designation: string;
    role: string;
  }[];
  sc_st: {
    name: string;
    designation: string;
    role: string;
  }[];
  liaison: {
    name: string;
    designation: string;
    role: string;
  }[];
}

export default function GrievanceRedressal() {
  const [grievanceRedressalList, setGrievanceRedressalList] =
    useState<GrievanceRedressalList | null>(null);

  useEffect(() => {
    const fetchGrievanceRedressalData = async () => {
      try {
        const response = await fetch(
          "/json/committee/members/grievance_redressal.json",
        );
        const data: GrievanceRedressalList = await response.json();
        setGrievanceRedressalList(data);
      } catch (err) {
        console.error("Error fetching Grievance Redressal data:", err);
      }
    };

    fetchGrievanceRedressalData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Typography variant="h2" className={styles.heading}>Grievance Redressal</Typography>
      <Typography variant="body1" sx={{ mb: 4, mt: 4 }}>
        The Institute has the following committees to address the Grievances of
        the Stakeholders alongside the Public Grievance Portal of the Government
        of India.
      </Typography>

      {grievanceRedressalList ? (
        <>
          <Typography variant="h5" gutterBottom className={styles.sectionTitle}>
            Internal Complaints Committee
          </Typography>
          <TableContainer
            component={Paper}
            className={styles.table}
            sx={{ mb: 4 }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.tableHead}>S.No.</TableCell>
                  <TableCell className={styles.tableHead}>Name</TableCell>
                  <TableCell className={styles.tableHead}>
                    Designation
                  </TableCell>
                  <TableCell className={styles.tableHead}>Position</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {grievanceRedressalList.internal_complaints.map(
                  (member, idx) => (
                    <TableRow key={idx} className={styles.tableRow}>
                      <TableCell className={styles.tableCell}>
                        {idx + 1}
                      </TableCell>
                      <TableCell className={styles.tableCell}>
                        {member.name}
                      </TableCell>
                      <TableCell className={styles.tableCell}>
                        {member.designation}
                      </TableCell>
                      <TableCell className={styles.tableCell}>
                        {member.position}
                      </TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h5" gutterBottom className={styles.sectionTitle}>
            Disciplinary Committee
          </Typography>
          <TableContainer
            component={Paper}
            className={styles.table}
            sx={{ mb: 4 }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.tableHead}>S.No.</TableCell>
                  <TableCell className={styles.tableHead}>Name</TableCell>
                  <TableCell className={styles.tableHead}>
                    Designation
                  </TableCell>
                  <TableCell className={styles.tableHead}>Position</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {grievanceRedressalList.disciplinary.map((member, idx) => (
                  <TableRow key={idx} className={styles.tableRow}>
                    <TableCell className={styles.tableCell}>
                      {idx + 1}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.name}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.designation}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.position}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h5" gutterBottom className={styles.sectionTitle}>
            Anti-Ragging Committee
          </Typography>
          <TableContainer
            component={Paper}
            className={styles.table}
            sx={{ mb: 4 }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.tableHead}>S.No.</TableCell>
                  <TableCell className={styles.tableHead}>Name</TableCell>
                  <TableCell className={styles.tableHead}>
                    Designation
                  </TableCell>
                  <TableCell className={styles.tableHead}>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {grievanceRedressalList.anti_ragging.map((member, idx) => (
                  <TableRow key={idx} className={styles.tableRow}>
                    <TableCell className={styles.tableCell}>
                      {idx + 1}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.name}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.designation}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.role}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h5" gutterBottom className={styles.sectionTitle}>
            SC/ST Cell
          </Typography>
          <TableContainer
            component={Paper}
            className={styles.table}
            sx={{ mb: 4 }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.tableHead}>S.No.</TableCell>
                  <TableCell className={styles.tableHead}>Name</TableCell>
                  <TableCell className={styles.tableHead}>
                    Designation
                  </TableCell>
                  <TableCell className={styles.tableHead}>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {grievanceRedressalList.sc_st.map((member, idx) => (
                  <TableRow key={idx} className={styles.tableRow}>
                    <TableCell className={styles.tableCell}>
                      {idx + 1}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.name}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.designation}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.role}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h5" gutterBottom className={styles.sectionTitle}>
            Liaison Officers
          </Typography>
          <TableContainer
            component={Paper}
            className={styles.table}
            sx={{ mb: 4 }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.tableHead}>S.No.</TableCell>
                  <TableCell className={styles.tableHead}>Name</TableCell>
                  <TableCell className={styles.tableHead}>
                    Designation
                  </TableCell>
                  <TableCell className={styles.tableHead}>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {grievanceRedressalList.liaison.map((member, idx) => (
                  <TableRow key={idx} className={styles.tableRow}>
                    <TableCell className={styles.tableCell}>
                      {idx + 1}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.name}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.designation}
                    </TableCell>
                    <TableCell className={styles.tableCell}>
                      {member.role}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
