import React, { useEffect } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import PersonCard from "../../components/person_card";
import {
  Typography,
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

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
  sectionText: {
    paddingTop: "0",
  },
  sectionPadding: {
    padding: "1rem 0",
  },
  tableHead: {
    background: "#2e8b57",
  },
  th: {
    color: "white",
    fontSize: "1.5rem",
  },
  td: {
    fontSize: "1.3rem",
  },
  utilityMargin: {
    marginLeft:"20px"
  }
});

export default function AdmissionProcedure() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Admission Procedure";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const classes = createStyles();
  const rank = "OpeningandClosingRank.pdf";
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
              Admission
            </Box>
          </Typography>
          <Box component="span" fontSize="1.3em">
            Admission to the various courses offered by this institution are
            specific to the programme and details can be found under each
            specific programme.
          </Box>
          <ul  className={classes.utilityMargin}>
              <li >
                <a
                  href="admission_ug"
                  className={`${classes.themeText} ${classes.link}`}
                >
                  B.Tech
                </a>
              </li>
              <li>
                <a
                  href="admission_pg"
                  className={`${classes.themeText} ${classes.link}`}
                >
                  M.Tech
                </a>
              </li>
              <li>
                <div style={{display:"flex", alignItems:"flex-end"}}>
                <a
                  href="/programs"
                  className={`${classes.themeText} ${classes.link}`}
                >
                  Ph.D (full-time/part-time)
                </a>
                <p>
                  [Check the website regularly for the forthcoming
                  advertisement]
                </p>
                </div>
              </li>
            </ul>
          <br />
          <br />
          <section className={classes.sectionPadding}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                Other Links
              </Box>
            </Typography>
            <ul  className={classes.utilityMargin}>
              <li>
                <a
                  href="http://www.ncbc.nic.in/Home.aspx?ReturnUrl=%2f"
                  target="_blank"
                  className={`${classes.themeText} ${classes.link}`}
                >
                  National Commission for Backward Classes (http://www.ncbc.nic.in/)
                </a>
              </li>
              <li>
                <a
                  href="https://socialjustice.nic.in/" target="_blank"
                  className={`${classes.themeText} ${classes.link}`}
                >
                  Ministry of Social Justice and Empowerment (http://socialjustice.nic.in/)
                </a>
              </li>
              <li>
                <a
                  href="https://tribal.nic.in/" target="_blank"
                  className={`${classes.themeText} ${classes.link}`}
                >
                  Ministry of Tribal Affairs, Government of India (https://tribal.nic.in/)
                </a>
              </li>
              <li>
                <a
                  href="http://disabilityaffairs.gov.in/content/" target="_blank"
                  className={`${classes.themeText} ${classes.link}`}
                >
                  Department of Empowerment of Persons with Disabilities (http://disabilityaffairs.gov.in/)
                </a>
              </li>
            </ul>
          </section>
          <section className={classes.sectionPadding}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                Admissions Committee
              </Box>
            </Typography>
             <ol className={classes.utilityMargin}>
               <li>
               Dr. G.Seetharaman, Chairman, PI/ Associate Professor, Department of ECE
               </li>
               <li>
               Dr. N. Renugadevi, Verification officer, Co-PI/ Assistant Professor, Department of CSE
               </li>
             </ol>
          </section>
          <Grid container>
            <Grid item xs={12} sm={10}>
              <section className={classes.sectionPadding}>
                <Typography variant="h5" className={classes.themeText}>
                  <Box component="span" fontWeight="fontWeightBold">
                    Contact Details of Admission Incharge
                  </Box>
                </Typography>
                <p>For Admission related queries, contact Chairman Admissions, IIIT Tiruchirappalli.</p>
                <PersonCard
                    name={"Dr. G. Seetharaman"}
                    designation={"Chairman Admissions"}
                    emailID={"admissions@iiitt.ac.in"}
                    src={"adm_ece_1.jpg"}
                    src_type="faculty"
                    researchArea="During the admission schedule only."
                    mobile="9486631181 "
                  />
              </section>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
