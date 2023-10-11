import React, { useEffect, useState } from "react";
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
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  themeText: {
    color: "#2e8b57",
  },
  link: {
    display: "inline-block",
    paddingTop: "1rem",
    fontWeight: "500",
    width: "auto",
    "&:hover": {
      textDecoration: "underline",
      color: "blueviolet",
    },
  },
  download: {
    position: "relative",
    top: "3px",
    marginRight: "5px",
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "rgba(0,0,0,0.10)",
    },
  },
  tableHead: {
    fontWeight: "900",
    backgroundColor: "#2e8b57",
    color: "white",
  },
  tableCell: {
    fontSize: "1.2rem",
  },
  table: {
    marginBottom: "1.5rem",
  },
  title: {
    fontSize: "1.5rem",
  },
  meetingTitle: {
    fontSize: "1.3rem",
  },
});

export default function Senate() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Senate";
  }, []);

  useEffect(
    () => () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    },
    [],
  );
  const [senate, setSenate] = useState(undefined);
  const [senateMeeting, setSenateMeeting] = useState(undefined);
  useEffect(() => {
    import("../../json/senate.json").then((data) => {
      setSenate(data.data);
    });
    import("../../json/senateMeeting.json").then((data) =>
      setSenateMeeting(data.data),
    );
  }, []);

  const classes = createStyles();
  let ctr = 0;
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
              Senate
            </Box>
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            <Box component="h3" gutterBottom className={classes.themeText}>
              Members of Senate
            </Box>
          </Typography>
          {senate && (
            <TableContainer
              component={Paper}
              className={classes.table}
              gutterBottom
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      S. No.
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      Designation
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      Senate
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {senate.map((gov) => {
                    ctr++;
                    return (
                      <TableRow className={classes.tableRow}>
                        <TableCell className={classes.tableCell}>
                          {ctr}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {gov.name}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {gov.designation}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {gov.senate}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <Typography className={classes.themeText}>
            <Box
              component="h3"
              fontWeight="fontWeightBold"
              className={classes.title}
            >
              Senate Minutes
            </Box>
          </Typography>
          {senateMeeting &&
            senateMeeting.map((meet) => (
              <section>
                <a
                  href={require(`../../docs/${meet.path}`)}
                  download={meet.title}
                  className={classes.link}
                >
                  <Typography
                    className={`${classes.link} ${classes.themeText}`}
                    gutterBottom
                  >
                    <img
                      src={require("../../images/news-icon.svg")}
                      className={classes.download}
                    />
                    <Box component="span" className={classes.meetingTitle}>
                      {meet.title}
                    </Box>
                  </Typography>
                </a>
                <Typography gutterBottom>{meet.description}</Typography>
              </section>
            ))}
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
