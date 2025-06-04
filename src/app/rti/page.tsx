"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./rti.module.css";
import nextConfig from "../../../next.config";
import {
  Card,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Skeleton,
  Box,
  Typography,
} from "@mui/material";

interface RTI {
  head: string;
  name: string;
  designation: string;
  emailID: string;
  phone?: string;
  fax?: string;
  src: string;
}

export default function RTI() {
  const [rtiList, setRtiList] = useState<RTI[]>([]);

  useEffect(() => {
    document.title = "RTI | IIIT Tiruchirappalli ";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    const fetchRTIData = async () => {
      try {
        const response = await fetch("/json/committee/members/rti.json");
        const data = await response.json();
        setRtiList(data.data);
      } catch (error) {
        console.error("Error fetching RTI data:", error);
      }
    };

    fetchRTIData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Typography variant="h2" component="h2" gutterBottom className={styles.heading}>
        <Box component="span" fontWeight={380}>
          RTI
        </Box>
      </Typography>

      <div className={styles.cardsContainer}>
        {rtiList.map((rti, index) => (
          <Card key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.imageWrapper}>
                <Image
                  src={`${nextConfig.env?.IMAGE}/${rti.src}`}
                  alt={rti.name}
                  width={200}
                  height={300}
                  className={styles.media}
                />
              </div>

              <div className={styles.textContent}>
                <Typography variant="h5" className={styles.themeText}>
                  {rti.head}
                </Typography>

                <Typography variant="h6" className={styles.name}>
                  {rti.name}
                </Typography>

                <Typography className={styles.designation}>
                  {rti.designation}
                </Typography>

                <div className={styles.contactInfo}>
                  <a href={`mailto:${rti.emailID}`} className={styles.emailLink}>
                    {rti.emailID}
                  </a>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Typography variant="body1" sx={{ mb: 4, mt:4 }}>
      This Area of Indian Institute of Information Technology, Tiruchirappalli website is for dissiminating information under the Right to Information Act 2005.
      The information given here is in respect of the IIITT, Tiruchirappalli.
      The BOG has appointed the following Public Information Officers to assist in discharging the duties under this Act.
      </Typography>
      <TableContainer component={Paper} className={styles.table} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHead}>SI. No.</TableCell>
              <TableCell className={styles.tableHead}>Name &amp; Designation</TableCell>
              <TableCell className={styles.tableHead}>Phone No. &amp; Email</TableCell>
              <TableCell className={styles.tableHead}>Designated Position</TableCell>
              <TableCell className={styles.tableHead}>Subject Matter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rtiList.slice(1).map((officer,idx) => (
              <TableRow key={idx} className={styles.tableRow}>
                <TableCell className={styles.tableCell}>{idx+1}</TableCell>
                <TableCell className={styles.tableCell}>{officer.name}</TableCell>
                <TableCell className={styles.tableCell} >{officer.emailID}</TableCell>
                <TableCell className={styles.tableCell}>{officer.head}</TableCell>
                <TableCell className={styles.tableCell}>All applications received under RTI act</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}