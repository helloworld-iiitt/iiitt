"use client";
import { numberToWords } from "@/types/numbertoWords";
import { validURL } from "@/types/validator";
import {
  Box,
  List, ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import styles from "./ug.module.css";
const AdmissionUG: React.FC = () => {
  const [admissionData, setAdmissionData] = useState<any>(null);

  useEffect(() => {
    fetch('/json/admission/ug.json')
      .then((response) => response.json())
      .then((data) => setAdmissionData(data))
      .catch((error) => console.error("Error loading admission data:", error));
  }, []);

  if (!admissionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.container} content`}>
      <Box mb={2} display="flex" justifyContent="center">
        <Typography
          variant="h3"
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}
          className={styles.themeText}
        >
          <strong>B.Tech Admission 2025</strong>
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography
          variant="h4"
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}
          className={styles.themeText}
        >
          <strong>List of Undergraduate Programs</strong>
        </Typography>
      </Box>

      <Box my={2} mt={6} sx={{ pl: { xs: 2, sm: 6 } }}>
        <Typography variant="body1">
          IIIT Tiruchirappalli offers the following {numberToWords(admissionData.programs.length)}&nbsp;
          <strong>Undergraduate Programs</strong>:
        </Typography>

      </Box>
      <Box my={2} sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}>
        <List sx={{ listStyleType: 'disc', pl: 2 }}>
          {admissionData.programs.map((program: string, index: number) => (
            <ListItem
              key={index}
              sx={{ display: 'list-item', listStyleType: 'disc', pl: 2 }}
              disableGutters
            >
              <ListItemText primary={program} />
            </ListItem>
          ))}
        </List>
      </Box>

      <hr className={styles.hr} />

      <Box mb={2}>
        <Typography
          variant="h4"
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }} // Padding for the title
          className={styles.themeText}
          gutterBottom
        >
          <strong>Fee Structure</strong>
        </Typography>
      </Box>
      <Box>
        <Box my={2} sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}>
          <List sx={{ listStyleType: 'disc', pl: 2 }}>
            {admissionData.feeStructures.map((feeStructure: { name: string; path: string }, index: number) => (
              <ListItem
                key={index}
                sx={{ display: 'list-item', py: 0 }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={validURL(feeStructure.path) ? feeStructure.path : `${nextConfig?.env?.DOCUMENT}${feeStructure.path}`}
                  className={styles.link}
                >
                  {feeStructure.name}
                </a>
              </ListItem>
            ))}
          </List>
        </Box>

      </Box>
      <hr className={styles.hr} />

      <Box mb={2}>
        <a
          className={styles.link} href="/curriculum">
          <Typography
            variant="h4"
            sx={{
              color: "#2e8b57",
              pl: { xs: 2, sm: 6 },
              pr: { xs: 2, sm: 6 },
            }}
            className={styles.themeText}
            gutterBottom
          >
            <strong>Curriculum & Syllabus</strong>
          </Typography>
        </a>
      </Box>
      <hr className={styles.hr} />

      <Box mb={2}>
        <Typography
          variant="h4"
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }} // Padding for the title
          className={styles.themeText}
          gutterBottom
        >
          <strong>Forms</strong>
        </Typography>
      </Box>

      <Box>

        <Box my={2} sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}>
          <List sx={{ listStyleType: 'disc', pl: 2 }}>
            {admissionData.forms.map((forms: { name: string; path: string }, index: number) => (
              <ListItem
                key={index}
                sx={{ display: 'list-item', py: 0 }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={validURL(forms.path) ? forms.path : `${nextConfig?.env?.DOCUMENT}${forms.path}`}
                  className={styles.link}
                >
                  {forms.name}
                </a>
              </ListItem>
            ))}
          </List>
        </Box>


        <br />
      </Box>
      <hr className={styles.hr} />


      <Box mb={2}>
        <Typography
          variant="h4"
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }} // Padding for the title
          className={styles.themeText}
          gutterBottom
        >
          <strong>Opening and Closing Rank</strong>
        </Typography>
      </Box>


      <Box my={2} sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}>
        <List sx={{ listStyleType: 'disc', pl: 2 }}>
          {admissionData.openingRanks.map((rank: { year: string; path: string }, index: number) => (
            <ListItem
              key={index}
              sx={{ display: 'list-item', py: 0 }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={validURL(rank.path) ? rank.path : `${nextConfig?.env?.DOCUMENT}${rank.path}`}
                className={styles.link}
              >
                {`Opening & Closing Rank ${rank.year}`}
              </a>
            </ListItem>
          ))}
        </List>
      </Box>


      <hr className={styles.hr} />

      {/* Additional Sections */}
      <Box mb={2}>
        <Typography
          variant="h4"
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }} // Padding for the title
          className={styles.themeText}
          gutterBottom
        >
          <strong>JEE Main</strong>
        </Typography>
      </Box>

      <Box my={2} component="span" sx={{ pl: { xs: 2, sm: 6 } }}>
        <Typography
          variant="body1"
          sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}
        >
          The Ministry of Education [erstwhile Ministry of Human Resources
          Development (MHRD)], Government of India (GOI) has established
          National Testing Agency (NTA) as an independent autonomous and
          self-sustained premier testing organization under Society Registration
          Act 1860 for conducting efficient, transparent and international
          standards tests in order to assess the competency of candidates for
          admissions to premier higher education institutions.
        </Typography>
        <Typography
          variant="body1"
          sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}
        >
          <a
            className={styles.link} target="_blank" href="http://jeemain.nta.nic.in">
            Visit website of JEE Main.
          </a>
        </Typography>
      </Box>
      <hr className={styles.hr} />

      <Box mb={2}>
        <Typography
          variant="h4"
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}
          className={styles.themeText}
          gutterBottom
        >
          <strong>JoSAA</strong>
        </Typography>
      </Box>

      <Box my={2} component="span" sx={{ pl: { xs: 2, sm: 6 } }}>
        <Typography
          variant="body1"
          sx={{ pl: { xs: 2, sm: 6 } }}
        >
          The Joint Seat Allocation Authority (JoSAA) 2022 has been set up by
          the Ministry of Education [erstwhile Ministry of Human Resources
          Development (MHRD)] to manage and regulate the joint seat allocation
          for admissions to 114 institutes for the academic year 2022-23. This
          includes 23 IITs, 31 NITs, IIEST Shibpur, 26 IIITs, and 33
          Other-Government Funded Technical Institutes (Other-GFTIs). Admission
          to all the academic programs offered by these Institutes will be made
          through a single platform.
        </Typography>
        <Box my={2} component="span">
          <TableContainer className={styles.tableContainer}>
            <Table className={styles.table}>
              <TableHead>
                <TableRow className={styles.tableHeadRow}>
                <TableCell className={`${styles.tableHeadCell} ${styles.firstColumn}`}>
                    Qualifying Examination
                  </TableCell>
                  <TableCell className={styles.tableHeadCell}>
                    Admitting Institutes
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={styles.tableBodyRow}>
                <TableCell className={`${styles.tableHeadCell} ${styles.firstColumn}`}>
                    JEE (Advanced) 2024
                  </TableCell>
                  <TableCell className={styles.tableBodyCell}>
                    IITs
                  </TableCell>
                </TableRow>
                <TableRow className={styles.tableBodyRow}>
                <TableCell className={`${styles.tableHeadCell} ${styles.firstColumn}`}>
                    JEE (Main) 2024 B.E./B.Tech.
                  </TableCell>
                  <TableCell
                    className={styles.tableBodyCell}
                    rowSpan={3}
                    style={{ verticalAlign: 'middle' }}
                  >
                    NITs, IIEST, IIITs, Other-GFTIs
                  </TableCell>
                </TableRow>
                <TableRow className={styles.tableBodyRow}>
                <TableCell className={`${styles.tableBodyCell} ${styles.firstColumn}`}>
                    JEE (Main) 2024 B.Arch.
                  </TableCell>
                </TableRow>
                <TableRow className={styles.tableBodyRow}>
                <TableCell className={`${styles.tableBodyCell} ${styles.firstColumn}`}>
                    JEE (Main) 2024 B.Planning
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Typography
          variant="body1"
          sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 }, mt: { xs: 6 } }}
        >
          <a
            className={styles.link} target="_blank" href="http://josaa.nic.in/">
            Visit website of JoSAA.
          </a>
        </Typography>
        <Typography
          variant="body1"
          sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}
        >
          <a
            className={styles.link}
            target="_blank"
            href="http://josaa.nic.in/SeatInfo/root/InstProfile.aspx?instcd=314"
          >
            View IIIT Tiruchirappalli on JoSAA.
          </a>
        </Typography>
      </Box>
      <hr className={styles.hr} />

      <Box mb={2} sx={{ pl: { xs: 2, sm: 6 } }}>
        <Typography
          variant="h4"
          sx={{ color: "#2e8b57" }}
          className={styles.themeText}
          gutterBottom
        >
          <strong>Central Seat Allocation Board (CSAB)</strong>
        </Typography>
      </Box>

      <Box my={2} component="span">
        <Typography
          variant="body1"
          sx={{ pl: { xs: 2, sm: 6 } }}
        >
          The Ministry of Human Resource Development, Government of India took a
          policy decision in 2002 to conduct an All India Engineering Entrance
          Examination (AIEEE) annually, doing away with many of the large number
          of entrance examinations that were being conducted till then by
          various institutes in the country for admission to undergraduate
          degree programmes in the disciplines of Engineering/Technology and
          Architecture/Planning. This initiative has been widely accepted and
          appreciated.
        </Typography>
        <Typography
          variant="body1"
          sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}
        >
          A Central Counselling Board (CCB) constituted by the Govt. of India
          coordinated admissions to UG degree programmes in Engineering,
          Technology, and Architecture in respect of selected institutes till
          2012. From 2013 onwards, CCB and AIEEE have been renamed as Central
          Seat Allocation Board (CSAB) and JEE (Main) respectively.
        </Typography>
        <Typography
          variant="body1"
          sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 }, mb: { xs: 4, sm: 6 } }}
        >
          For Further Details, Please visit:{" "}
          <a
            className={styles.link} target="_blank" href="https://csab.nic.in/">
            https://csab.nic.in/
          </a>
        </Typography>
      </Box>
    </div>
  );
};

export default AdmissionUG;



