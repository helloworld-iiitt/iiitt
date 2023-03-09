import React, { useEffect } from "react";
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
  link: {
    textDecoration: "none",
    display: "block",
    paddingTop: "1rem",
    fontWeight: "500",
    width: "auto",
    "&:hover": {
      textDecoration: "underline",
      color: "blueviolet",
    },
  },
  download: {
    marginRight: "0.3rem",
    position: "relative",
    top: "0.3rem",
  },
});

export default function Holidays() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Academic Holidays";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const file = "List_of_holidays_and_RH-2020.pdf";
  const file1 = "List_of_holidays_and_RH-2021.pdf";
  const file2 = "List_of_holidays_and_RH-2022.pdf";
  const file3="List_of_holidays_and_RH-2023.pdf"

  const classes = createStyles();

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
              Academic Holidays
            </Box>
          </Typography>
          <a
            href={require(`../../docs/${file3}`)}
            download={`${file3}`}
            className={classes.link}
          >
            <img
              src={require("../../images/news-icon.svg")}
              className={classes.download}
            />
            {file3.slice(0, file3.length - 4)}
          </a>
          <a
            href={require(`../../docs/${file2}`)}
            download={`${file2}`}
            className={classes.link}
          >
            <img
              src={require("../../images/news-icon.svg")}
              className={classes.download}
            />
            {file2.slice(0, file2.length - 4)}
          </a>
          <a
            href={require(`../../docs/${file1}`)}
            download={`${file1}`}
            className={classes.link}
          >
            <img
              src={require("../../images/news-icon.svg")}
              className={classes.download}
            />
            {file1.slice(0, file1.length - 4)}
          </a>
          <a
            href={require(`../../docs/${file}`)}
            download={`${file}`}
            className={classes.link}
          >
            <img
              src={require("../../images/news-icon.svg")}
              className={classes.download}
            />
            {file.slice(0, file.length - 4)}
          </a>
          
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
