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
            href="http://www.iiitt.ac.in/downloads/admission/BTechReporting_details_2021-22-updated71221.pdf"
            target="_blank"
          >
            Online PI Reporting for M.Tech. provisional admission through
            CCMT-2021
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
                href="http://www.iiitt.ac.in/downloads/admission/MTechFeeRefundStructure2021.pdf"
                target="_blank"
              >
                Fee Refund Structure 2021{" "}
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
