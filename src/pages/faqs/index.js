import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import Faq from "../../components/faq/index";
import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  faq: {
    margin: "0.7rem 0",
  },
  themeText: {
    color: "#2e8b57",
  },
});

export default function Faqs() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "FAQs";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const [data, setData] = useState(undefined);

  useEffect(() => {
    import("../../json/faqs.json").then((d) => {
      setData(d.data);
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
              FAQs
            </Box>
          </Typography>
          {data &&
            data.map((faq, index) => {
              return (
                <div className={classes.faq}>
                  <Faq questionNumber={index} question={faq.question} answer={faq.answer} />
                </div>
              );
            })}
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
