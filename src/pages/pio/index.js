import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
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
});

export default function PIO() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "PIO";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const [PIO, setPIO] = useState(undefined);
  useEffect(() => {
    import("../../json/pio.json").then((data) => {
      setPIO(data.data);
    });
  }, []);

  const classes = createStyles();
  var ctr = 0;
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
              PIO
            </Box>
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            <Box component="h3" gutterBottom className={classes.themeText}>
              Public Information Officers
            </Box>
          </Typography>
          {PIO && (
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
                      Role
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {PIO.map((pio) => {
                    ctr++;
                    return (
                      <TableRow className={classes.tableRow}>
                        <TableCell className={classes.tableCell}>
                          {ctr}
                        </TableCell>
                        <TableCell className={classes.tableCell}>
                          {pio.name}
                        </TableCell>

                        <TableCell className={classes.tableCell}>
                          {pio.role}
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
