import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Grid,
  Box,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  themeText: {
    color: "#2e8b57",
  },
  link: {
    display: "inline-block",
    paddingTop: "1rem",
    fontWeight: "500",
    width: "auto",
    "&:hover": {
      textDecoration: "underline",
      color: "blueviolet",
    },
  },
  media: {
    height: "15rem",
    width: "13rem",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid #2e8b57",
    borderRadius: "4px",
  },
  card: {
    padding: "1.5rem",
  },
  info: {
    margin: "0 auto",
    textAlign: "center",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
});

export default function Director() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Administration";
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
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Grid item xs={12} sm={4} className={classes.info}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={require("../../images/director.jpg")}
                title="Director"
              />
              <CardContent>
                <Typography variant="body" gutterBottom>
                  <Box component="span" fontSize="1.5rem" gutterBottom>
                    DR. NARASIMHA SARMA N V S
                  </Box>
                  <br />
                  <Box fontSize="1.2rem">Director, IIIT Tiruchirappalli</Box>
                  <br />
                  <a href="mailto:director@iiitt.ac.in">director@iiitt.ac.in</a>
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Typography className={classes.text} gutterBottom>
            Dr Sarma obtained his Masters and Doctoral degrees from Indian
            Institute of Technology, Kharagpur in the years 1985 and 1992
            respectively after his Bachelor’s degree in Engineering with
            specialization Electronics and Communications Engineering from JNTU
            College of Engineering, Kakinada, Andhra Pradesh in 1984.
            <br />
            <br />
            He worked at Tata Institute of Fundamental Research, Mumbai for a
            brief period from Feb 1986 to July 1987.
            <br />
            <br />
            He has been with the Department of Electronics and Communications
            Engineering at Regional Engineering College/National Institute of
            Technology, Warangal, India at various positions since 1990. He was
            Head of the department during Sept 2006 to Feb 2009 and again from
            Feb 2013 to Feb 2015. He was the Dean (Academic Affairs) of the
            institute during 2016 and 2017.
            <br />
            <br />
            His areas of interest include sensor networks, numerical
            electromagnetics and antenna arrays.
            <br />
            <br />
            He has been the recipient of Best Researcher Award of NIT Warangal
            for the year 2016. Six students were awarded with Doctorate degrees
            under his guidance. About 90 papers are at his credit in
            International and National journals and conferences. He visited USA,
            UK, Malaysia and Mauritius to present his papers and on some
            assignments. He delivered lectures at international universities and
            chaired sessions at international conferences.
            <br />
            <br />
            He was associated with many prestigious missile projects. He was
            also part of many training programs for working professionals in
            ECIL and DRDO. In addition, he coordinated one GIAN program. Under
            community service, he conducted several IT training programs for
            police personnel, surveying staff, and rural girls with TEQIP funds.
            Further, he was a reviewer for several reputed international
            journals and conferences.
            <br />
            <br />
            He initiated the annual technical event at NIT Warangal named
            TECHNOZION in 2005. He was prof-in-charge for halls of residence at
            their initial stage. He was prof-in-charge for the institute guest
            house. As Head of the department, he presented the programmes of the
            department before NBA teams in both of his terms. He has been the
            prime mover in accelerating research activity in the department. As
            Dean (Academic Affairs), he reformulated the rule books for all the
            UG, PG and Doctoral programs of the institute.
            <br />
            <br />
            His favorite courses for teaching are Electromagnetic Fields &
            Waves, Antennas & Propagation, Microwave Engineering, Radar
            Engineering, Optical Communication, Optical Networks, Wireless
            Sensor Networks, Satellite Communication, Quality and Reliability in
            Electronic Systems, Networks & Transmission Lines, Signals &
            Systems, Probability Theory & Stochastic Processes, Software Defined
            Radio, Wireless Sensor Networks, Secured Communications, RF
            Engineering.
            <br />
            <br />
            He has memberships in several professional bodies such as Life
            Member of Society of EMC Engineers, Member IEEE, Fellow of
            Institution of Engineers ( India).
            <br />
            <br />
            He is Chief Investigator for the E & ICT Academy set up at NIT,
            Warangal by Ministry of Electronics & Information Technology, Govt.
            of India, New Delhi for the improvement of employability of
            engineering graduates through faculty training. The academy
            successfully conducted more than 250 FDPs and trained about 12000
            faculty members in a short span of 3 ½ years from July 2015.
            <br />
            <br />
            He is a member of academic councils of NIT-Andhra Pradesh and
            several private universities. He is member of BOS of many autonomous
            colleges and universities. He is also a member of selection of
            committees of defense scientists. Presently, Dr. Sarma has been
            appointed as Founder Director of IIIT Tiruchirappalli.
          </Typography>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
