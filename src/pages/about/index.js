import React from "react";
import Navbar from "../../components/navbar/index";
import MissionVision from "../../components/mission_vision/";
import Footer from "../../components/footer/";
import './style.css'
import {
  Grid,
  Typography,
  Card,
  Divider,
  CardContent,
  Box,
  Link,
} from "@material-ui/core";

export default class About extends React.Component {
  componentWillUnmount() {
    document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
  }

  componentDidMount() {
    document.getElementsByTagName("title")[0].innerHTML =
      "About Us | IIIT Tiruchirappalli";
  }

  render() {
    const bull = <span>•</span>;
    return (
      <div className="page-container">
        <Navbar />
        <div className="parent">
          <Typography
            variant="h2"
            component="h2"
            style={{ color: "#2e8b57", paddingBottom: "1.5rem",marginTop:"40px",textAlign:"center" }}
          >
            About us | IIIT Tiruchirappalli
            
          </Typography>
          

         
            
              
                <Card style={{ border: "none", borderRadius: "0" ,boxShadow:"none",overflow:"visible"}} id="main_card">
                  <div className="logo_cotainer">
                    <img src={require("../../images/logo.png")}  />
                  </div>  
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#555555",
                        textAlign: "left",
                        lineHeight: "2",
                      }}
                    >
                      <Box component="span" fontWeight="fontWeightBold">
                        Indian Institute of Information Technology
                        Tiruchirappalli (IIITT)
                      </Box>
                      , also known as
                      <Box component="span" fontWeight="fontWeightBold">
                        {" "}
                        IIIT Trichy
                      </Box>
                      , is an Institute of National Importance and one among the
                      19 IIITs proposed under the
                      <Box component="span" fontWeight="fontWeightBold">
                        {" "}
                        non-profit Public-Private Partnership (PPP) Model by
                        MHRD
                      </Box>
                      .
                      IIIT Tiruchirappalli is an academic and research institute
                      fully funded by
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
                      .
                      <br />
                      <Grid item xs={12} sm={8}>
              <Card style={{ height: "100%", boxShadow: "none" }}>
                <CardContent id="mission-vision">
                  <Typography variant="h5" style={{ color: "#2e8b57" }}>
                    Vision
                  </Typography>
                  <Divider style={{ margin: "0.2rem 0 1rem 0px" }} />
                  <Typography color="textSecondary">
                    To achieve "World Class Excellence in Information and
                    Communication Technology".
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
                      <Box component="span" fontWeight="fontWeightBold">
                        {" "}
                        Industry Partners include:
                      </Box>{" "} &nbsp;
                      <Link href="https://www.tcs.com/" target="_blank">
                        Tata Consultancy Services(TCS)
                      </Link>
                      &nbsp;
                      <Link href="https://www.cognizant.com/" target="_blank">
                        Cognizant Technology Solutions (CTS)
                      </Link>
                      &nbsp;
                      <Link href="https://www.infosys.com/" target="_blank">Infosys</Link>&nbsp;
                      <Link href="https://www.ramco.com/" target="_blank">Ramco Systems</Link>&nbsp;
                      <Link href="https://elcot.in" target="_blank">ELCOT</Link>&nbsp;
                      <Link href="https://www.navitaslifesciences.com/" target="_blank">
                        Navitas (TAKE Solutions)
                      </Link>
                    </Typography>
                    <br />
                    <Divider />
                    <br />
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "#555555",
                        textAlign: "left",
                        lineHeight: "2",
                      }}
                    >
                      The focus is to address the challenges faced by the Indian
                      IT industry and growth of the domestic IT market, the
                      Ministry of Human Resource Development(MHRD), Government
                      of India has established Indian Institute of Information
                      Technology Tiruchirappalli on a Not-for-profit Public
                      Private Partnership (N-PPP) basis like 21 other IIITs.
                      <br />
                      A major objective in establishing IIIT Tiruchirappalli is
                      to set up a model of education which can produce
                      best-in-class human resources in IT and harnessing the
                      multidimensional facets of IT in various domains. While
                      the number of students produced would be small, the impact
                      they create would be great.
                      <br />
                      IIIT Tiruchirappalli is operating in the temporary campus 
                      within the premises of Oxford Engineering College campus, 
                      Tiruchirappalli - 620 009, Tamil Nadu from mid-July 2020. 
                      Before that IIIT Trichy was operating in the temporary campus 
                      within the premises of National Institute of Technology (NIT) Campus, 
                      Tiruchirappalli – 620 015, Tamil Nadu, since March 2016.&nbsp;
                      <Link href="https://nitt.edu">NIT Tiruchirappalli</Link>
                      &nbsp;is the mentor institution for IIIT Tiruchirappalli
                      that provides academic and administrative support to the
                      IIIT Tiruchirappalli. In future, the permanent campus will
                      be built at Sethurappatti Village, Srirangam Taluk,
                      Tiruchirappalli District.
                    </Typography>
                 
                </Card>
           
              <br />
              
            
         
        </div>
        <Footer />
      </div>
    );
  }
}
