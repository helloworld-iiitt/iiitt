import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Grid, Typography, Table, TableHead, TableCell, TableBody, TableContainer, Paper, Box, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem"
  },
  themeText: {
    color: "#3f51b5",
  },
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
  tableHead: {
    background: "#3f51b5",
  },
  th: {
    color: "white",
    fontSize: "1.5rem"
  },
  td: {
    fontSize: "1.3rem"
  }
})

export default function GenderData() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Fee Structure";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const [genderData, setGenderData] = useState(undefined);
  useEffect(() => {
    import('../../json/genderdata.json')
      .then((data)=> {
	setGenderData(data)
      })
  }, [])

  const classes = createStyles()
  return (
    <>
      <Navbar />
      <Grid container className={classes.container}>
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10} >
	  <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
	    <Box component="span" fontWeight={380}>
	      Gender wise Data
	    </Box>
	  </Typography>
	  <TableContainer component={Paper}>
	    <Table>
	      <TableHead className={classes.tableHead}>
		<TableRow>
		  <TableCell className={classes.th} align="center">
		    Name of IIIT
		  </TableCell>
		  <TableCell className={classes.th} colspan="4" align="center">
		    Enrolment in Tertiary Education
		  </TableCell>
		  <TableCell className={classes.th} colspan="4" align="center">
		    Professional and Technical Workers
		  </TableCell>
		</TableRow>
	      </TableHead>
	      <TableBody>
		<TableRow>
		  <TableCell rowspan="4" className={classes.td} align="center">
		    IIIT TIRUCHIRAPPALLI
		  </TableCell>
		  <TableCell colspan="4" className={classes.td} align="center">
		    B.Tech.
		  </TableCell>
		  <TableCell colspan="4" className={classes.td} align="center">
		    Faculty
		  </TableCell>
		</TableRow>
		<TableRow>
		  <TableCell colspan="2" className={classes.td} align="center">
		    CSE
		  </TableCell>
		  <TableCell colspan="2" className={classes.td} align="center">
		    ECE
		  </TableCell>
		  <TableCell colspan="2" className={classes.td} align="center">
		    Regular
		  </TableCell>
		  <TableCell colspan="2" className={classes.td} align="center">
		    Temporary
		  </TableCell>
		</TableRow>
		<TableRow>
		  <TableCell className={classes.td}>
		    Boys
		  </TableCell>
		  <TableCell>
		    Girls
		  </TableCell>
		  <TableCell className={classes.td}>
		    Boys
		  </TableCell>
		  <TableCell className={classes.td}>
		    Girls
		  </TableCell>
		  <TableCell className={classes.td}>
		    Male
		  </TableCell>
		  <TableCell className={classes.td}>
		    Female
		  </TableCell>
		  <TableCell className={classes.td}>
		    Male
		  </TableCell>
		  <TableCell className={classes.td}>
		    Female
		  </TableCell>
		</TableRow>
		<TableRow>
		  <TableCell className={classes.td}>
		    {genderData ? genderData.btech.cse.boys : "Loading..."}
		  </TableCell>
		  <TableCell className={classes.td}>
		    {genderData ? genderData.btech.cse.girls : "Loading..."}
		  </TableCell>
		  <TableCell className={classes.td}>
		    {genderData ? genderData.btech.ece.boys : "Loading..."}
		  </TableCell>
		  <TableCell className={classes.td}>
		    {genderData ? genderData.btech.ece.girls : "Loading..."}
		  </TableCell>
		  <TableCell className={classes.td}>
		    {genderData ? genderData.faculty.regular.male : "Loading..."}
		  </TableCell>
		  <TableCell className={classes.td}>
		    {genderData ? genderData.faculty.regular.female : "Loading..."}
		  </TableCell>
		  <TableCell className={classes.td}>
		    {genderData ? genderData.faculty.temporary.male : "Loading..."}
		  </TableCell>
		  <TableCell className={classes.td}>
		    {genderData ? genderData.faculty.temporary.female : "Loading..."}
		  </TableCell>
		</TableRow>
	      </TableBody>
	    </Table>
	  </TableContainer>
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </>
  )
}
