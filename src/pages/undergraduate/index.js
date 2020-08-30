import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem"
  },
  themeText: {
    color: "#3f51b5",
  },
  text: {
    fontSize: "1.3rem",
  },
  subText: {
    fontSize: "1.2rem"
  },
  list: {
    listStylePosition: "inside",
    marginBottom: "1rem"
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "500",
    width: "auto",
    '&:hover': {
      textTecoration: "underline",
      color: "blueviolet"
    }
  },
  download: {
    marginRight: "0.3rem",
    position: "relative",
    top: "0.3rem"
  }
})

export default function Undergraduate() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Undergraduate";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const classes = createStyles()
  const file = 'A3.UGRegulations.pdf'

  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10} >
	  <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
	    <Box component="span" fontWeight={380}>
	      Undergraduate (B. Tech.)
	    </Box>
	  </Typography>
	  <Typography className={classes.text} gutterBottom>
	    The admission to Undergraduate Programs is done through JEE Mains. The JEE-Mains qualified candidates are admitted to UG program through Centralized Seat Allocation Board (CSAB) and Joint Seat Allocation Authority (JoSAA) following the reservation policy of Government of India.
	  </Typography>
	  <Typography className={classes.text} gutterBottom>
	    IIIT Trichy offers the following two&nbsp;
	    <Box component="span" fontWeight="fontWeightBold">
	      Undergraduate Programs
	    </Box>:
	  </Typography>
	  <ul className={classes.list}>
	    <li><Box component="span" fontWeight="fontWeightBold" className={classes.subText}>
	      Computer Science and Engineering (4 years, Bachelor of Technology)
	    </Box></li>
	    <li><Box component="span" fontWeight="fontWeightBold" className={classes.subText}>
	      Electronics and Communication Engineering (4 years, Bachelor of Technology)
	    </Box></li>
	  </ul>
	  <Typography variant="h5" className={classes.themeText} gutterBottom>
	    <Box component="span" fontWeight="fontWeightBold">
	      Rules and Regulations for B.Tech.(CSE/ECE/IT)
	    </Box>
	  </Typography>
	  <a href={require(`../../docs/${file}`)} download={`${file}`} className={`${classes.link} ${classes.subText}`}>
	    <img src={require('../../images/news-icon.svg')} className={classes.download} />
	    Rules and Regulations
	  </a>
	</Grid>
      </Grid>
      <Footer />
    </div>
  )
}
