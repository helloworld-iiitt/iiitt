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
    paddingTop: "1rem",
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
    document.getElementsByTagName("title")[0].innerHTML = "VLA | Resources";
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
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={classes.themeText}
          >
            <Box component="span" fontWeight={380}>
              Resources
            </Box>
          </Typography>
          <Card className={classes.infocard}>
            <a href="http://profksrinivas.in" className={classes.link}>
              <Typography component="h2" gutterBottom>
                Two day virtual workshop on Moodle LMS
              </Typography>
            </a>
            <Typography className="description">
              A Two day Virtual Workshop on Develop, Deliver and Assess Online
              Courses with MOODLE Learning Management System
              <br />
              The workshop material is available at: http://profksrinivas.in
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
