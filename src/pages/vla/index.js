import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Card, Typography, Grid, Box, CardMedia, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MainCarousel from '../../components/carousel/index';
import Marquee from '../../components/marquee/index'
import carouselData from '../../json/homeCarousel.json'


export default function Vla(){
  return (
    <>
      <Navbar navbarSrc="vla_navbar.json" />
      <Grid container className={classes.container}>
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10} className="custom-grid">
	  <MainCarousel images={carouselData.data} className="carousel"/>
	  <Marquee className="announcements" />
	  <div className="about">
	  </div>
	  <div className="objectives">
	  </div>
	  <div className="institues">
	  </div>
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </>
  )
}
