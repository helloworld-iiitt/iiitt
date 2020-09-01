import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Card, Typography, Divider, Grid, Box, CardMedia, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MainCarousel from '../../components/carousel/index';
import Marquee from '../../components/marquee/index'
import carouselData from '../../json/homeCarousel.json'
import './styles.css'

export default function Vla(){
  return (
    <div className="page-container">
      <Navbar src="vla_navbar.json" homeRoute="/vla"/>
      <Grid container className="container">
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10} className="custom-grid">
	  <div className="carousel">
	    <MainCarousel images={carouselData.data}/>
	  </div>
	  <div className="announcements">
	    <Marquee src="announcements.json"/>
	  </div>
	  <Card className="about">
	    <span className="newshead cardTitle">About the academy</span>
	    <CardContent>
	      The MHRD, Govt. of India has initiated to bring awareness among faculty and administrators on online teaching methods. To empower the faculty to transform themselves seamlessly from a closed classroom environment to a distributed networked environment online. Proper assessment methods.
	      <Divider />
	      This academy not only train the teachers on delivering lectures through online but also on developing suitable innovative assessment methods for their students. The handholding of the faculty will be continuing beyond training period to ensure that the trained faculty is self sufficient to demonstrate the acquired skills. It is envisaged that this academy will be able to empower around 5000 participants in the coming year by adopting multi level training model i.e. each successful participant of the academy in turn will train 50 – 500 more faculty members of his/her institute and others in the neighborhood.
	    </CardContent>
	  </Card>
	  <Card className="objectives">
	    <span className="newshead cardTitle">Objectives</span>
	    <CardContent>
	      To empower faculty to transform from class room teaching to online teaching and beyond
	      <Divider />
	      To facilitate the faculty to adopt learning management systems
	      <Divider />
	      To train and make them ready to use online tools for student centric learning methods and proctor based assessment.
	      <Divider />
	      To facilitate industry professionals to accelerate active participation remotely through delivery of lectures in emerging areas and collaborate in assessments and policy making.
	      <Divider />
	      To facilitate the administrators to use the dashboard designed to observe the academic activities at any given time to make data based decisions.
	    </CardContent>
	  </Card>
	  <Card className="institues">
	    <span className="newshead cardTitle">About the institues</span>
	    <CardContent>
	      Indian Institute of Information Technology, Design and Manufacturing Kurnool (IIITDM Kurnool), fully funded by MHRD was announced in 2014 after receiving the assent of President of India to the Institutes of Information Technology Act, 2014. IIITDM Kurnool launched its academic program with the support of its mentor Institute, IIITDM Kancheepuram, in August 2015 from the Kancheepuram campus. Consequent to the approval of parliament, IIITDM Kurnool was accorded the status of the Institute of National Importance by making an amendment in the IIIT act 2014 on August 03, 2017.
	      <Divider />
	      Indian Institute of Information Technology Tiruchirappalli (IIITT), also known as IIIT Trichy, is an Institute of National Importance and one among the 19 IIITs proposed under the non-profit Public-Private Partnership (PPP) Model by MHRD. IIITT is an academic and research institute fully funded by Government of India, Government of Tamil Nadu and Industry Partners in the ratio of 50:35:15.
	    </CardContent>
	  </Card>
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  )
}
