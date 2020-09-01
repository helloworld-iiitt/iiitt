import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Card, Typography, Divider, Grid, Box, CardMedia, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import './styles.css'

const createStyles = makeStyles({
  link: {
    textDecoration: "none",
    display: "inline-block",
    paddingTop: "1rem",
    fontWeight: "500",
    width: "auto",
    '&:hover': {
      textDecoration: "underline",
      color: "blueviolet"
    }
  },
  infocard: {
    margin: "1rem",
    padding: "0 1rem 1rem 1rem"
  }
})

export default function VlaRegistration(){
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "VLA | Registration";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const classes = createStyles()
  return (
    <div className="page-container">
      <Navbar src="vla_navbar.json" homeRoute="/vla"/>
      <Grid container className="container">
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10}>
	  <Card className={classes.infocard}>
	    <a href="/vla_registration_info" className={classes.link}>
	      <Typography component="h2" gutterBottom>
		Register here to attend a virtual workshop online
	      </Typography>
	    </a>
	    <Typography className="description">
	      Fill up the form with your details to register for the upcoming workshops
	    </Typography>
	  </Card>
	  <Card className={classes.infocard}>
	    <a href="/vla_workshop_proposal_terms" className={classes.link}>
	      <Typography component="h2" gutterBottom>
		Apply online to conduct a virtual workshop through us
	      </Typography>
	    </a>
	    <Typography className="description">
	      Fill up the form with the details of the workshop, to raise a request to conduct a virtual workshop through us
	    </Typography>
	  </Card>
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  )
}
