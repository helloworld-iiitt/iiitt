import React from "react";
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import bio_data from "../../json/biographies.json";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import {
  Card,
  Grid,
  Box,
  Typography,
  CardMedia,
  CardContent,
} from "@material-ui/core";

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
  media: {
    height: "15rem",
    width: "13rem",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid #2e8b57",
    borderRadius: "4px",
  },
  card: {
    padding: "1.5rem",
  },
  information: {
    margin: "0 auto",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
});

export default function Biography() {
  let param = window.location.pathname;
  //console.log(param);

  const [details, dept, id] = param.split("/").filter(Boolean);
  //console.log(details, dept, id);

  const info = bio_data[dept].find((data) => data.deptID === id);
  console.log(info);
  const classes = createStyles();
  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Grid item xs={12} sm={4} className={classes.information}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={require(`../../images/people/faculty/${info.src}`)}
                title={info.name}
              />
            </Card>
          </Grid>
          <Typography variant="h4" color="primary">
            <h4>Personal Information</h4>
          </Typography>
          <Divider light />
          <br />
          <Typography>
            <Grid container sm={12} xs={12}>
              <Grid item sm={3} xs={6}>
                Name:
              </Grid>
              <Grid item sm={3} xs={6}>
                {info.name}
              </Grid>
            </Grid>
            <Grid container sm={12} xs={12}>
              <Grid item sm={3} xs={6}>
                Designation:
              </Grid>
              <Grid item sm={3} xs={6}>
                {info.designation}
              </Grid>
            </Grid>
            <Grid container sm={12} xs={12}>
              <Grid item sm={3} xs={6}>
                Department:
              </Grid>
              <Grid item sm={3} xs={6}>
                {info.department}
              </Grid>
            </Grid>
            <Grid container sm={12} xs={12}>
              <Grid item sm={3} xs={6}>
                Email Id:
              </Grid>
              <Grid item sm={3} xs={6}>
                {info.emailID}
              </Grid>
            </Grid>
          </Typography>
          <br />
          <br />
          <Typography variant="h4" color="primary">
            <h4>Bio</h4>
          </Typography>
          <Divider light />
          <Typography className={classes.text} gutterBottom>
            {info.bio}
          </Typography>
          <br />
          <br />
          <Typography variant="h4" color="primary">
            <h4>Research &amp; Development</h4>
          </Typography>
          <Divider light />
          <Typography className={classes.text} gutterBottom>
            <ul>
              <li>{info.researchAndDevelopment[1]}</li>
              <li>{info.researchAndDevelopment[2]}</li>
              <li>{info.researchAndDevelopment[3]}</li>
              <li>{info.researchAndDevelopment[4]}</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
