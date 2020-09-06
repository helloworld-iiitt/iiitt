import React from 'react';
import Navbar from '../../components/navbar/index'
import MissionVision from '../../components/mission_vision/'
import Footer from '../../components/footer/'
import { Grid, Typography, Card, Divider, CardContent, Box, Link } from '@material-ui/core'

export default class About extends React.Component {

  componentWillUnmount()  {
    document.getElementsByTagName('title')[0].innerHTML = "IIIT Trichy";
  }

  componentDidMount() {
    document.getElementsByTagName('title')[0].innerHTML = "About Us | IIIT Tiruchirappalli";
  }


  render() {
    const bull = <span>•</span>;
    return (
      <div className="page-container">
        <Navbar />
        <div style={{width: "100%", padding: "35px"}}>
          <Typography variant="h2" component="h2" style={{color: "#3f51b5", paddingBottom: "1.5rem"}}>
            About us | IIIT Tiruchirappalli
          </Typography>

          <Card variant="outlined">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={8}>
                <Card style={{border: "none", borderRadius: "0"}}>
                  <CardContent>
                    <Typography variant="subtitle1" style={{color: "#555555", textAlign: "left", lineHeight: "2"}}>
                      <Box component="span" fontWeight="fontWeightBold">Indian Institute of Information Technology Tiruchirappalli (IIITT)</Box>,
                      also known as
                      <Box component="span" fontWeight="fontWeightBold"> IIIT Trichy</Box>, is an Institute of National Importance and
                      one among the 19 IIITs proposed under the
                      <Box component="span" fontWeight="fontWeightBold"> non-profit Public-Private Partnership (PPP) Model by MHRD</Box>.
                      <br />
                      IIIT Tiruchirappalli is an academic and research institute fully funded by
                      <Box component="span" fontWeight="fontWeightBold"> Government of India</Box>,
                      <Box component="span" fontWeight="fontWeightBold"> Government of Tamil Nadu</Box> and
                      <Box component="span" fontWeight="fontWeightBold"> Industry Partners</Box> in the ratio of
                      <Box component="span" fontStyle="italic">50:35:15</Box>.
                      <br />
                      Industry partners include&nbsp;
                      <Link href="https://tcs.com">
                        Tata Consultancy Services(TCS)
                      </Link>,&nbsp;
                      <Link href="https://cognizant.com">
                        Cognizant Technology Solutions (CTS)
                      </Link>,&nbsp;
                      <Link href="https://infosys.com">
                        Infosys
                      </Link>,&nbsp;
                      <Link href="https://ramco.com">
                        Ramco Systems
                      </Link>,&nbsp;
                      <Link href="https://elcot.in">
                        ELCOT
                      </Link>,&nbsp;
                      <Link href="https://navitaslifesciences.com/">
                        Navitas (TAKE Solutions)
                      </Link>
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                    <Typography variant="subtitle1" style={{color: "#555555", textAlign: "left", lineHeight: "2"}}>
                      The focus is to address the challenges faced by the Indian IT industry and growth of the domestic IT market,
                      the Ministry of Human Resource Development(MHRD), Government of India has established
                      Indian Institute of Information Technology Tiruchirappalli on a Not-for-profit Public Private Partnership (N-PPP)
                      basis like 22 other IIITs.
                      <br />
                      A major objective in establishing IIIT Tiruchirappalli is to set up a model of education which can produce best-in-class
                      human resources in IT and harnessing the multidimensional facets of IT in various domains. While the number
                      of students produced would be small, the impact they create would be great.
                      <br />
                      IIIT Tiruchirappalli is operating in the temporary campus within the premises of National Institute of Technology (NIT) Campus,
                      Tiruchirappalli – 620 015, Tamil Nadu, since March 2016.&nbsp;
                      <Link href="https://nitt.edu">
                        NIT Tiruchirappalli
                      </Link>&nbsp;is
                      the mentor institution for IIIT Tiruchirappalli that provides academic and administrative support to the IIIT Tiruchirappalli. In future,
                      the permanent campus will be built at Sethurappatti Village, Srirangam Taluk, Tiruchirappalli District.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <br />
              <Grid container xs={12} sm={4} alignItems="center" direction="row">
                <img src={require("../../images/iiitt.jpg")} width="95%" />
              </Grid>
              </Grid>
            </Card>
            <Grid container style={{border: "0"}}>
              <Grid item xs={12} sm={8}>
                <Card style={{height: "100%", boxShadow: "none"}}>
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
              <Grid container xs={12} sm={4} alignItems="center" direction="column">
                <img src={require('../../images/logo.png')} width="60%" style={{marginTop: "1.2rem"}}/>
              </Grid>
            </Grid>
        </div>
        <Footer />
      </div>
    )
  }
}
