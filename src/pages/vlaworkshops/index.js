import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { Link } from "react-router-dom";
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
});

export default function VlaWorkshops() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "VLA | Workshops";
  }, []);
  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const [workshops, setWorkshops] = useState(undefined);
  useEffect(() => {
    import("../../json/vlaworkshops.json").then((data) =>
      setWorkshops(data.data)
    );
  }, []);

  const classes = createStyles();
  var ctr = 0;
  return (
    <div className="page-container">
      <Navbar src="vla_navbar.json" homeRoute="/vla" />
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
              Workshops Planned and Completed
            </Box>
          </Typography>
          {workshops && (
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
                      Name of the Programme
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      Co-ordinator(s) Name
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      Start Date
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      End Date
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      No. Of Participants
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      Videos
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      Brochure
                    </TableCell>
                    <TableCell
                      className={`${classes.tableHead} ${classes.tableCell}`}
                    >
                      Summary & Feedback
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {workshops.map((workshop) => {
                    ctr++;
                    return (
                      <TableRow className={classes.tableRow}>
                        <TableCell className={classes.tableCell}>
                          {ctr}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {workshop.programmeName}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {workshop.name}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {workshop.startDate}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {workshop.endDate}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {workshop.participantsLink.trim() && (
                            <Link
                              to={{
                                pathname: workshop.participantsLink.trim(),
                              }}
                              className={classes.link}
                            >
                              {workshop.participants}
                            </Link>
                          )}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {workshop.videos.trim() && (
                            <Link
                              to={{ pathname: workshop.videos }}
                              className={classes.link}
                            >
                              Videos
                            </Link>
                          )}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {workshop.brochure.trim() && (
                            <a
                              href={`../../docs/vla/${workshop.brochure}`}
                              className={classes.link}
                              download={workshop.brochure}
                            >
                              Brochure
                            </a>
                          )}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {workshop.summary.trim() && (
                            <Link
                              to={{ pathname: workshop.summary }}
                              className={classes.link}
                            >
                              Summary & Feedback
                            </Link>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
