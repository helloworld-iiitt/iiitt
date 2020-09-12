import React, { useEffect, useState } from "react";
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const createStyles = makeStyles({
  container: {
    padding: "1.5rem 1rem",
  },
  themeText: {
    color: "#2e8b57",
  },
  link: {
    display: "inline-block",
    textDecoration: "none",
    color: "black",
  },
  notice: {
    padding: "1rem 0rem 1rem 0.3rem",
    transition: "transform .2s",
    "&:hover": {
      background: "rgba(0,0,0, 0.15)",
    },
  },
});

export default function Notices() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Notices";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    import("../../json/notices.json").then((data) => {
      setNotices(data.data);
    });
  }, []);

  if (notices) {
    notices.sort(
      (a, b) =>
        new Date(b.date.split("/").reverse().join("/")) -
        new Date(a.date.split("/").reverse().join("/"))
    );
  }
  const classes = createStyles();

  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
        <Grid xs={false} sm={1} item />
        <Grid xs={12} sm={10} item>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={classes.themeText}
          >
            <Box component="span" fontWeight={380}>
              Notices
            </Box>
          </Typography>
          <ul className="doclist">
            {notices &&
              notices.map((notice) => {
                return (
                  <li key={notice.title}>
                    <a
                      href={require(`../../docs/notices/${notice.link}`)}
                      download={`${notice.link}`}
                      className={classes.link}
                    >
                      <div className={classes.notice}>
                        <Typography>
                          <Typography
                            variant="caption"
                            color="textSecondary"
                            gutterBottom
                          >
                            Posted on:{notice.date}
                          </Typography>
                          <br />
                          <Box className={classes.themeText} component="span">
                            {notice.title}
                          </Box>
                          <br />
                          <Box component="span">{notice.description}</Box>
                        </Typography>
                      </div>
                    </a>
                  </li>
                );
              })}
          </ul>
        </Grid>
        <Grid xs={false} sm={1} item />
      </Grid>
      <Footer />
    </div>
  );
}
