/**
 * About Page
 *
 * Hardcoded information about IIITT institute
 */

"use client";

// #region import
import LinkIcon from "@mui/icons-material/Link";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useEffect } from "react";
import nextConfig from "../../../next.config";
import "../globals.css";
import styles from "./about.module.css"
// #endregion
const About = () => {
  useEffect(() => {
    document.title = "About Us | IIIT Tiruchirappalli";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  const bull = <span>•</span>;

  return (
    <div className="page-container">
      <div className={styles.parent}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            color: "#2e8b57",
            mt: 5,
            pb: 3,
            fontSize: { xs: "2rem", md: "3.75rem" }
          }}
        >
          About us | IIIT Tiruchirappalli
        </Typography>
        <Card
          style={{
            border: "none",
            borderRadius: "10px",
            boxShadow: "none",
            overflow: "visible",
          }}
          id="main_card"
        >
          <Typography
            variant="subtitle1"
            style={{
              color: "#555555",
              textAlign: "justify",
              lineHeight: "2",
              marginInline: "1rem",
            }}
          >
            <Box component="span" fontWeight="fontWeightBold">
              Indian Institute of Information Technology Tiruchirappalli
              (IIITT)
            </Box>
            , also known as
            <Box component="span" fontWeight="fontWeightBold">
              {" "}
              IIIT Trichy
            </Box>
            , is an Institute of National Importance and one among the 21
            IIITs proposed under the
            <Box component="span" fontWeight="fontWeightBold">
              {" "}
              non-profit Public-Private Partnership (PPP) Model by MHRD
            </Box>
            . IIIT Tiruchirappalli is an academic and research institute fully
            funded by
            <Box component="span" fontWeight="fontWeightBold">
              {" "}
              Government of India
            </Box>
            ,
            <Box component="span" fontWeight="fontWeightBold">
              {" "}
              Government of Tamil Nadu
            </Box>{" "}
            and
            <Box component="span" fontWeight="fontWeightBold">
              {" "}
              Industry Partners
            </Box>{" "}
            in the ratio of
            <Box component="span" fontWeight="fontWeightBold">
              {" "}
              50:35:15
            </Box>{" "}
            <br />
            <Box> Industry Partners include:</Box>
            <Link href="https://www.tcs.com/" target="_blank">
              Tata Consultancy Services(TCS)
            </Link>
            {/* &nbsp; */}
            <Link href="https://www.cognizant.com/" target="_blank">
              Cognizant Technology Solutions (CTS)
            </Link>
            {/* &nbsp; */}
            <Link href="https://www.infosys.com/" target="_blank">
              Infosys
            </Link>
            {/* &nbsp; */}
            <Link href="https://www.ramco.com/" target="_blank">
              Ramco Systems
            </Link>
            {/* &nbsp; */}
            <Link href="https://elcot.in" target="_blank">
              ELCOT
            </Link>
            {/* &nbsp; */}
            <Link href="https://www.navitaslifesciences.com/" target="_blank">
              Navitas (TAKE Solutions)
            </Link>
          </Typography>
          <br />
          <Divider />
          <Box mt={4}>
            <Typography variant="h5" align="center" sx={{ color: "#2e8b57"}} gutterBottom>
              Official Documents
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              className={styles.documentcontainer}
            >
              {[
                {
                  label: "IIIT Act 2017",
                  file: "IIIT_Act_2017.pdf",
                },
                {
                  label: "IIITT Statutes",
                  file: "IIITT Statutes.pdf",
                },
                {
                  label: "GST Certificate",
                  file: "Gst_certificate.pdf",
                },
              ].map((doc) => (
                <Grid key={doc.label}>
                  <Card
                    elevation={1}
                    sx={{
                      minWidth: 220,
                      padding: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      ":hover": {
                        boxShadow: 3,
                        backgroundColor: "#f5faff",
                      },
                    }}
                  >
                    <LinkIcon sx={{ color: "#2e8b57"}} />
                    <Link
                      href={`${nextConfig.env?.DOCUMENT}/notices/${doc.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      sx={{ color: "#2e8b57"}}
                    >
                      {doc.label}
                    </Link>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider />
          <br />
          <Grid size={8}>
            <Card style={{ height: "100%", boxShadow: "none" }}>
              <CardContent id="mission-vision">
                <Typography variant="h5" style={{ color: "#2e8b57" }}>
                  Vision
                </Typography>
                <Divider style={{ margin: "0.2rem 0 1rem 0px" }} />
                <Typography color="textSecondary">
                  To achieve &quot;World Class Excellence in Information and
                  Communication Technology&quot;.
                </Typography>
                <br />

                <Typography variant="h5" style={{ color: "#2e8b57" }}>
                  Mission
                </Typography>
                <Divider style={{ margin: "0.2rem 0 1rem 0px" }} />
                <Typography color="textSecondary">
                  {bull} To impart Information Technology education to
                  students and future leaders.
                  <br />
                  <br />
                  {bull} To establish Center of Excellences in Information
                  Technology.
                  <br />
                  <br />
                  {bull} To engage in cutting edge technology research to meet
                  the current needs and future challenges of India and the
                  world at large.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <br />
          <div className={styles.logo_cotainer}>
            <Image
              src={`${nextConfig.env?.IMAGE}/iiitt-logo.png`}
              alt="IIIT Trichy Logo"
              layout="intrinsic"
              width={200}
              height={200}
            />
          </div>
          <Typography
            variant="subtitle1"
            style={{
              color: "#555555",
              textAlign: "left",
              lineHeight: "2",
              marginInline: "1rem",
            }}
          >
            The focus is to address the challenges faced by the Indian IT
            industry and growth of the domestic IT market, the Ministry of
            Human Resource Development(MHRD), Government of India has
            established Indian Institute of Information Technology
            Tiruchirappalli on a Not-for-profit Public Private Partnership
            (N-PPP) basis like 21 other IIITs.
            <br />
            A major objective in establishing IIIT Tiruchirappalli is to set
            up a model of education which can produce best-in-class human
            resources in IT and harnessing the multidimensional facets of IT
            in various domains. While the number of students produced would be
            small, the impact they create would be great.
            <br />
            <br />
            As of June 14, 2021, IIIT Tiruchirappalli has started operating
            from the permanent campus at Sethurappatti. Before that IIIT
            Tiruchirappalli operated from temporary campus within the premises
            of Oxford Engineering College campus, Tiruchirappalli - 620 009,
            Tamil Nadu from mid-July 2020. Before that IIIT Trichy was
            operating in the temporary campus within the premises of National
            Institute of Technology (NIT) Campus, Tiruchirappalli – 620 015,
            Tamil Nadu, since March 2016. &nbsp;
          </Typography>
        </Card>
            <br/>
      </div>
    </div>
  );

};

export default About;
