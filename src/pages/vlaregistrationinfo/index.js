import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
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
    document.getElementsByTagName("title")[0].innerHTML = "VLA | Registration";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const classes = createStyles();
  return (
    <div className="page-container">
      <Navbar src="vla_navbar.json" homeRoute="/vla" />
      <Grid container className="container">
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography variant="h5" gutterBottom className={classes.themeText}>
            <Box component="span" fontWeight={500}>
              Payment of Registration Fee
            </Box>
          </Typography>
          <Typography>
            Participants should pay the registration amount through online money
            transfer to the institute account. General/OBC participants should
            pay 500 INR and SC \ ST participants 250 INR. Participants availing
            SC \ ST concession are liable to provide scanned proof along with
            the online application. Account details are as follows.
          </Typography>

          <div className="steps">
            <strong>Steps to pay the VLA workshop registration fee:</strong>
            <ol className="stepsList">
              <li>
                Use the following link to open SB collect
                <br />
                <a
                  href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=927770"
                  className={classes.link}
                >
                  https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=927770
                </a>
              </li>
              <li>
                Read and click on the checkbox to agree on the terms and
                conditions and click proceed
              </li>
              <li>
                From the payment selection category, select VLA Workshop Fee
              </li>
              <li>Fill the credentials and pay the fee.</li>
            </ol>
          </div>
          <a href="/vla_attend" className={classes.link}>
            Click here to continue to registration for workshop
          </a>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
