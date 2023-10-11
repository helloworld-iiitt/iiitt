import React, { useEffect } from "react";
import { Typography, Grid, Box, Divider } from "@material-ui/core";
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

  useEffect(
    () => () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    },
    [],
  );

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
                IIIT Tiruchirappalli offers the following two&nbsp;
                <Box component="span" fontWeight="fontWeightBold">
                  Undergraduate Programs
                </Box>
                :
              </Box>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Box
                  component="span"
                  fontSize="1.2rem"
                  fontWeight="fontWeightBold"
                >
                  Computer Science and Engineering (4 years, Bachelor of
                  Technology)
                </Box>
              </li>
              <li>
                <Box
                  component="span"
                  fontSize="1.2rem"
                  fontWeight="fontWeightBold"
                >
                  Electronics and Communication Engineering (4 years, Bachelor
                  of Technology)
                </Box>
              </li>
            </ul>
          </section>

          <Divider />
          <section className={classes.sectionPadding}>
            <Typography variant="h5" className={classes.themeText} gutterBottom>
              <Box component="span" fontWeight="fontWeightBold">
                Postgraduate Program
              </Box>
            </Typography>

            <Typography className={classes.sectionPadding}>
              <Box component="span" fontSize="1.2rem">
                IIIT Tiruchirappalli offers the following two&nbsp;
                <Box component="span" fontWeight="fontWeightBold">
                  Postgraduate Programs
                </Box>
                :
              </Box>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Box
                  component="span"
                  fontSize="1.2rem"
                  fontWeight="fontWeightBold"
                >
                  Computer Science and Engineering (2 years, Masters of
                  Technology)
                </Box>
              </li>
              <li>
                <Box
                  component="span"
                  fontSize="1.2rem"
                  fontWeight="fontWeightBold"
                >
                  VLSI Systems (2 years, Masters of Technology)
                </Box>
              </li>
            </ul>
          </section>

          <Divider />
          <section>
            <Typography variant="h5" className={classes.themeText} gutterBottom>
              <Box component="span" fontWeight="fontWeightBold">
                Doctoral Program
              </Box>
            </Typography>

            <Typography className={classes.sectionPadding}>
              <Box component="span" fontSize="1.2rem">
                IIIT Tiruchirappalli offers the &nbsp;
                <Box component="span" fontWeight="fontWeightBold">
                  Ph.D programs
                </Box>
                &nbsp; in the following Departments.
              </Box>
            </Typography>

            <ul className={classes.list}>
              <li>
                <Box
                  component="span"
                  fontSize="1.2rem"
                  fontWeight="fontWeightBold"
                >
                  Computer Science and Engineering
                </Box>
                <Typography>
                  Data Analytics, Machine Learning, Deep Learning, IoT, Cloud
                  Computing, Medical Image Processing
                </Typography>
              </li>
              <li>
                <Box
                  component="span"
                  fontSize="1.2rem"
                  fontWeight="fontWeightBold"
                >
                  Electronics and Communication Engineering
                </Box>
                <Typography>
                  VLSI Design, Wireless Communication, Micro & Nano Electronics,
                  Compact Modeling & Simulation
                </Typography>
              </li>
              <li>
                <Box
                  component="span"
                  fontSize="1.2rem"
                  fontWeight="fontWeightBold"
                >
                  Mechanical Engineering
                </Box>
                <Typography>
                  Additive Manufacturing, Powder Metallurgy, Smart Materials,
                  Energy storage materials
                </Typography>
              </li>
              <li>
                <Box
                  component="span"
                  fontSize="1.2rem"
                  fontWeight="fontWeightBold"
                >
                  Science and Humanities
                </Box>
                <ul>
                  <li>
                    <Box
                      component="span"
                      fontSize="1.2rem"
                      fontWeight="fontWeightBold"
                    >
                      Physics
                    </Box>
                    <Typography>
                      Optoelectronic Materials & Devices, Fiber optics,
                      Plasmonics, Semiconductor heterostructures
                    </Typography>
                  </li>
                  <li>
                    <Box
                      component="span"
                      fontSize="1.2rem"
                      fontWeight="fontWeightBold"
                    >
                      Mathematics
                    </Box>
                    <Typography>Fluid Dynamics</Typography>
                  </li>
                  <li>
                    <Box
                      component="span"
                      fontSize="1.2rem"
                      fontWeight="fontWeightBold"
                    >
                      Economics
                    </Box>
                    <Typography>
                      Health Economics, Health Technology Assessment, Global
                      issues in health and development
                    </Typography>
                  </li>
                  <li>
                    <Box
                      component="span"
                      fontSize="1.2rem"
                      fontWeight="fontWeightBold"
                    >
                      English
                    </Box>
                    <Typography>
                      Applied Linguistics, Indian Writing in English
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
