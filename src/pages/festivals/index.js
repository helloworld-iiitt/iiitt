import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import MainCarousel from "../../components/carousel/index";

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
  sectionPadding: {
    padding: "0.7rem 0 0.3rem 0",
  },
  carousel: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: "1.5rem",
  },
  text: {
    fontSize: "1.2rem",
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
  download: {
    marginRight: "0.3rem",
    position: "relative",
    top: "0.3rem",
  },
});

export default function Festivals() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Festivals";
  }, []);

  useEffect(
    () => () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    },
    [],
  );

  const [festivals, setFestivals] = useState(undefined);

  useEffect(() => {
    import("../../json/festivals.json").then((data) => {
      setFestivals(data.data);
    });
  }, []);

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
              Festivals
            </Box>
          </Typography>
          <Typography gutterBottom className={classes.text}>
            Festivals create the most extraordinary memories for students during
            there college life.
            <br />
            IIIT Trichy knows this, and thus has created a perfect enviroment
            where students can celebrate Festivals with full fun.
          </Typography>
          {festivals &&
            festivals.map((festival) => (
              <section className={classes.sectionPadding}>
                <Typography
                  component="h1"
                  className={`${classes.themeText} ${classes.title}`}
                  gutterBottom
                >
                  <Box component="span" fontWeight="fontWeightBold">
                    {festival.name}
                  </Box>
                </Typography>
                <Typography gutterBottom className={classes.text}>
                  {festival.description}
                </Typography>
                {festival.links &&
                  festival.links.map((link) => (
                    <>
                      {link.download ? (
                        <a
                          href={require(`../../docs/${link.url}`)}
                          download={`${link.url}`}
                          className={classes.link}
                        >
                          <img
                            src={require("../../images/news-icon.svg")}
                            className={classes.download}
                          />
                          {link.name}
                        </a>
                      ) : (
                        <a href={link.url} className={classes.link}>
                          {link.name}
                        </a>
                      )}
                      <br />
                    </>
                  ))}
                {festival.images && (
                  <div className={classes.carousel}>
                    <MainCarousel images={festival.images} />
                  </div>
                )}
              </section>
            ))}
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
