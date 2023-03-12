import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  themeText: {
    color: "#2e8b57",
  },
  text: {
    fontSize: "1.3rem",
  },
  subText: {
    fontSize: "1.2rem",
  },
  list: {
    listStylePosition: "inside",
    marginBottom: "1rem",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "500",
    width: "auto",
    "&:hover": {
      textTecoration: "underline",
      color: "blueviolet",
    },
  },
  download: {
    marginRight: "0.3rem",
    position: "relative",
    top: "0.3rem",
  },
});

export default function Undergraduate() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Undergraduate";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const classes = createStyles();
  const file = "A3.UGRegulations.pdf";
  const file1 = "Btech_regulations_2021.pdf";
  const bonafied = "Bonafide_Certificate_Format_2022.docx";

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
              Undergraduate (B. Tech.)
            </Box>
          </Typography>

          <Typography variant="h5" className={classes.themeText} gutterBottom>
            <Box component="span" fontWeight="fontWeightBold">
              Rules and Regulations for B.Tech.(CSE/ECE)
            </Box>
          </Typography>
          <Typography>
            <a
              href={require(`../../docs/${file1}`)}
              download={`${file1}`}
              className={`${classes.link} ${classes.subText}`}
            >
              <img
                src={require("../../images/news-icon.svg")}
                className={classes.download}
              />
              Rules and Regulations 2020-21 onwards
            </a>
          </Typography>
          <Typography>
            <a
              href={require(`../../docs/${file}`)}
              download={`${file}`}
              className={`${classes.link} ${classes.subText}`}
            >
              <img
                src={require("../../images/news-icon.svg")}
                className={classes.download}
              />
              Rules and Regulations
            </a>
          </Typography>

          <Typography variant="h5" className={classes.themeText} gutterBottom>
            <Box component="span" fontWeight="fontWeightBold">
              Forms/formats
            </Box>
          </Typography>
        
          <Typography>
            <a
              href={require(`../../docs/${bonafied}`)}
              download={`${bonafied}`}
              className={`${classes.link} ${classes.subText}`}
            >
              <img
                src={require("../../images/news-icon.svg")}
                className={classes.download}
              />
              Bonafide certificate format
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
