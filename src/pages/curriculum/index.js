import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Typography, Grid, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem"
  },
  themeText: {
    color: "#3f51b5",
  },
  sectionPadding: {
    padding: "1rem 0",
  },
  list: {
    listStylePosition: "inside",
    paddingLeft: "1rem",
    '& li': {
      fontSize: "1.2em"
    }
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "rgba(0,0,0,0.10)"
    }
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
  download: {
    marginRight: "0.3rem",
    position: "relative",
    top: "0.3rem"
  }
})

export default function Cirriculum() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Cirriculum";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const classes = createStyles()

  const cse15 = 'Curriculum_IIITTUGCSE15.pdf'
  const cse16 = 'CSE_Syllabus_16.pdf'
  const ece15 = 'Curriculum_IIITTUGECE15.pdf'
  const ece16 = 'Syllabus_ECE_16.pdf'

  return (
    <>
      <Navbar />
      <Grid container className={classes.container}>
	<Grid item xs={false} sm={1} />
	<Grid item xs={12} sm={10} >
	  <Typography variant="h2" component="h2" gutterBottom className={{...classes.themeText}} className={classes.themeText}>
	    <Box component="span" fontWeight={380}>
	      Cirriculum
	    </Box>
	  </Typography>

	  <section className={classes.sectionPadding} >
	    <Typography variant="h5" gutterBottom>
	      The&nbsp;
	      <Box component="span" fontWeight="fontWeightBold">
		Undergraduate Program Curriculum
	      </Box>&nbsp;has the following components:
	    </Typography>
	    <ul className={classes.list}>
	      <li>Program Core Courses</li>
	      <li>Programming Elective Courses</li>
	      <li>Open Elective Courses</li>
	      <li>Self Study/Online Courses</li>
	      <li>Minor Courses</li>
	      <li>Honours Courses</li>
	      <li>Internship</li>
	      <li>Project Work</li>
	    </ul>
	    <Typography className={classes.sectionPadding}>
	      <Box component="span" fontSize="1.2em">
		Relative grading is used to assess the performance of the students.
		<Box component="span" fontWeight="fontWeightBold">
		  The Undergraduate Program Curriculum and Syllabus is similar to NIT Trichy.
		</Box>
	      </Box>
	    </Typography>
	    <Typography className={classes.sectionPadding}>
	      <Box component="span" fontSize="1.2em">
		The curriculum for all the programs have been framed after extensive deliberations and discussions with IITs, NITs, IIITs, and Anna University and other reputed Institute faculty members and Industry stake holders.
	      </Box>
	    </Typography>
	    <Typography className={classes.sectionPadding}>
	      <Box component="span" fontSize="1.2em">
		The students may undergo internship from research labs CSIO - CSIR, CECRI – CSIR, IGCAR, and industries such as Navitas (TAKE Solutions), Compegence, Sanspareil, Infomak, Zod, etc.
		<br />
		The students and faculty are encouraged to publish research papers in International Journals, International Conferences, and National Conferences.
		<br />
		In IIIT Trichy, all the core theory courses are supplemented with laboratory exercises / mini projects / case studies. The curriculum is manipulated to make the students industry-ready, and is customized to suit the conditions prevailing in the industry by providing internal or external industry participation.
	      </Box>
	    </Typography>
	    <Typography className={classes.sectionPadding}>
	      <Box component="span" fontSize="1.2em">
		With the kind of support IIITT has with reputed industry partners and other software industries, this unique course should be able to meet the requirements of ‘industrial ready’ students coming out of IIITs as envisaged in our objective.
	      </Box>
	    </Typography>
	  </section>
	  <section className={classes.sectionPadding}>
	    <Typography variant="h5" className={classes.themeText} gutterBottom>
	      <Box component="span" fontWeight="fontWeightBold">
		Syllabus
	      </Box>
	    </Typography>
	    <Table>
	      <TableRow className={classes.tableRow}>
		<TableCell>
		  Computer Science and Engineering
		</TableCell>
		<TableCell>
		  <a href={require(`../../docs/${cse15}`)} download={`${cse15}`} className={classes.link}>
		    <img src={require('../../images/news-icon.svg')} className={classes.download}/>
		    2015
		  </a>
		</TableCell>
		<TableCell>
		  <a href={require(`../../docs/${cse15}`)} download={`${cse16}`} className={classes.link}>
		    <img src={require('../../images/news-icon.svg')} className={classes.download}/>
		    2016 Onwards
		  </a>
		</TableCell>
	      </TableRow>
	      <TableRow className={classes.tableRow}>
		<TableCell>
		  Electronics and Communication Engineering
		</TableCell>
		<TableCell>
		  <a href={require(`../../docs/${cse15}`)} download={`${ece15}`} className={classes.link}>
		    <img src={require('../../images/news-icon.svg')} className={classes.download}/>
		    2015
		  </a>
		</TableCell>
		<TableCell>
		  <a href={require(`../../docs/${cse15}`)} download={`${ece16}`} className={classes.link}>
		    <img src={require('../../images/news-icon.svg')} className={classes.download}/>
		    2016 Onwards
		  </a>
		</TableCell>
	      </TableRow>
	    </Table>
	  </section>
	</Grid>
      </Grid>
      <Footer />
    </>
  )
}
