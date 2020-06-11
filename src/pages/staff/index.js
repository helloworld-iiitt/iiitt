import React, { useEffect } from 'react'
import Navbar from './../../components/navbar/index'
import Footer from "./../../components/footer/index";
import { Grid, Typography } from "@material-ui/core";
import PersonCard from '../../components/person_card/index'
import { makeStyles } from '@material-ui/core/styles'

const staff_data = require('../../json/staff.json').data

const useStyle = makeStyles({
  title: {
    color: '#3f51b5',
    paddingTop: '0.5rem'
  }
})

export default function Staff() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Staff";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const classes = useStyle()

  return (
    <>
      <Navbar />
      <Grid container>
	<Grid item xs={false} sm={1} />
	<Grid container item xs={12} sm={10}>
	  <Grid item xs={12} sm={10}>
	    <Typography variant="h2" gutterBottom className={classes.title}>
	      Office staff
	    </Typography>
	  </Grid>>
	  {
	    staff_data.map( staff => {
	      const { name, designation, emailID, src } = staff
	      return (
		<>
		  <Grid item xs={12} sm={6}>
		    <PersonCard
		      name={name}
		      designation={designation}
		      emailID={emailID}
		      src={src}
		      src_type='staff'
		      researchArea=''
		    />
		  </Grid>
		</>
	      )
	    })
	  }
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </>
  );
}
