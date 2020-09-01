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
    height: "13rem",
    width: "13rem",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid #3f51b5",
    borderRadius: "4px",
  },
  card: {
    padding: "1rem",
  }
})

export default function AdmissionContact() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Contact";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const [admissionIncharge, setAdmissionIncharge] = useState(undefined);
  useEffect(() => {
    import('../../json/admission_contact.json')
      .then((data)=> {
	setAdmissionIncharge(data)
      })
  }, [])
  const classes = createStyles()
  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10} >
	  <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
	    <Box component="span" fontWeight={380}>
	      Contact Details of Admission Incharge
	    </Box>
	  </Typography>
	  <Typography variant="subtitle1" gutterBottom>
	    For Admission related queries, contact Admission Incharge of IIIT Trichy.
	  </Typography>
	  <br />
	  <Grid item xs={12} sm={4}>
	    {admissionIncharge&&<Card className={classes.card}>
	      <Grid container>
		<Grid item xs={12} >
		  <CardMedia
		    className={classes.media}
		    image={require(`../../images/${admissionIncharge.image}`)}
		    title="Admission Incharge"
		  />
		</Grid>
		<CardContent>
		  <Typography variant="body" gutterBottom>
		    <Box component="span" fontSize="1.5vw" gutterBottom>
		      {admissionIncharge.name}
		    </Box>
		    <br />
		    <Box fontSize="1rem">
		      {admissionIncharge.designation}
		    </Box>
		    <br />
		    <a href={`mailto:${admissionIncharge.emailID}`}>
		      {admissionIncharge.emailID}
		    </a>
		    {
		      admissionIncharge.emailIDSecondary.trim() !== "" &&
			<>
			  ,&nbsp;
			  <a href={`mailto:${admissionIncharge.emailID}`}>
			    {admissionIncharge.emailIDSecondary}
			  </a>
			</>

		    }
		    <br />
		    <a href={`tel:${admissionIncharge.mobileNo}`}>
		      {admissionIncharge.mobileNo}
		    </a>
		    <br />
		    <a href={`fax:${admissionIncharge.fax}`}>
		      {admissionIncharge.fax}
		    </a>
		    <br />
		  </Typography>
		</CardContent>
	      </Grid>
	    </Card>}
	  </Grid>
	</Grid>
      </Grid>
      <Footer />
    </div>
  )
}
