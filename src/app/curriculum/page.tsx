"use client";
import React, { useEffect, useState } from "react";
import { Typography, Box, Table, TableRow, TableCell, TableBody, TableHead } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./curriculum.module.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import nextConfig from "../../../next.config";

interface CurriculumData {
  curriculum: {
    [department: string]: {
      [program: string]: {
        [year: string]: string;
      };
    };
  };
}

const Curriculum: React.FC = () => {
  const [curriculumData, setCurriculumData] = useState<CurriculumData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = "Curriculum";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    fetch("/json/general/curriculum.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch curriculum data");
        }
        return response.json();
      })
      .then((data) => {
        setCurriculumData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching curriculum data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container">
      <Grid container className={styles.container}>
        <Grid size={1} />
        <Grid size={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            align="center"
            color="#2e8b57"
            sx={{ fontWeight: 300 }}
          >
            Curriculum
          </Typography>
          <section className={styles.sectionPadding}>
            <Typography variant="h5" gutterBottom>
              The&nbsp;
              <Box component="span" fontWeight="fontWeightBold">
                Undergraduate Program Curriculum
              </Box>
              &nbsp;has the following components:
            </Typography>
            <ul className={styles.list}>
              <li>Program Core Courses</li>
              <li>Programming Elective Courses</li>
              <li>Open Elective Courses</li>
              <li>Self Study/Online Courses</li>
              <li>Minor Courses</li>
              <li>Honours Courses</li>
              <li>Internship</li>
              <li>Project Work</li>
            </ul>
            <Typography className={styles.sectionPadding}>
              <Box component="span" fontSize="1.2em">
                Relative grading is used to assess the performance of the
                students.
                <Box component="span" fontWeight="fontWeightBold">
                  The Undergraduate Program Curriculum and Syllabus is similar
                  to NIT Trichy.
                </Box>
              </Box>
            </Typography>
            <Typography className={styles.sectionPadding}>
              <Box component="span" fontSize="1.2em">
                The curriculum for all the programs have been framed after
                extensive deliberations and discussions with IITs, NITs, IIITs,
                and Anna University and other reputed Institute faculty members
                and Industry stake holders.
              </Box>
            </Typography>
            <Typography className={styles.sectionPadding}>
              <Box component="span" fontSize="1.2em">
                The students may undergo internship from research labs CSIO -
                CSIR, CECRI – CSIR, IGCAR, and industries such as Navitas (TAKE
                Solutions), Compegence, Sanspareil, Infomak, Zod, etc.
                <br />
                The students and faculty are encouraged to publish research
                papers in International Journals, International Conferences, and
                National Conferences.
                <br />
                In IIIT Trichy, all the core theory courses are supplemented
                with laboratory exercises / mini projects / case studies. The
                curriculum is manipulated to make the students industry-ready,
                and is customized to suit the conditions prevailing in the
                industry by providing internal or external industry
                participation.
              </Box>
            </Typography>
            <Typography className={styles.sectionPadding}>
              <Box component="span" fontSize="1.2em">
                With the kind of support IIITT has with reputed industry
                partners and other software industries, this unique course
                should be able to meet the requirements of ‘industrial ready’
                students coming out of IIITs as envisaged in our objective.
              </Box>
            </Typography>
          </section>
          <section className={styles.sectionPadding}>
            <Typography variant="h5" className={styles.themeText} gutterBottom>
              <Box component="span" fontWeight="fontWeightBold">
                Syllabus
              </Box>
            </Typography>
          </section>
          {loading ? (
            <Typography>Loading curriculum data...</Typography>
          ) : !curriculumData ? (
            <Typography color="error">Failed to load curriculum data. Please try again later.</Typography>
          ) : (
            Object.entries(curriculumData.curriculum).map(([department, programs]) => (
              <section key={department} className={styles.sectionPadding}>
                <Typography variant="h5" className={styles.themeText} gutterBottom>
                  <Box fontWeight="fontWeightBold">{department}</Box>
                </Typography>

                {Object.entries(programs).map(([program, syllabus]) => (
                  <div key={program} style={{ overflowX: "auto", marginBottom: "20px" }}>
                    <Typography variant="h6" className={styles.subHeading} gutterBottom>
                      {program}
                    </Typography>
                    <Table className={styles.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Year</TableCell>
                          <TableCell>Syllabus</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.entries(syllabus).map(([year, filePath]) => (
                          <TableRow key={year} className={styles.tableRow}>
                            <TableCell>{year}</TableCell>
                            <TableCell>
                              <a href={`${nextConfig.env?.DOCUMENT}/${filePath}`} download className={styles.link}>
                                <CloudDownloadIcon className={styles.download} style={{ marginRight: "5px", verticalAlign: "middle" }} />
                                Download
                              </a>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
              </section>
            ))
          )}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default Curriculum;
