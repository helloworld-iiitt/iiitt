import React, { useEffect, useState } from "react";
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { validURL } from '../../common/utils'
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
  const [oldNotices, setOldNotices] = useState([]);
  const [newNotices, setNewNotices] = useState([]);
  useEffect(() => {
    import("../../json/notices.json").then((data) => {
      let d = data.data
      let latest = d.filter(x => x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
      setNewNotices(latest)
      let old = d.filter(x => !x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
      setOldNotices(old)
    });
  }, []);

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
          <section className={classes.item_section}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                New notices
              </Box>
            </Typography>
            <ul className="doclist">
              {newNotices &&
                newNotices.map(item => {
                  return (
                    <li key={item.name}>
                      <a
                        href={validURL(item.link) ? item.link : `${process.env.REACT_APP_STATIC_BASE_URL}/${item.link}`}
                        download={`${item.url}`}
                        className={classes.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={classes.item}>
                          <Typography>
                            {
                              item.date &&
                              <Typography
                                variant="caption"
                                color="textSecondary"
                                gutterBottom
                              >
                                Posted on:{item.date}
                              </Typography>
                            }
                            <br />
                            <Box
                              className={classes.themeText}
                              component="span"
                            >
                              {item.title}
                            </Box>
                            <br />
                            <Box component="span">{item.text}</Box>
                          </Typography>
                        </div>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </section>
          <section className={classes.item_section}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                Old notices
              </Box>
            </Typography>
            <ul className="doclist">
              {oldNotices &&
                oldNotices.map(item => {
                  return (
                    <li key={item.name}>
                      <a
                        href={validURL(item.link) ? item.link : `${process.env.REACT_APP_STATIC_BASE_URL}/${item.link}`}
                        download={`${item.url}`}
                        className={classes.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={classes.item}>
                          <Typography>
                            {
                              item.date &&
                              <Typography
                                variant="caption"
                                color="textSecondary"
                                gutterBottom
                              >
                                Posted on:{item.date}
                              </Typography>
                            }
                            <br />
                            <Box
                              className={classes.themeText}
                              component="span"
                            >
                              {item.title}
                            </Box>
                            <br />
                            <Box component="span">{item.text}</Box>
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
