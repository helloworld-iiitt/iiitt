import React, { useEffect } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { Typography, Grid, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Scholarship() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Scholarship";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const file = "Noticefortheyear2021-22.pdf";
  const file1 = "NSPprocedureforBonafide-marksheet-verificationatInstitute.pdf";
  const file2 = "NOSAdvertisement2021-22.pdf";
  const file3 = "NFSTAdvertisement2021-22.pdf";
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
            <Box component="span" fontWeight={490}>
              Scholarship
            </Box>
          </Typography>

          <section className={classes.sectionPadding}>
            <Typography variant="h4" className={classes.themeText} gutterBottom>
              <Box component="span" fontWeight="fontWeightBold">
                NSP
              </Box>
            </Typography>
            <Box component="span" fontSize="1.2rem" gutterBottom>
              National Scholarship Portal is open for Fresh and Renewal
              Applications.
              <a href="https://scholarships.gov.in/">
                <Typography variant="h6">NSP portal</Typography>
              </a>
            </Box>
          </section>

          <Divider />
          <section className={classes.sectionPadding}>
            <a href={require(`../../docs/${file}`)} download={`${file}`}>
              <Typography variant="h6">Notice For The Year 21-22</Typography>
            </a>
            <a href={require(`../../docs/${file1}`)} download={`${file1}`}>
              <Typography variant="h6">
                NSP procedure for Bonafide- marksheet-verification at Institute.
              </Typography>
            </a>
          </section>

          <Divider />
          <section>
            <Typography variant="h4" className={classes.themeText} gutterBottom>
              <Box component="span" fontWeight="fontWeightBold">
                Fellowship for Higher Education
              </Box>
            </Typography>
            <Divider />
            <a href={require(`../../docs/${file2}`)} download={`${file2}`}>
              <Typography variant="h6">
                National Overseas Scholarship (NOS)/Passage grant Scheme for ST
                candidates for the year 2021-22
              </Typography>
            </a>
            <a href={require(`../../docs/${file3}`)} download={`${file3}`}>
              <Typography variant="h6">
                National Fellowship and Scholarship for Higher Education of ST
                students for the year 2021-22
              </Typography>
            </a>
          </section>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
