import React from "react";
import Navbar from "../../components/navbar/index";
import "../Admission_ug/index.css";
import Footer from "../../components/footer";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Admission_program() {
  const createStyles = makeStyles({
    themeText: {
      color: "#2e8b57",
      fontSize: 40,
      fontWeight: "500",
    },
    container: {
      padding: "1rem 1rem",
    },
    link: {
      textDecoration: "none",
      display: "block",
      paddingTop: "1rem",
      fontWeight: "500",
      width: "auto",
      color: "#2e8b57",
      "&:hover": {
        textDecoration: "underline",
        color: "blueviolet",
      },
    },
  });
  const classes = createStyles();

  return (
    <div>
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            className={classes.themeText}
          >
            <Box component="span">Programs</Box>
          </Typography>
          <h2 className="utility-mrgin_2">Undergraduate Program</h2>
          <p className="utility-mrgin_2">
            The admission to Undergraduate Programs is done through JEE Mains.
            The JEE-Mains qualified candidates are admitted to UG program
            through Centralized Seat Allocation Board (CSAB) and Joint Seat
            Allocation Authority (JoSAA) following the reservation policy of
            Government of India.
          </p>
          <div>
            <p className="utility-mrgin_2">
              IIIT Tiruchirappalli offers the following two
              <strong>Undergraduate Programs :</strong>{" "}
            </p>
            <ul className="utility-bullet">
              <li>
                <h4>
                  Computer Science and Engineering (4 years, Bachelor of
                  Technology)
                </h4>
              </li>
              <li>
                <h4>
                  Electronics and Communication Engineering (4 years, Bachelor
                  of Technology)
                </h4>
              </li>
            </ul>
          </div>
          <hr className="utility-hr" />
          <h2>Postgraduate Program</h2>
          <div>
            <p className="utility-mrgin_2">
              IIIT Tiruchirappalli offers the following two{" "}
              <strong>Postgraduate Programs:</strong>{" "}
            </p>
            <ul className="utility-bullet">
              <li>
                <h4>
                  Computer Science and Engineering (2 years, Masters of
                  Technology)
                </h4>
              </li>
              <li>
                <h4>VLSI Systems (2 years, Masters of Technology)</h4>
              </li>
            </ul>
          </div>
          <hr className="utility-hr" />
          <h2 id="#Doctoral">Doctoral Program</h2>
          <div>
            <p className="utility-mrgin_2">
              IIIT Tiruchirappalli offers <strong>Ph.D programs</strong>
              in the following Departments.{" "}
            </p>
            <ul className="utility-bullet utility-bottom">
              <li>
                <h4>Computer Science and Engineering</h4>
                <p>
                  Data Analytics, Machine Learning, Deep Learning, IoT, Cloud
                  Computing, Medical Image Processing and allied areas
                </p>
              </li>
              <li>
                <h4>Electronics and Communication Engineering</h4>
                <p>
                  VLSI Design, Wireless Communication, Micro &#38; Nano
                  Electronics, Compact Modeling &#38; Simulation and allied
                  areas
                </p>
              </li>
              <li>
                <h4>Mechanical Engineering</h4>
                <p>
                  Additive Manufacturing, Powder Metallurgy, Smart Materials,
                  Energy storage materials
                </p>
              </li>
              <li>
                <h4>Science and Humanities</h4>
                <ul className="utility-bullet utility-bottom">
                  <li>
                    <h4>Physics</h4>
                    <p>
                      Optoelectronic Materials &#38; Devices, Fiber optics,
                      Plasmonics, Semiconductor heterostructures
                    </p>
                  </li>
                  <li>
                    <h4>Mathematics</h4>
                    <p>Fluid Dynamics</p>
                  </li>
                  <li>
                    <h4>Economics</h4>
                    <p>
                      Health Economics, Health Technology Assessment, Global
                      issues in health and development
                    </p>
                  </li>
                  <li>
                    <h4>English</h4>
                    <p>Applied Linguistics, Indian Writing in English</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Admission_program;
