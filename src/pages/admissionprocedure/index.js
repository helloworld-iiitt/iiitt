import React, { useEffect } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { Typography, Grid, Box, Table, TableBody, TableCell, TableHead, TableContainer, TableRow, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  themeText: {
    color: "#2e8b57",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    paddingTop: "1rem",
    fontWeight: "500",
    width: "auto",
    "&:hover": {
      textDecoration: "underline",
      color: "blueviolet",
    },
  },
  sectionText: {
    paddingTop: "0",
  },
  sectionPadding: {
    padding: "1rem 0",
  },
  tableHead: {
    background: "#2e8b57",
  },
  th: {
    color: "white",
    fontSize: "1.5rem",
  },
  td: {
    fontSize: "1.3rem",
  },
});

export default function AdmissionProcedure() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Admission Procedure";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const classes = createStyles();
  const rank = "OpeningandClosingRank2020-21.pdf";
  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={classes.themeText}
          >
            <Box component="span" fontWeight={380}>
              Admission
            </Box>
          </Typography>
          <Box component="span" fontSize="1.3em">
            Admission to Undergraduate Programs for the candidates from India at
            IIIT Tiruchirappalli is based on the ranks in the Joint Entrance
            Examination, JEE (Main). Admission to IIIT Trichy for JEE Main
            qualified candidates is made through a single platform through
            online by the Joint Seat Allocation Authority (JoSAA).
          </Box>
          <br />
          <br />
          <section className={classes.sectionPadding}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                JEE Main 2020
              </Box>
            </Typography>
            <Box fontSize="1.1rem" className={classes.sectionText}>
              <Typography>
                <Box component="span" fontSize="1.2em">
                  The Ministry of Human Resource Development, Government of
                  India has notified following two changes in the JEE pattern
                  for 2020:
                </Box>
              </Typography>
              <ol style={{ lineHeight: "1.5", paddingTop: "0.7rem" }}>
                <li style={{ marginLeft: "1.3rem" }}>
                  The Ministry of Education [erstwhile Ministry of Human
                  Resources Development (MHRD)], Government of India (GOI) has
                  established National Testing Agency (NTA) as an independent
                  autonomous and self-sustained premier testing organization
                  under Society Registration Act 1860 for conducting efficient,
                  transparent and international standards tests in order to
                  assess the competency of candidates for admissions to premier
                  higher education institutions.
                </li>
                <li style={{ marginLeft: "1.3rem" }}>
                  The Department of Higher Education, Ministry of Human Resource
                  Development, Government of India has entrusted the
                  responsibility of conducting Joint Entrance Examination JEE
                  (Main) to the NTA from 2019 onwards.
                </li>
                <li style={{ marginLeft: "1.3rem" }}>
                  Admission criteria to Undergraduate Engineering Programs at
                  NITs, IIITs, other Centrally Funded Technical Institutions
                  (CFTI), Institutions funded by participating State
                  Governments, and other Institutions shall include the
                  performance in the class 12/equivalent qualifying Examination
                  and in the Joint Entrance Examination, JEE (Main). The (B. E.
                  /B. Tech.) of JEE (Main) will also be an eligibility test for
                  the JEE (Advanced), which the candidate has to take if he/she
                  is aspiring for admission to the undergraduate programs
                  offered by the Indian Institute of Technology (IITs).
                </li>
              </ol>
              <center>
                <a
                  href="https://jeemain.nic.in"
                  className={`${classes.themeText} ${classes.link}`}
                  target="_blank"
                >
                  Visit website of JEE Main
                </a>
              </center>
            </Box>
          </section>
          <section className={classes.sectionPadding}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                JoSAA 2020
              </Box>
            </Typography>
            <Box fontSize="1.1rem" className={classes.sectionText}>
              <Typography>
                <Box component="span" fontSize="1.2em">
                  The Joint Seat Allocation Authority (JoSAA) 2020 has been set
                  up by the Ministry of Education [erstwhile Ministry of Human
                  Resources Development (MHRD)] to manage and regulate the joint
                  seat allocation for admissions to 110 institutes for the
                  academic year 2020-21. This includes 23 IITs, 31 NITs, IIEST
                  Shibpur, 26 IIITs and 29 Other-Government Funded Technical
                  Institutes (Other-GFTIs). Admission to all the academic
                  programs offered by these Institutes will be made through a
                  single platform.
                </Box>
              </Typography>

              <TableContainer component={Paper}>
                <Table>
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell className={classes.th} align="center">
                        Qualifying Examination
                      </TableCell>
                      <TableCell className={classes.th} align="center">
                        Admitting Institutes
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className={classes.td} align="center">
                        JEE (Advanced) 2020
                      </TableCell>
                      <TableCell className={classes.td} align="center">
                        IITs
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.td} align="center">
                        JEE (Main) 2020 B.E./B.Tech.
                      </TableCell>
                      <TableCell
                        rowSpan="3"
                        className={classes.td}
                        align="center"
                      >
                        NITs, IIEST, IIITs (Triple-I-Ts) and Other-GFTIs
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.td} align="center">
                        JEE (Main) 2020 B.Arch.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.td} align="center">
                        JEE (Main) 2020 B.Planning
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <center>
                <a
                  href="https://josaa.nic.in"
                  className={`${classes.themeText} ${classes.link}`}
                  target="_blank"
                >
                  Visit website of JoSAA
                </a>
              </center>
              <center>
                <a
                  href="https://josaa.nic.in/SeatInfo/root/InstProfile.aspx?instcd=314"
                  className={`${classes.themeText} ${classes.link}`}
                  target="_blank"
                >
                  View IIIT Trichy on JoSAA
                </a>
              </center>
            </Box>
          </section>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <section className={classes.sectionPadding}>
                <Typography variant="h5" className={classes.themeText}>
                  <Box component="span" fontWeight="fontWeightBold">
                    List of Undergraduate Programs 2020
                  </Box>
                </Typography>
                <Box fontSize="1.1rem" className={classes.sectionText}>
                  <Typography>
                    <Box component="span" fontSize="1.2em">
                      IIIT Trichy offers the following two Undergraduate
                      Programs:
                    </Box>
                  </Typography>
                  <ul style={{ lineHeight: "1.5", paddingTop: "0.7rem" }}>
                    <li style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                      Computer Science and Engineering (4 years, Bachelor of
                      Technology)
                    </li>
                    <li style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                      Electronics and Communication Engineering (4 years,
                      Bachelor of Technology)
                    </li>
                  </ul>
                </Box>
              </section>
            </Grid>
            <Grid item xs={12} sm={6}>
              <section className={classes.sectionPadding}>
                <Typography variant="h5" className={classes.themeText}>
                  <Box component="span" fontWeight="fontWeightBold">
                    Opening and Closing Rank
                  </Box>
                </Typography>
                <ul className="doclist">
                  <li>
                    <a
                      href={require(`../../docs/${rank}`)}
                      className={`${classes.themeText} ${classes.link}`}
                      download={`${rank}`}
                    >
                      Opening/Closing Rank of IIIT Tiruchirappalli, JoSAA 2019
                    </a>
                  </li>
                </ul>
              </section>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
