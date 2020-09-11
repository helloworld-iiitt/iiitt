import React, { useEffect } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  themeText: {
    color: "#3f51b5",
  },
  sectionPadding: {
    padding: "1rem 0",
  },
  list: {
    listStylePosition: "inside",
    paddingLeft: "1rem",
  },
});

export default function AdmissionFeeStructure() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Programs";
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
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={{ ...classes.themeText }}
            className={classes.themeText}
          >
            <Box component="span" fontWeight={380}>
              Programs
            </Box>
          </Typography>

          <section className={classes.sectionPadding}>
            <Typography variant="h5" className={classes.themeText} gutterBottom>
              <Box component="span" fontWeight="fontWeightBold">
                Undergraduate Program
              </Box>
            </Typography>
            <Box component="span" fontSize="1.2rem" gutterBottom>
              The admission to Undergraduate Programs is done through JEE Mains.
              The JEE-Mains qualified candidates are admitted to UG program
              through Centralized Seat Allocation Board (CSAB) and Joint Seat
              Allocation Authority (JoSAA) following the reservation policy of
              Government of India.
            </Box>
            <Typography className={classes.sectionPadding}>
              <Box component="span" fontSize="1.2rem">
                IIIT Trichy offers the following two&nbsp;
                <Box component="span" fontWeight="fontWeightBold">
                  Undergraduate Programs
                </Box>
                :
              </Box>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Box component="span" fontSize="1.2rem">
                  Computer Science and Engineering (4 years, Bachelor of
                  Technology)
                </Box>
              </li>
              <li>
                <Box component="span" fontSize="1.2rem">
                  Electronics and Communication Engineering (4 years, Bachelor
                  of Technology)
                </Box>
              </li>
            </ul>
          </section>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
