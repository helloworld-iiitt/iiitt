import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { useLocation, Redirect } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Card,
  Typography,
  Grid,
  Box,
  CardMedia,
  CardContent,
  Paper,
} from "@material-ui/core";
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

export default function VlaWorkshops() {
  const src = useLocation().pathname;
  const path = src.slice(1, src.length);

  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "VLA | Summary";
  }, []);
  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const [summary, setSummary] = useState(undefined);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    import(`../../json/${path}.json`)
      .then((data) => setSummary(data.data))
      .catch(() => setRedirect(true));
  }, []);
  const classes = createStyles();
  var ctr = 0;
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
              {summary ? (
                <>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.themeText}
                  >
                    <Box component="span" fontWeight={450}>
                      {summary.title}
                      <br />
                      {summary.date}
                    </Box>
                  </Typography>
                  <div className="participantInfo">
                    <Typography
                      variant="h6"
                      gutterBottom
                      className={classes.themeText}
                    >
                      <Box component="span" fontWeight={450}>
                        Participant Information
                      </Box>
                    </Typography>
                    <table>
                      <tr>
                        <td>Participants</td>
                        <td>{summary.participants.count}</td>
                      </tr>
                      <tr>
                        <td>Speakers</td>
                        <td>{summary.participants.speakerCount}</td>
                      </tr>
                      <tr>
                        <td>Male Participants</td>
                        <td>{summary.participants.maleCount}</td>
                      </tr>
                      <tr>
                        <td>Female Participants</td>
                        <td>{summary.participants.femaleCount}</td>
                      </tr>
                      <tr>
                        <td>Participants from SC/ST</td>
                        <td>{summary.participants.scstCount}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Hands on sessions</strong>
                        </td>
                        <td>{summary.handsOnSessions}</td>
                      </tr>
                    </table>
                  </div>

                  <section>
                    <Typography
                      variant="h6"
                      gutterBottom
                      className={classes.themeText}
                    >
                      <Box component="span" fontWeight={450}>
                        List of speakers
                      </Box>
                    </Typography>

                    {summary.speakers.map((speaker) => {
                      return <div>{speaker}</div>;
                    })}
                  </section>

                  <section>
                    <Typography
                      variant="h6"
                      gutterBottom
                      className={classes.themeText}
                    >
                      <Box component="span" fontWeight={450}>
                        Topics Covered
                      </Box>
                    </Typography>
                    <ol className="vlaList">
                      {summary.topics.map((topic) => {
                        return <li>{topic}</li>;
                      })}
                    </ol>
                  </section>

                  <section>
                    <Typography
                      variant="h6"
                      gutterBottom
                      className={classes.themeText}
                    >
                      <Box component="span" fontWeight={450}>
                        Feedback summary
                      </Box>
                    </Typography>
                    <ol className="vlaList">
                      {summary.feedbacks.map((feedback) => {
                        return <li>{feedback}</li>;
                      })}
                    </ol>
                  </section>

                  <section>
                    <Typography
                      variant="h6"
                      gutterBottom
                      className={classes.themeText}
                    >
                      <Box component="span" fontWeight={450}>
                        Suggestion from participants
                      </Box>
                    </Typography>
                    <ol className="vlaList">
                      {summary.suggestions.map((suggestion) => {
                        return <li>{suggestion}</li>;
                      })}
                    </ol>
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
