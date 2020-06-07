import React from 'react';
import Navbar from '../../components/navbar/index'
import MissionVision from '../../components/mission_vision/'
import Footer from '../../components/footer/'
import { Grid, Typography, Card, Divider, CardContent  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const About = () => {
  const bull = <span>•</span>;
  const useStyles=makeStyles(()=>{

  });

  return (
      <>
        <Navbar />
        <div style={{width: "100%", padding: "35px"}}>
          <Typography variant="h2" component="h2" style={{color: "#3f51b5", paddingBottom: "1.5rem"}}>
            About us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" style={{color: "#555555", textAlign: "left", lineHeight: "2"}}>
                        Indian Institute of Information Technology Tiruchirappalli (IIITT), also known as IIIT Trichy, is an Institute of National Importance and one among the 19 IIITs proposed under the non-profit Public-Private Partnership (PPP) Model by MHRD.
        <br />   IIITT is an academic and research institute fully funded by Government of India, Government of Tamil Nadu and Industry Partners in the ratio of 50:35:15.
        <br />   Industry partners include Tata Consultancy Services (TCS), Cognizant Technology Solutions (CTS), Infosys, Ramco Systems, ELCOT, and Navitas (TAKE Solutions).
                  </Typography>
                  <br />
                  <Divider />
                  <br />
                  <Typography variant="subtitle1" style={{color: "#555555", textAlign: "left", lineHeight: "2"}}>
                    The focus is to address the challenges faced by the Indian IT industry and growth of the domestic IT market, the Ministry of Human Resource Development(MHRD), Government of India has established Indian Institute of Information Technology Tiruchirappalli on a Not-for-profit Public Private Partnership (N-PPP) basis like 22 other IIITs.
      <br />
        A major objective in establishing IIITT is to set up a model of education which can produce best-in-class human resources in IT and harnessing the multidimensional facets of IT in various domains. While the number of students produced would be small, the impact they create would be great.
      <br />
        IIIT Trichy is operating in the temporary campus within the premises of National Institute of Technology (NIT) Campus, Tiruchirappalli – 620 015, Tamil Nadu, since March 2016. NIT Tiruchirappalli is the mentor institution for IIIT Trichy that provides academic and administrative support to the IIITT. In future, the permanent campus will be built at Sethurappatti Village, Srirangam Taluk, Tiruchirappalli District.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card variant="outlined" style={{height: "100%"}}>
                <CardContent>
                  <Typography variant="h5" style={{color:'#3f51b5'}}>
                    Vision
                  </Typography>
                  <Divider style={{margin: "0.2rem 0 1rem 0px"}}/>
                  <Typography color="textSecondary">
                      To achieve "World Class Excellence in Information and Communication Technology".
                  </Typography> 
                  <br />
                  <br />
                  <Typography variant="h5" style={{color:'#3f51b5'}}>
                    Mission
                  </Typography>
                  <Divider style={{margin: "0.2rem 0 1rem 0px"}}/>
                  <Typography color="textSecondary">
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
        </div>
      <Footer />
    </>
  )
}

export default About;