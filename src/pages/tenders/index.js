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
  notice_section: {
    padding: "0.5rem 0 2rem 0",
  },
  notice: {
    padding: "1rem 0",
    transition: "transform .2s",
    "&:hover": {
      background: "rgba(0,0,0,0.15)",
    },
  },
});

export default function Notices() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Tenders";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    import("../../json/tenders.json").then((data) => {
      setNotices(data.data);
    });
  }, []);

  const classes = createStyles();

  const date = new Date();

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
              Tenders
            </Box>
          </Typography>
          <section className={classes.notice_section}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                Open Tender Notices
              </Box>
            </Typography>
            <ul className="doclist">
              {notices &&
                notices
                  .filter((ntc) => ntc.open)
                  .sort(
                    (a, b) =>
                      new Date(b.date.split("/").reverse().join("/")) -
                      new Date(a.date.split("/").reverse().join("/"))
                  )
                  .map((notice) => {
                    return (
                      <li key={notice.name}>
                        
                     
                        <a
                          href={notice.url!=="" && require(`../../docs/tenders/${notice.url}`)}
                          download={`${notice.url}`}
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
                              <Box
                                className={classes.themeText}
                                component="span"
                              >
                                {notice.name}
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
          </section>
          <section className={classes.notice_section}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                Closed Tender Notices
              </Box>
            </Typography>
            <ul className="doclist">
              {notices &&
                notices
                  .filter((ntc) => !ntc.open)
                  .sort(
                    (a, b) =>
                      new Date(b.date.split("/").reverse().join("/")) -
                      new Date(a.date.split("/").reverse().join("/"))
                  )
                  .map((notice) => {
                    return (
                      <li key={notice.name}>
                        <a
                          href={notice.url!=="" && require(`../../docs/tenders/${notice.url}`)}
                          download={`${notice.url}`}
                          className={classes.link}
                        >
                          <div className={classes.notice}>
                            <Typography>
                              <Typography
                                variant="caption"
                                color="textSecondary"
                                gutterBottom
                              >
                                {notice.date!==""?
                                "Posted on: "+notice.date:""}
                              </Typography>
                              <br />
                              <Box
                                className={classes.themeText}
                                component="span"
                              >
                                {notice.name}
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
          </section>
        </Grid>
        <Grid xs={false} sm={1} item />
      </Grid>
      <Footer />
    </div>
  );
}
