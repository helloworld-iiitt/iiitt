import React from 'react';
import Navbar from '../../components/navbar/index'
import MissionVision from '../../components/mission_vision/'
import { Grid, Typography, Card, Divider, CardContent  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Navbar />
      <Grid container spacing={4} style={{margin: '10px'}}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h2">
            About us
          </Typography>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Card>
                <Typography variant="subtitle1">
                    Indian Institute of Information Technology Tiruchirappalli (IIITT), also known as IIIT Trichy, is an Institute of National Importance and one among the 19 IIITs proposed under the non-profit Public-Private Partnership (PPP) Model by MHRD.
        IIITT is an academic and research institute fully funded by Government of India, Government of Tamil Nadu and Industry Partners in the ratio of 50:35:15.
        Industry partners include Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), Infosys, Ramco Systems, ELCOT, and Navitas (TAKE Solutions).
                </Typography>
                <Divider />
                <Typography variant="subtitle1">
                The focus is to address the challenges faced by the Indian IT industry and growth of the domestic IT market, the Ministry of Human Resource Development(MHRD), Government of India has established Indian Institute of Information Technology Tiruchirappalli on a Not-for-profit Public Private Partnership (N-PPP) basis like 22 other IIITs.

A major objective in establishing IIITT is to set up a model of education which can produce best-in-class human resources in IT and harnessing the multidimensional facets of IT in various domains. While the number of students produced would be small, the impact they create would be great.

IIIT Trichy is operating in the temporary campus within the premises of National Institute of Technology (NIT) Campus, Tiruchirappalli – 620 015, Tamil Nadu, since March 2016. NIT Tiruchirappalli is the mentor institution for IIIT Trichy that provides academic and administrative support to the IIITT. In future, the permanent campus will be built at Sethurappatti Village, Srirangam Taluk, Tiruchirappalli District.
                </Typography>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={6} className={classes.root}>
            <MissionVision />
          </Grid> */}
          <Card className={classes.root} variant="outlined" id="mission_vision">
            <CardContent>
              <Typography variant="h5" component="h1" style={{color:'#3f51b5'}}>
                Vision
              </Typography>
              <Divider />
              <Typography className={classes.pos} color="textSecondary" id="vision">
                  To achieve "World Class Excellence in Information and Communication Technology".
              </Typography>
              <Typography variant="h5" component="h1" style={{color:'#3f51b5'}}>
                Mission
              </Typography>
              <Divider />
              <Typography className={classes.pos} color="textSecondary" gutterBottom id="mission">
              {bull} To impart Information Technology education to students and future leaders.
              <br/>
              <br/>
              {bull} To establish Center of Excellences in Information Technology.
              <br/>
              <br/>
              {bull} To engage in cutting edge technology research to meet the current needs and future challenges of India and the world at large.
              </Typography>
            </CardContent>
          </Card >
          </Grid>
      </Grid>
    </>
  )
}
