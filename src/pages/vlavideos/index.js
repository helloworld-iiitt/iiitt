import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { useLocation, Redirect } from "react-router-dom";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const createStyles = makeStyles({
  themeText: {
    color: "#3f51b5",
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

const Video = (props) => {
  const classes = createStyles();
  const { vid, vidId, day, dayId, session } = props;
  const id = `#day${dayId + 1}${session}vid${vidId + 1}`;
  return (
    <section className="videoSection" id={id}>
      <h4>
        Day {dayId + 1}: {day.date} {session == "fn" ? "Morning" : "Afternoon"}{" "}
        session - Video {vidId + 1}: {vid.title}
      </h4>
      <center>
        <Iframe src={vid.src} width="640" height="480" frameBorder="0" />
        <a href={vid.src} target="_blank" className={classes.link}>
          Click here to open in a new tab in case the video player doesn't work
        </a>
      </center>
    </section>
  );
};

export default function VlaVideos(props) {
  const location = useLocation().pathname;
  const path = location.slice(1, location.length);
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "VLA | Videos";
  }, []);
  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const [videos, setVideos] = useState(undefined);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    import(`../../json/${path}.json`)
      .then((data) => setVideos(data.data))
      .catch(() => {
        console.clear();
        console.log("HELLO");
        setRedirect(true);
      });
  }, []);

  const classes = createStyles();
  return (
    <div className="page-container">
      <Navbar src="vla_navbar.json" homeRoute="/vla" />
      <Grid container className="container">
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          {redirect ? (
            <Redirect to="/404" />
          ) : (
            <>
              {videos ? (
                <>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.themeText}
                  >
                    <Box component="span" fontWeight={450}>
                      List of Videos
                    </Box>
                  </Typography>
                  <section className="list">
                    {videos.map((day, dayId) => {
                      return (
                        <div className="day">
                          <strong>
                            Day {dayId + 1}: {day.date}
                          </strong>
                          <div className="daySession">
                            <strong>Morning session:</strong>
                            <ul className="videoList">
                              {day.fn.map((vid, vidId) => {
                                const id = `#day${dayId + 1}fnvid${vidId + 1}`;
                                return (
                                  <li key={id}>
                                    <a href={id} className={classes.link}>
                                      Video {vidId + 1}: {vid.title}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="daySession">
                            <strong>Afternoon session:</strong>
                            <ul className="videoList">
                              {day.an.map((vid, vidId) => {
                                var id = `#day${dayId + 1}anvid${vidId + 1}`;
                                return (
                                  <li key={id}>
                                    <a href={id} className={classes.link}>
                                      Video {vidId + 1}: {vid.title}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </section>
                  <section className="videos">
                    {videos.map((day, dayId) => {
                      return (
                        <>
                          {day.fn.map((vid, vidId) => {
                            return (
                              <Video
                                vid={vid}
                                vidId={vidId}
                                day={day}
                                dayId={dayId}
                                session="fn"
                              />
                            );
                          })}

                          {day.an.map((vid, vidId) => {
                            return (
                              <Video
                                vid={vid}
                                vidId={vidId}
                                day={day}
                                dayId={dayId}
                                session="an"
                              />
                            );
                          })}
                        </>
                      );
                    })}
                  </section>
                </>
              ) : (
                <h2>Loading...</h2>
              )}
            </>
          )}
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
