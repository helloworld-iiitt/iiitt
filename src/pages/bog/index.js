import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Card, Typography, Grid, Box, CardMedia, CardContent, Paper } from '@material-ui/core'
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
  download: {
    position: "relative",
    top: "3px",
    marginRight: "5px"
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "rgba(0,0,0,0.10)"
    }
  },
  tableHead: {
    fontWeight: "900",
    backgroundColor: "#3f51b5",
    color: "white"
  },
  table: {
    marginBottom: "1.5rem"
  },
})

export default function AdmissionContact() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "BoG";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const [bog, setBog] = useState(undefined);
  const [bogMeeting, setBogMeeting] = useState(undefined);
  useEffect(() => {
    import('../../json/bog.json')
      .then((data)=> {
	setBog(data.data)
      })
    import('../../json/bogMeeting.json')
      .then(data => setBogMeeting(data.data))
  }, [])

  const classes = createStyles()
  var ctr = 0
  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10} >
	  <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
	    <Box component="span" fontWeight={380}>
	      Board of Governors (BoG)
	    </Box>
	  </Typography>
	  <Typography variant="subtitle1" gutterBottom className={classes.title}>
	    <Box component="h3" gutterBottom className={classes.themeText}>
	      Members of Board of Governors (BoG)
	    </Box>
	  </Typography>
	  {
	    bog&&
	      <TableContainer component={Paper} className={classes.table} gutterBottom>
		<Table>
		  <TableHead>
		    <TableRow>
		      <TableCell className={`${classes.tableHead} ${classes.tableCell}`}>
			S. No.
		      </TableCell>
		      <TableCell className={`${classes.tableHead} ${classes.tableCell}`}>
			Name
		      </TableCell>
		      <TableCell className={`${classes.tableHead} ${classes.tableCell}`}>
			Designation
		      </TableCell>
		    </TableRow>
		  </TableHead>
		  <TableBody>
		    {bog.map(gov => {
		      ctr++
		      return (
			<TableRow className={classes.tableRow}>
			  <TableCell className={classes.tableCell}>
			    {ctr}
			  </TableCell>
			  <TableCell className={classes.tableCell}>
			    {gov.name}
			  </TableCell>
			  <TableCell className={classes.tableCell}>
			    {gov.designation}
			  </TableCell>
			</TableRow>
		      )
		    })}
		  </TableBody>
		</Table>
	      </TableContainer>
	  }
	  <Typography className={classes.themeText}>
	    <Box component="h3" fontWeight="fontWeightBold" className={classes.title}>
	      BoG Meeting
	    </Box>
	  </Typography>
	  {
	    bogMeeting&&
	      bogMeeting.map(meet => {
		return (
		  <section>
		    <a href={require(`../../docs/${meet.path}`)} download={meet.title} className={classes.link}>
		      <Typography className={`${classes.link} ${classes.themeText}`} gutterBottom>
			<img src={require('../../images/news-icon.svg')} className={classes.download}/>
			<Box component="span" className={classes.meetingTitle}>
			  {meet.title}
			</Box>
		      </Typography>
		    </a>
		    <Typography gutterBottom>
		      {meet.description}
		    </Typography>
		  </section>
		)
	      })
	  }
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  )
}
