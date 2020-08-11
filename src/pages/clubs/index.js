import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Paper, Typography, Grid, Box, Table, TableBody, TableHead, TableCell, TableContainer, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem"
  },
  themeText: {
    color: "#3f51b5",
  },
  sectionPadding: {
    padding: "1rem 0"
  },
  title: {
    fontSize: "1.5rem"
  },
  text: {
    fontSize: "1.2rem"
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
  tableCell: {
    fontSize: "1.2rem"
  },
  table: {
    width: "75%"
  }

})

export default function Clubs() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Festivals";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const [clubs, setClubs] = useState(undefined)

  useEffect(() => {
    import('../../json/clubs.json')
      .then((data)=> {
	setClubs(data.data)
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
	      Clubs
	    </Box>
	  </Typography>
	  {
	    clubs&&clubs.map(club => {
	      return (
		<section className={classes.sectionPadding}>
		  <Typography variant="h5" className={classes.themeText} gutterBottom>
		    <Box component="span" fontWeight="fontWeightBold">
		      {club.name}
		    </Box>
		  </Typography>
		  <Typography gutterBottom>
		    <Box component="span" className={classes.text} fontStyle="oblique">
		      {club.motto}
		    </Box>
		  </Typography>
		  <Typography gutterBottom>
		    <Box component="span" fontWeight="fontWeightBold" className={classes.text}>
		      Faculty Incharge: {club.facultyIncharge}
		    </Box>
		  </Typography>
		  <TableContainer component={Paper} className={classes.table}>
		    <Table>
		      <TableHead>
			<TableRow>
			  {
			    club.header.map(head => {
			      return (
				<TableCell className={`${classes.tableCell} ${classes.tableHead}`}>
				  {head}
				</TableCell>
			      )
			    })
			  }
			</TableRow>
		      </TableHead>
		      <TableBody>
			{
			  club.students.map(student => {
			    return (
			      <TableRow className={classes.tableRow}>
				<TableCell className={classes.tableCell}>
				  {student.year}
				</TableCell>
				<TableCell className={classes.tableCell}>
				  {student.name}
				</TableCell>
				{
				  student.game&&<TableCell className={classes.tableCell}>
				    {student.game}
				  </TableCell>
				}
			      </TableRow>
			    )
			  })
			}
		      </TableBody>
		    </Table>
		  </TableContainer>
		</section>
	      )
	    })
	  }
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </>
  )
}
