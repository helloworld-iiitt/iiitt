import React, { useEffect } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
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
});

export default function AdmissionForms() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Admission Forms";
  }, []);

  useEffect(
    () => () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    },
    [],
  );
  const classes = createStyles();
  const reportingDetails = "Reportingdetails2020-21-recent.pdf";
  const admissionCancellation = "Admission_cancellation_form2020-21.pdf";
  const undertaking = "undertaking_2020-21.pdf";
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
              Admission Forms
            </Box>
          </Typography>

          <ul className="doclist">
            <li>
              <a
                href={require(`../../docs/${reportingDetails}`)}
                download={`${reportingDetails}`}
                className={classes.link}
              >
                [Updated] Reporting Details
              </a>
            </li>
            <li>
              <a
                href={require(`../../docs/${undertaking}`)}
                download={`${reportingDetails}`}
                className={classes.link}
              >
                Undertaking form
              </a>
            </li>
            <li>
              <a
                href={require(`../../docs/${admissionCancellation}`)}
                download={`${admissionCancellation}`}
                className={classes.link}
              >
                Admission Cancellation Form
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
