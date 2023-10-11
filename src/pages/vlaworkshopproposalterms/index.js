import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Divider,
  Grid,
  Box,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import "./styles.css";

const createStyles = makeStyles({
  themeText: {
    color: "#2e8b57",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "500",
    width: "auto",
    "&:hover": {
      textDecoration: "underline",
      color: "blueviolet",
    },
  },
  infocard: {
    margin: "1rem 0",
    padding: "0 1rem 1rem 1rem",
  },
});

export default function VlaResources() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "VLA | Workshop";
  }, []);

  useEffect(
    () => () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    },
    [],
  );
  const classes = createStyles();
  return (
    <div className="page-container">
      <Navbar src="vla_navbar.json" homeRoute="/vla" />
      <Grid container className="container">
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography variant="h5" gutterBottom className={classes.themeText}>
            <Box component="span" fontWeight={500}>
              Guidelines to host joint online workshop with your Institution.
            </Box>
          </Typography>
          <div className="steps">
            Virtual Learning Academy is inviting applications from faculty to
            jointly organize online workshops on topics related to Moodle
            Learning Management System. Interested faculty who are meeting the
            following terms and conditions can submit the application form
            through online by attaching the necessary documents.
            <ol className="stepsList">
              <li>
                Minimum 50 (fifty) number of attendees must be registered for
                the workshop.
              </li>
              <li>
                Duration of workshop is for two days with each day consists of
                four sessions. Each session is of 90 minutes of lecture with 30
                minutes hands-on work.
              </li>
              <li>
                Identification of speakers and lecture schedule will be jointly
                decided by you along with the coordinator identified from VLA
              </li>
              <li>
                Academy will meet and transfer the honorarium for resource
                persons after successful completion of the workshop.
              </li>
              <li>
                After successful completion of workshop and submission of
                assignments, the certificates will be issued by VLA to all the
                participants and appreciation certificate to coordinators.
              </li>
              <li>
                There will be nominal registration fee of Rs 500/- (rupees Five
                hundred only) for each participant and 50% registration fee
                waiver for candidates from SC/ST categories. This registration
                fee can be transferred either individually by each participant
                or host institute can transfer with one transaction for the
                entire workshop.
              </li>
              <li>
                The topic of the workshop either can be basic, advanced or
                Administrative features of Moodle LMS
              </li>
            </ol>
          </div>
          <a href="/vla_workshop_proposal" className={classes.link}>
            Click here to continue to proposal submission form if you agree to
            the guidelines
          </a>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
