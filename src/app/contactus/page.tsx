"use client";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import styles from "./contactus.module.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const Contactus = () => {
  useEffect(() => {
    document.title = "contactus Us | IIIT Tiruchirappalli";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <div className="page-container">
      <Grid container className={styles.container}>
        <Grid size={1} />
        <Grid size={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={styles.themeText}
          >
            <Box component="span" fontWeight={380}>
              Reach Us
            </Box>
          </Typography>
          <section className={styles.sectionPadding}>
            <Typography
              component="h5"
              gutterBottom
              className={styles.themeText}
            >
              <Box
                component="span"
                fontWeight="fontWeightBold"
                className={styles.title}
              >
                Location
              </Box>
            </Typography>
            <Typography className={styles.text}>
              IIIT Trichy has now shifted to the permanent campus at
              Sethurappatti.
              <br />
              IIIT Tiruchirappalli is located about 20.0kms from Tiruchirappalli
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
          <section className={styles.sectionPadding}>
            <Typography
              component="h5"
              gutterBottom
              className={styles.themeText}
            >
              <Box
                component="span"
                fontWeight="fontWeightBold"
                className={styles.title}
              >
                How to reach IIIT Trichy?
              </Box>
            </Typography>
            <Typography className={styles.text}>
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
              By car it takes approximately 30 minutes from Tiruchirappalli
              railway station/airport/bus stand.
              <br />
            </Typography>
            {
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7841.673721296751!2d78.593771!3d10.669768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28b98720c32abaa8!2sIndian%20Institute%20of%20Information%20Technology%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1633696081840!5m2!1sen!2sin"
                  width="100%"
                  height="600px"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            }
          </section>
          <section className={styles.sectionPadding}>
            <Typography
              component="h5"
              gutterBottom
              className={styles.themeText}
            >
              <Box
                component="span"
                fontWeight="fontWeightBold"
                className={styles.title}
              >
                Mailing Address
              </Box>
            </Typography>
            <Typography className={styles.text}>
              INDIAN INSTITUTE OF INFORMATION TECHNOLOGY TIRUCHIRAPPALLI,
              <br />
              SETHURAPATTI,
              <br />
              TRICHY-MADURAI HIGHWAY,
              <br />
              TAMIL NADU - 620012
            </Typography>
          </section>
          <section className={styles.sectionPadding}>
            <Typography
              component="h5"
              gutterBottom
              className={styles.themeText}
            >
              <Box
                component="span"
                fontWeight="fontWeightBold"
                className={styles.title}
              >
                Contact Details
              </Box>
            </Typography>
            <Box className={styles.text}>
              <Box display="flex" alignItems="center" mb={1}>
                <EmailIcon sx={{ marginRight: "0.5rem", color: "#2e8b57" }} />
                <Typography fontWeight="bold" component="span" mr={1}>
                  Email:
                </Typography>
                <a href="mailto:office@iiitt.ac.in" className={styles.link}>
                  office@iiitt.ac.in
                </a>
              </Box>

              <Box display="flex" alignItems="center">
                <PhoneIcon sx={{ marginRight: "0.5rem", color: "#2e8b57" }} />
                <Typography fontWeight="bold" component="span" mr={1}>
                  Office No:
                </Typography>
                <a href="tel:+919442045851" className={styles.link}>
                  +91 94420 45851
                </a>
              </Box>
            </Box>
          </section>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contactus;
