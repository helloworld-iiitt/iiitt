import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import {
  Card,
  Typography,
  Grid,
  Box,
  CardMedia,
  CardContent,
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
  media: {
    height: "15rem",
    width: "13rem",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid #2e8b57",
    borderRadius: "4px",
  },
  card: {
    padding: "1.5rem",
  },
  info: {
    margin: "0 auto",
    textAlign: "center",
  },
  text: {
    fontSize: "1.3rem",
    lineHeight: "1.5",
  },
});

export default function Director() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Administration";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const classes = createStyles();
  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Grid item xs={12} sm={4} className={classes.info}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={require(`../../images/Dr_Seetharaman.jpg`)}
                title="Registrar"
              />
              <CardContent>
                <Typography variant="body" gutterBottom>
                  <Box component="span" fontSize="1.5rem" gutterBottom>
                    Dr. G.Seetharaman
                  </Box>
                  <br />
                  <Box fontSize="1.2rem">
                    Registrar i/c
                    <br />
                    Indian Institute of Information Technology Tiruchirappalli
                    Tiruchirappalli-620012 Tamilnadu
                  </Box>
                  <br />
                  <a href={`mailto:registrar@iiitt.ac.in`} fontSize="1.2rem">
                    registrar@iiitt.ac.in
                  </a>
                  <br />

                  <br />
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Typography className={classes.text} gutterBottom>
            The Registrar is one of the Principle Officers of the Institute. He
            is entrusted with the statutory functions as per IIITT-Act and the
            Statutes framed there under. He is in-charge of the Administration
            of the Institute. He is an ex-officio Secretary to the statutory
            bodies of the Institute, such as, the Board of Governors, the
            Senate, the Finance Committee and the Building Works Committee.
            Apart from the above statutory functions, he is also enjoined to
            assist the Director on all matters pertaining to the administration
            of the Institute.
          </Typography>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>

      <Footer />
    </div>
  );
}
