import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Card, Typography, Grid, Box, CardMedia, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem"
  },
  themeText: {
    color: "#3f51b5",
  },
  link: {
    display: "inline-block",
    paddingTop: "1rem",
    fontWeight: "500",
    width: "auto",
    '&:hover': {
      textDecoration: "underline",
      color: "blueviolet"
    }
  },
  media: {
    height: "15rem",
    width: "13rem",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid #3f51b5",
    borderRadius: "4px",
  },
  card: {
    padding: "1.5rem",
  },
  info: {
    margin: "0 auto"
  },
  text: {
    fontSize: "1.3rem",
    lineHeight: "1.5"
  }
})

export default function Director() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Administration";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const classes = createStyles()
  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10} >
	  <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
	    <Box component="span" fontWeight={380}>
	      Deputy Registrar, IIIT Trichy
	    </Box>
	  </Typography>
	  <br />
	  <Grid item xs={12} sm={4} className={classes.info}>
	    <Card className={classes.card}>
	      <CardMedia
		className={classes.media}
		image={require(`../../images/vittoba.jpeg`)}
		title="Deputy Registrar"
	      />
	      <CardContent>
		<Typography variant="body" gutterBottom>
		  <Box component="span" fontSize="2rem" gutterBottom>
		    Shri. N. VITTOBA
		  </Box>
		  <br />
		  <Box fontSize="1.3rem">
		    Deputy Registrar
		    <br />
		    IIIT Tiruchirappalli
		  </Box>
		  <br />
		  <a href={`mailto:drv@iiitt.ac.in`} fontSize="1.2rem">
		    drv@iiitt.ac.in
		  </a>
		  <br />
		  <a href={`tel:94458 23121`} fontSize="1.2rem">
		    94458 23121
		  </a>
		  <br />
		  <br />
		</Typography>
	      </CardContent>
	    </Card>
	  </Grid>
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  )
}
