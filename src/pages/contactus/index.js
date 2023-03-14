import React, { useEffect } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import Iframe from "react-iframe";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
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
  text: {
    fontSize: "1.2rem",
  },
  sectionPadding: {
    padding: "1rem 0",
  },
  map: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: "1.5rem",
  },
});

export default function ContactUs() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Contact Us";
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
            className={classes.themeText}
          >
            <Box component="span" fontWeight={380}>
              Reach Us
            </Box>
          </Typography>
          <section className={classes.sectionPadding}>
            <Typography
              component="h5"
              gutterBottom
              className={classes.themeText}
            >
              <Box
                component="span"
                fontWeight="fontWeightBold"
                className={classes.title}
              >
                Location
              </Box>
            </Typography>
            <Typography className={classes.text}>
              IIIT Trichy has now shifted to the permanent campus at
              Sethurappatti.
              <br />
              It is a 20-minute drive from Tiruchirappalli
              Junction/Central Bus stand on the Tiruchirappalli-Madurai Highway.
              Tiruchirappalli is also well-connected to the other cities of
              Tamil Nadu, southern Karnataka and Kerala through Govt./Private
              buses. One can get buses from Tiruchirappalli to almost any part
              of the state, due to its geographical location in the center of
              Tamil Nadu. The Central bus station runs long distance services to
              major cities of the State and South India such as Chennai,
              Madurai, Coimbatore, Bangalore, Erode, Thiruvananthapuram and
              Tirupathi.
            </Typography>
          </section>
          <section className={classes.sectionPadding}>
            <Typography
              component="h5"
              gutterBottom
              className={classes.themeText}
            >
              <Box
                component="span"
                fontWeight="fontWeightBold"
                className={classes.title}
              >
                How to reach IIIT Trichy?
              </Box>
            </Typography>
            <Typography className={classes.text}>
              Tiruchirappalli is an important junction on the Southern Railway.
              It connects Chennai, Thanjavur, Madurai, Tirupati, Rameswaram,
              Bengaluru, Coimbatore, Kolkata, Jammu, New Delhi, Cochin and
              Mangalore. It has an international airport, and is connected with
              Chennai, Dubai, Kuala Lumpur, Singapore and Colombo. <br />
              <br />
              Frequent busses are available from Tiruchirappalli central bus
              stand, every 15 minutes. Get on the Viralimalai bus Route: Trichy
              - Edamalaipatti puthur - Panjappur- Nagamangalam - Kunnathur -
              Alundur - Sethurappatti.
              <br />
              <br />
              By car it takes approximately 20 minutes from Tiruchirappalli
              railway station/airport/bus stand.
              <br />
            </Typography>
            {
              <div className={classes.map}>
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7841.673721296751!2d78.593771!3d10.669768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28b98720c32abaa8!2sIndian%20Institute%20of%20Information%20Technology%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1633696081840!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style="border:0;"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></Iframe>
              </div>
            }
          </section>
          <section className={classes.sectionPadding}>
            <Typography
              component="h5"
              gutterBottom
              className={classes.themeText}
            >
              <Box
                component="span"
                fontWeight="fontWeightBold"
                className={classes.title}
              >
                Mailing Address
              </Box>
            </Typography>
            <Typography className={classes.text}>
              INDIAN INSTITUTE OF INFORMATION TECHNOLOGY TIRUCHIRAPPALLI,
              <br />
              SETHURAPATTI,
              <br />
              TRICHY-MADURAI HIGHWAY,
              <br />
              TAMIL NADU - 620012
            </Typography>
          </section>
          <section className={classes.sectionPadding}>
            <Typography
              component="h5"
              gutterBottom
              className={classes.themeText}
            >
              <Box
                component="span"
                fontWeight="fontWeightBold"
                className={classes.title}
              >
                Contact Details
              </Box>
            </Typography>
            <Typography className={classes.text}>
              <Box component="span" fontWeight="fontWeightBold">
                Email:
              </Box>
              &nbsp;
              <a href="mailto: office@iiitt.ac.in" className={classes.link}>
                office@iiitt.ac.in
              </a>
              <br />
            </Typography>
          </section>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
