import React, { useEffect, useState } from 'react'
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './styles.css'

const createStyles = makeStyles({
  container: {
    padding: "1.5rem 1rem"
  },
  themeText: {
    color: "#3f51b5",
  },
  link: {
    display: "inline-block",
    textDecoration: "none",
    color: "black",
  },
  notice_section: {
    padding: "0.5rem 0 2rem 0",
  },
  notice: {
    padding: "1rem 0rem 1rem 0.3rem",
    transition: "transform .2s",
    '&:hover': {
      background: "rgba(0,0,0, 0.15)",
    }
  }

})

export default function Notices() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Notices";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    import('../../json/notices.json')
      .then((data)=> {
	setNotices(data.data)
      })
  }, [])

  const classes = createStyles();

  const date = new Date();

  return (
    <>
      <Navbar />
      <Grid container className={classes.container}>
	<Grid xs={false} sm={1} item/>
	<Grid xs={12} sm={10} item>
	  <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
	    <Box component="span" fontWeight={380}>
	      Notices
	    </Box>
	  </Typography>
	  <section className={classes.notice_section}>
	    <Typography variant="h5" className={classes.themeText}>
	      <Box component="span" fontWeight="fontWeightBold">
		New Notices
	      </Box>
	    </Typography>
	    <ul className="doclist">
	      {
		notices&&notices.filter(ntc => {
		  const d = new Date(ntc.date)
		  return Math.ceil(Math.abs(d-date) / (1000*60*60*24)) <= 31
		}).map(notice => {
		  return (
		    <li>
		      <a href={require(`../../docs/notices/${notice.link}`)} download={`${notice.link}`} className={classes.link}>
			<div className={classes.notice}>
			  <Typography>
			    <Typography variant="caption" color="textSecondary" gutterBottom>
			      Posted on:{notice.date}
			    </Typography>
			    <Box className={classes.themeText}>
			      {notice.title}
			    </Box>
			    <Box>
			      {notice.description}
			    </Box>
			  </Typography>
			</div>
		      </a>
		    </li>
		  )
		})
	      }
	    </ul>
	  </section>
	  <section className={classes.notice_section}>
	    <Typography variant="h5" className={classes.themeText}>
	      <Box component="span" fontWeight="fontWeightBold">
		Old Notices
	      </Box>
	    </Typography>
	    <ul className="doclist">
	      {
		notices&&notices.filter(ntc => {
		  const d = new Date(ntc.date)
		  return Math.ceil(Math.abs(d-date) / (1000*60*60*24)) > 30
		}).map(notice => {
		  return (
		    <li>
		      <a href={require(`../../docs/notices/${notice.link}`)} download={`${notice.link}`} className={classes.link}>
			<div className={classes.notice}>
			  <Typography>
			    <Typography variant="caption" color="textSecondary" gutterBottom>
			      Posted on:{notice.date}
			    </Typography>
			    <Box className={classes.themeText}>
			      {notice.title}
			    </Box>
			    <Box>
			      {notice.description}
			    </Box>
			  </Typography>
			</div>
		      </a>
		    </li>
		  )
		})
	      }
	    </ul>
	  </section>
	</Grid>
	<Grid xs={false} sm={1} item/>
      </Grid>
      <Footer />
    </>
  )
}
