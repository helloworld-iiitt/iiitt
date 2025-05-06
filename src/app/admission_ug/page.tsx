"use client";

import React from "react";
import styles from "./ug.module.css";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import nextConfig from "../../../next.config";
const AdmissionUG = () => {
  return (
    <div className={`${styles.container} content`}>
      {/* Centered First Title */}
      <Box mb={2} display="flex" justifyContent="center">
        <Typography
          variant="h4"
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }}
          className={styles.themeText}
        >
          <strong>List of Undergraduate Programs</strong>
        </Typography>
      </Box>

      {/* Text with Bullet List */}
      <Box my={2} mt={6} sx={{pl:{xs:2,sm:6}}}>
        <Typography variant="body1">
          IIIT Tiruchirappalli offers the following two{" "}
          <strong>Undergraduate Programs</strong>:
        </Typography>
        <ul className={styles.bulletList}>
          <li>
            <strong>
              Computer Science and Engineering (4 years, Bachelor of Technology)
            </strong>
          </li>
          <li>
            <strong>
              Electronics and Communication Engineering (4 years, Bachelor of
              Technology)
            </strong>
          </li>
        </ul>
      </Box>
      <hr className={styles.hr} />

      {/* Other Titles - Centered Titles */}
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

      <Box my={2} sx={{pl:{xs:2,sm:6}}}>
        <ul>
          <li>
            <a
            className={styles.link}
              target="_blank"
              href={`${nextConfig?.env?.DOCUMENT}/admission/BTech_Fee_structure_2024.pdf`}
            >
              Fee Structure 2024
            </a>
          </li>
          <li>
            <a
            className={styles.link}
              target="_blank"
              href={`${nextConfig?.env?.DOCUMENT}/admission/BTech_RefundFee_structure_2024.pdf`}
            >
              Refund Fee Structure 2024
            </a>
          </li>
        </ul>
      </Box>
      <hr className={styles.hr} />

      {/* Additional Titles */}
      <Box mb={2}>
        <a
        className={styles.link} href="/curriculum">
          <Typography
            variant="h4"
            sx={{
              color: "#2e8b57",
              pl: { xs: 2, sm: 6 },
              pr: { xs: 2, sm: 6 },
            }} // Adjusting padding for the title
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

      <Box my={2} sx={{pl:{xs:2,sm:6}}}>
        <ul>
          <li>
            <a
            className={styles.link}
              target="_blank"
              href={`${nextConfig?.env?.DOCUMENT}/admission/undertaking_2021-22.pdf`}
            >
              Undertaking form
            </a>
          </li>
          <li>
            <a
            className={styles.link}
              target="_blank"
              href={`${nextConfig?.env?.DOCUMENT}/admission/Admission_cancellation_form2021-22.pdf`}
            >
              Admission Cancellation Form
            </a>
          </li>
        </ul>
      </Box>
      <hr className={styles.hr} />

      {/* More Sections */}
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

      <Box my={2} sx={{pl:{xs:2,sm:6}}}>
        <ul>
          <li>
            <a
            className={styles.link}
              target="_blank"
              href={`${nextConfig?.env?.DOCUMENT}/admission/Opening_and_Closing_Rank2023.pdf`}
            >
              Opening/Closing Rank of IIIT Tiruchirappalli, JoSAA 2023
            </a>
          </li>
          <li>
            <a
            className={styles.link}
              target="_blank"
              href={`${nextConfig?.env?.DOCUMENT}/admission/Opening_and_Closing_Rank2022.pdf`}
            >
              Opening/Closing Rank of IIIT Tiruchirappalli, JoSAA 2022
            </a>
          </li>
          <li>
            <a
            className={styles.link}
              target="_blank"
              href={`${nextConfig?.env?.DOCUMENT}/admission/Opening_and_Closing_Rank2021.pdf`}
            >
              Opening/Closing Rank of IIIT Tiruchirappalli, JoSAA 2021
            </a>
          </li>
          <li>
            <a
            className={styles.link}
              target="_blank"
              href={`${nextConfig?.env?.DOCUMENT}/admission/Opening_and_Closing_Rank2020.pdf`}
            >
              Opening/Closing Rank of IIIT Tiruchirappalli, JoSAA 2020
            </a>
          </li>
          <li>
            <a
            className={styles.link}
              target="_blank"
              href={`${nextConfig?.env?.DOCUMENT}/admission/OpeningandClosingRank2020-21.pdf`}
            >
              Opening/Closing Rank of IIIT Tiruchirappalli, JoSAA 2019
            </a>
          </li>
        </ul>
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

      <Box my={2} component="span" sx={{pl:{xs:2,sm:6}}}>
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
          sx={{ color: "#2e8b57", pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 } }} // Padding for the title
          className={styles.themeText}
          gutterBottom
        >
          <strong>JoSAA</strong>
        </Typography>
      </Box>

      <Box my={2} component="span" sx={{pl:{xs:2,sm:6}}}>
        <Typography
          variant="body1"
          sx={{pl:{xs:2,sm:6}}}
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
          <TableContainer sx={{ width: "90%", margin: "auto", mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Qualifying Examination</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Admitting Institutes</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>JEE (Advanced) 2024</TableCell>
                  <TableCell>IITs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>JEE (Main) 2024 B.E./B.Tech.</TableCell>
                  <TableCell rowSpan={3}>
                    NITs, IIEST, IIITs (Triple-I-Ts) and Other-GFTIs
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>JEE (Main) 2024 B.Arch.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>JEE (Main) 2024 B.Planning</TableCell>
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

      <Box mb={2} sx={{pl:{xs:2,sm:6}}}>
        <Typography
          variant="h4"
          sx={{ color: "#2e8b57"}} // Padding for the title
          className={styles.themeText}
          gutterBottom
        >
          <strong>Central Seat Allocation Board (CSAB)</strong>
        </Typography>
      </Box>

      <Box my={2} component="span">
        <Typography
          variant="body1"
          sx={{pl:{xs:2,sm:6}}}
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
          sx={{ pl: { xs: 2, sm: 6 }, pr: { xs: 2, sm: 6 },mb:{xs:4 ,sm:6} }}
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
