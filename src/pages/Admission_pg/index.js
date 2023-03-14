import React from "react";
import '../Admission_ug/index.css';
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer";
import {
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Admission_pg = () => {
  const createStyles = makeStyles({
    themeText: {
      color: "#2e8b57",
      fontSize: 40,
      fontWeight: "500",
    },
    container: {
      padding: "1rem 1rem",
    },
    link: {
      textDecoration: "none",
      display: "block",
      paddingTop: "1rem",
      fontWeight: "500",
      width: "auto",
      color: "#2e8b57",
      "&:hover": {
        textDecoration: "underline",
        color: "blueviolet",
      },
    },
  });
  const classes = createStyles();

  return (
    <div>
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            className={classes.themeText}
          >
            <Box component="span">M.Tech Admission</Box>
          </Typography>

          <h2 className="utility_margin-h4">CCMT 2021</h2>
          <a
            className={`${classes.link}`}
            href="http://www.iiitt.ac.in/downloads/admission/MTech_online_reporting_details_2022.pdf"
            target="_blank"
          >
            MTech Online reporting details
          </a>

          <a
            className={`${classes.link}`}
            href="https://ccmt.admissions.nic.in/"
            target="_blank"
          >
           Link for NIC portal for CCMT

          </a>

          <a
            className={`${classes.link}`}
            href="https://ccmt.admissions.nic.in/registration-and-choice-filling-will-start-from-23-may-2022-onwards/"
            target="_blank"
          >
           Online Registration, Fee Payment and Choice Filling started from 23 May, 2022 onwards
          </a>

          <a
            className={`${classes.link}`}
            href="https://ccmt.admissions.nic.in/schedule/"
            target="_blank"
          >
            CCMT 2022 Schedule
          </a>

          <a
            className={`${classes.link}`}
            href="https://ccmt.admissions.nic.in/information-brochure-4/"
            target="_blank"
          >
            CCMT 2022 Information Brochure
          </a>

          <hr className="utility-hr utility-hr-2"/>
          <a className={`${classes.link}`} href="curriculum" target="_blank">
            <h3>Curriculum and Syllabus</h3>{" "}
          </a>
          <hr className="utility-hr utility-hr-2"/>
          <h2>Fee Structure</h2>
          <ul className="utility-bullet">
            <li>
              <a
                className={`${classes.link}`}
                href="http://www.iiitt.ac.in/downloads/admission/MTechFeeStructure2022.pdf"
                target="_blank"
              >
                Fee Structure 2022{" "}
              </a>
            </li>
            <li>
              <a
                className={`${classes.link}`}
                href="http://www.iiitt.ac.in/downloads/admission/MTechFeeRefundStructure2022.pdf"
                target="_blank"
              >
                Fee Refund Structure 2022{" "}
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
};

export default Admission_pg;
