import React, { useEffect } from 'react'
import Iframe from 'react-iframe'
import { Grid } from '@material-ui/core'
import './styles.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function VlaAttend() {
  useEffect(() => {
    document.getElementsByTagName('title')[0].innerHTML = "VLA | Attend"
  }, [])

  useEffect(() => {
    return ( () => {
      document.getElementsByTagName('title')[0].innerHTML = "IIIT Trichy"
    })
  }, [])

  return (
    <div className="page-container">
      <Navbar src="vla_navbar.json" homeRoute="/vla"/>
      <Grid container className="container">
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10}>
	  <Iframe src="http://vlaregister.iiitt.ac.in/participants/add" width="1200" height="2100" frameBorder="0" marginHeight="0" marginWidth="0">Loading..Loading...</Iframe>
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  )
}
