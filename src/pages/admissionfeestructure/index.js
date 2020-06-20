import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import IFrame from '../../components/iframe/index'
import { PDFReader, MobilePDFReader } from 'reactjs-pdf-reader'
import { Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import './style.css'

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem"
  },
  themeText: {
    color: "#3f51b5",
  }, 
  paper: {
    padding: "0.7rem",
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
  sectionText: {
    paddingTop:"0",
  },
  sectionPadding: {
    padding: "1rem 0",
  },
  desktop: {
    display: "none !important",
  }
})

export default function AdmissionFeeStructure() {
  var [show, setShow] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 600) setShow(true)
    else setShow(false)
  }, [])
  const classes = createStyles()
	return (
		<>
      <Navbar />
      <Grid container>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10} >
          <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
            <Box component="span" fontWeight={380}>
              Fee Structure
            </Box>
          </Typography>
          {/* <IFrame title="PDF" src="https://docs.google.com/gview?url=http://iiitt.ac.in/downloads/notices/Fee%20Structure%202019-20.pdf&embedded=true" style={{width:"100%", height:"500px"}}>
            <></>
          </IFrame> */}
          {show && <PDFReader url={require('../../docs/Fee Structure 2019-20.pdf')} />}
          {!show && <MobilePDFReader url={require('../../docs/Fee Structure 2019-20.pdf')} style={{width: "100%"}} scale={1.5}/>}
        </Grid>
      </Grid>
      <Footer />
    </>
	)
}