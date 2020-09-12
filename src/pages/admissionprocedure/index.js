import React, { useEffect } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { Typography, Grid, Box } from "@material-ui/core";
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
  const rank = "OpeningandClosingRank.pdf";
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
            IIIT Trichy is based on the ranks in the Joint Entrance Examination,
            JEE (Main). Admission to IIIT Trichy for JEE Main qualified
            candidates is made through a single platform through online by the
            Joint Seat Allocation Authority (JoSAA).
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
                  for 2019:
                </Box>
              </Typography>
              <ol style={{ lineHeight: "1.5", paddingTop: "0.7rem" }}>
                <li style={{ marginLeft: "1.3rem" }}>
                  There shall be no weightage for the 12th class marks in
                  calculating the ranks in the JEE (Main) examination,
                </li>
                <li style={{ marginLeft: "1.3rem" }}>
                  For the candidates to qualify for the admission in the
                  IITs/NITs/IIITs and such other CFTIs whose admissions are
                  based on the JEE (Advanced)/JEE(Main) ranks, they should have
                  secured at least 75% marks in the 12th class examination, or
                  be in the top 20 percentile in the 12th class examination
                  conducted by the respective Boards. For SC/ST students the
                  qualifying marks would be 65% in the 12th class examination.
                </li>
              </ol>
              <center>
                <a
                  href="https://jeemain.nic.in"
                  className={`${classes.themeText} ${classes.link}`}
                >
                  Visit website of JEE Main
                </a>
              </center>
            </Box>
          </section>
          <section className={classes.sectionPadding}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                JoSAA 2019
              </Box>
            </Typography>
            <Box fontSize="1.1rem" className={classes.sectionText}>
              <Typography>
                <Box component="span" fontSize="1.2em">
                  The Joint Seat Allocation Authority (JoSAA) 2019 has been set
                  up by the Ministry of Human Resources Development (MHRD) to
                  manage and regulate the joint seat allocation for admissions
                  to 97 institutes for the academic year 2019-20. This includes
                  23 IITs, 31 NITs, 23 IIITs and 20 Other-Government Funded
                  Technical Institutes (Other-GFTIs). Admission to all the
                  academic programs offered by these Institutes will be made
                  through a single platform.
                </Box>
              </Typography>
              <center>
                <a
                  href="https://josaa.nic.in"
                  className={`${classes.themeText} ${classes.link}`}
                >
                  Visit website of JoSAA
                </a>
              </center>
              <center>
                <a
                  href="https://josaa.nic.in"
                  className={`${classes.themeText} ${classes.link}`}
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
                    List of Undergraduate Programs 2019
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
                    <li style={{ marginLeft: "1rem" }}>
                      Computer Science and Engineering (4 years, Bachelor of
                      Technology)
                    </li>
                    <li style={{ marginLeft: "1rem" }}>
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
                    Opening and Closing Rank of IIIT Trichy, JoSAA 2018
                  </Box>
                </Typography>
                <ul className="doclist">
                  <li>
                    <a
                      href={require(`../../docs/${rank}`)}
                      className={`${classes.themeText} ${classes.link}`}
                      download={`${rank}`}
                    >
                      {rank}
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
