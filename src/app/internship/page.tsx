/**
 *
 * Internship Page
 *
 * fetches data from /json/students/internship
 *
 */

"use client";

import { InternshipData } from "@/types/internships.types";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Card,
  CardContent,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
export default function Internship() {
  const [data, setData] = useState<InternshipData | null>(null);

  useEffect(() => {
    document.title = "Internship Cell | IIIT Tiruchirappalli";
    fetch("/json/students/internship.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 2 }}>
      <Typography variant="h3" fontWeight="bold" textAlign="center" mb={4}>
        {data.title}
      </Typography>

      {data.sections.map((section, i) => (
        <Box key={i} mb={5}>
          {section.heading && (
            <Typography variant="h4" textAlign="center" mb={3}>
              {section.heading}
            </Typography>
          )}

          {/* Cards */}
          {section.cards && (
            <Grid container spacing={3} justifyContent="center">
              {section.cards.map((card, idx) => (
                <Grid key={idx} size={10}>
                  <Card sx={{ border: "2px solid #00796b", height: "100%" }}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          p: 1,
                          mb: 2,
                        }}
                      >
                        {card.header}
                      </Typography>
                      {card.list && (
                        <Box sx={{ backgroundColor: "#f1f1f1", p: 2, borderRadius: 2 }}>
                          <ul>
                            {card.list.map((item, idx) => (
                              <li key={idx} style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
          {section.announcements && (
            <Box sx={{ backgroundColor: "#f1f1f1", p: 2, borderRadius: 2, border: "2px solid #00796b" }}>
              <Typography variant="h6" mb={2} sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                p: 1
              }}>
                Announcements
              </Typography>
              <Box>
                {section.announcements.map((item, idx) => (
                  <Box key={idx} style={{ marginBottom: "0.75rem" }}>

                    {item.link ? (
                      <Link href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <LaunchIcon sx={{ fontSize: 18, color: "primary.main" }} />
                        <Box display="inline-flex" alignItems="center" gap={0.5}>
                          <Typography variant="body1" component="span" color="primary" fontWeight="medium">
                            {item.message}
                          </Typography>

                        </Box>
                      </Link>

                    ) : (
                      <Typography variant="body1" component="span">
                        {item.message}
                      </Typography>
                    )}
                    {item.date && (
                      <Typography variant="caption" component="div" color="text.secondary">
                        {item.date}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* Guidelines */}
          {section.guidelines && (
            <Box>
              {section.guidelines.map((guideline, idx) => (
                <Card key={idx} sx={{ border: "2px solid #00796b", mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary">
                      {guideline.title}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}

          {/* Table */}
          {section.table && (
            <Table sx={{ backgroundColor: "#4CAF50", color: "white", mt: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
                  >
                    Event
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {section.table.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.event}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {/* Documents */}
          {section.documents && (
            <Grid container spacing={3} justifyContent="center" mt={3}>
              {section.documents.map((doc, idx) => (
                <Grid size={6} key={idx}>
                  <Card sx={{ border: "2px solid #00796b", height: "100%" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Typography variant="subtitle1" textAlign="center" gutterBottom fontWeight="bold">
                        {doc.title}
                      </Typography>
                      <MuiLink
                        href={`${nextConfig?.env?.DOCUMENT}${doc.link}`}
                        target="_blank"
                        underline="hover"
                        sx={{
                          mt: 2,
                          display: "flex",
                          alignItems: "center",
                          color: "primary.main",
                          fontWeight: "medium",
                          cursor: "pointer",
                        }}
                      >
                        View Document <LaunchIcon sx={{ fontSize: 18, ml: 0.5 }} />
                      </MuiLink>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      ))}
    </Box>
  );
}
