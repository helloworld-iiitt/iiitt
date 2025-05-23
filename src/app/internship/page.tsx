"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Grid from "@mui/material/Grid2"

interface InternshipData {
  title: string;
  sections: Section[];
}

interface Section {
  heading: string;
  cards?: CardData[];
  list?: string[];
  guidelines?: Guideline[];
  table?: TableRowData[];
  documents?: DocumentData[];
}

interface CardData {
  header: string;
  text: string;
}

interface Guideline {
  title: string;
  desc: string;
}

interface TableRowData {
  date: string;
  event: string;
}

interface DocumentData {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  headerColor: string;
  textColor: string;
}

export default function Internship() {
  const [data, setData] = useState<InternshipData | null>(null);
  useEffect(() => {
    document.title = " Internship Cell | IIIT Tiruchirappalli ";
    fetch("/json/students/internship.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 2 }}>
      <Typography variant="h3" fontWeight="bold" textAlign="center" mb={4}>
        {data.title}
      </Typography>

      {data.sections.map((section, i) => (
        <Box key={i} mb={5}>
          <Typography variant="h4" textAlign="center" mb={3}>
            {section.heading}
          </Typography>

          {/* Cards */}
          {section.cards && (
            <Grid container spacing={3} justifyContent="center">
              {section.cards.map((card, idx) => (
                <Grid size={4} key={idx}>
                  <Card sx={{ border: "2px solid #00796b" }}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ backgroundColor: "#4CAF50", color: "white", p: 1, mb: 2 }}
                      >
                        {card.header}
                      </Typography>
                      <Typography>{card.text}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* List */}
          {section.list && (
            <Box sx={{ backgroundColor: "#f1f1f1", p: 3, borderRadius: 2 }}>
              <ul>
                {section.list.map((item, idx) => (
                  <li key={idx} style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                    {item}
                  </li>
                ))}
              </ul>
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
                    <Typography>{guideline.desc}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}

          {/* Table */}
          {section.table && (
            <Table sx={{ backgroundColor: "#4CAF50", color: "white" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Date</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Event</TableCell>
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
                <Grid size={4} key={idx}>
                  <Card sx={{ border: "2px solid #00796b" }}>
                    <CardContent>
                      <Typography
                        variant="h6"

                      >
                        {doc.title}
                      </Typography>
                      <Typography>{doc.description}</Typography>
                      <Button
                        variant="outlined"
                        href={doc.link}
                        target="_blank"
                        sx={{ mt: 2 }}
                      >
                        {doc.buttonText}
                      </Button>
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
