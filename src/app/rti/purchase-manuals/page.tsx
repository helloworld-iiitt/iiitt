"use client";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Link,
} from "@mui/material";
import nextConfig from "../../../../next.config";
import styles from "../rti.module.css";
import { useEffect, useState } from "react";
import { RTIResponse } from "@/types/common.types";

export default function PurchaseManualsPage() {
  const [pdfs, setPdfs] = useState<{ name: string; path: string }[]>([]);

  useEffect(() => {
    const fetchPurchaseManuals = async () => {
      try {
        const response = await fetch("/json/committee/members/rti.json");
        const data: RTIResponse = await response.json();
        console.log(data)
        setPdfs(data.purchaseManuals);
      } catch (error) {
        console.error("Error fetching RTI data:", error);
      }
    };

    fetchPurchaseManuals();
  }, []);

  return (
    <Box sx={{ mt: 4, mb: 4, display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "55%" }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          className={styles.heading}
        >
          <Box component="span" fontWeight={250}>
            Purchase Manuals
          </Box>
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {pdfs.map((doc, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: "5%" }}>{index + 1}.</TableCell>
                  <TableCell>
                    <Link
                      href={`${nextConfig.env?.DOCUMENT}/RTI_2026/RTI/${doc.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.name}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
