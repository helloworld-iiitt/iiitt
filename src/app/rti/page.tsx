/**
 *
 * Right To Information Page
 *
 * fetches data from /json/committee/members/rti.json
 * additionally bottomLinks available in json
 *
 */
"use client";

import { RTIData } from '@/types/common.types';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  Box,
  Card,
  List, ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import styles from "./rti.module.css";


const bottomLinks = [
  { label: "BOG members and minutes", href: "/bog" },
  { label: "Chairperson", href: "" },
  { label: "Director", href: "/director" },
  { label: "Registrar", href: "/registrar" },
  { label: "Senate members and minutes", href: "/senate" },
  { label: "Finance Committee members and minutes", href: "/fc" },
  { label: "Building Works Committee", href: "/bwc" },
  { label: "Head of the Department", href: "/departments" },
  { label: "List of faculty members", href: "/faculty" },
  { label: "List of Non-teaching staffs", href: "/staff" },
  { label: "Students Financial Support", href: "/scholarship" },
  { label: "Festivals", href: "/festivals" },
  { label: "Clubs", href: "/clubs" },
  { label: "Software and Hardware Laboratories", href: "/facilities" },
  { label: "C2S Project Laboratory", href: "/c2sproject" },
  { label: "Hostel and Mess", href: "/hostel" },
  { label: "Sports", href: "" },
  { label: "Library", href: "/facilities" },
  { label: "Canteen", href: "/facilities" },
  { label: "Medical room", href: "/facilities" },
  { label: "Security", href: "" },
  { label: "Communication Services", href: "" },
  { label: "Conference hall and seminar halls", href: "" },
  { label: "Training and Placement Cell", href: "http://placement.iiitt.ac.in/" },
];

export default function RTI() {
  const [rtiList, setRtiList] = useState<RTIData[]>([]);

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

      <Box sx={{ mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Important Links
      </Typography>

      <List dense>
        {bottomLinks.map((item, idx) => (
          <ListItem key={idx} disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <OpenInNewIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link href={item.href || "#"} target="_blank" rel="noopener noreferrer">
                {item.label}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
    </div>
  );
}