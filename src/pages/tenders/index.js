import React, { useEffect, useState } from 'react'
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  container: {
    padding: "1.5rem 1rem"
  },
  themeText: {
    color: "#3f51b5",
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "black",
  },
  notice_section: {
    padding: "0.5rem 0 2rem 0",
  },
  notice: {
    padding: "1rem 0.3rem",
    transition: "transform .2s",
    '&:hover': {
      background: "lemonchiffon",
    }
  }

})

export default function Notices() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerhtml = "Notices";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerhtml = "IIIT Trichy";
    };
  }, []);
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    import('../../json/tenders.json')
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
		Open Tender Notices
	      </Box>
	    </Typography>
	    {
	      notices&&notices.filter(ntc => ntc.open).map(notice => {
		return (
		  <a href={require(`../../docs/tenders/${notice.url}`)} download={`${notice.url}`} className={classes.link}>
		    <div className={classes.notice}>
		      <Typography>
			<Box className={classes.themeText}>
			  {notice.name}
			</Box>
			<Box>
			  {notice.description}
			</Box>
		      </Typography>
		    </div>
		  </a>
		)
	      })
	    }
	  </section>
	  <section className={classes.notice_section}>
	    <Typography variant="h5" className={classes.themeText}>
	      <Box component="span" fontWeight="fontWeightBold">
		Closed Tender Notices
	      </Box>
	    </Typography>
	    {
	      notices&&notices.filter(ntc => !ntc.open).map(notice => {
		return (
		  <a href={require(`../../docs/tenders/${notice.url}`)} download={`${notice.url}`} className={classes.link}>
		    <div className={classes.notice}>
		      <Typography>
			<Box className={classes.themeText}>
			  {notice.name}
			</Box>
			<Box>
			  {notice.description}
			</Box>
		      </Typography>
		    </div>
		  </a>
		)
	      })
	    }
	  </section>
	</Grid>
	<Grid xs={false} sm={1} item/>
      </Grid>
      <Footer />
    </>
  )
}
