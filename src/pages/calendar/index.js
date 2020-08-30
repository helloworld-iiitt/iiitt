import React, { useState, useEffect } from 'react'
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
  sectionPadding: {
    padding: "1rem 0",
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

export default function Calendar() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Calendar";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const [data, setData] = useState(undefined)

  useEffect(() => {
    import('../../json/calendar.json')
      .then((data)=> {
	setData(data.data)
      })
  }, [])

  const classes = createStyles()

  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
	<Grid xs={false} sm={1} item/>
	<Grid xs={12} sm={10} item>
	  <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
	    <Box component="span" fontWeight={380}>
	      Academic Calendar
	    </Box>
	  </Typography>
	  {
	    data&&data.map((d, id) => {
	      return (
		<>
		  <section className={classes.sectionPadding}>
		    <Typography variant="h5" className={classes.themeText}>
		      <Box component="span" fontWeight="fontWeightBold">
			{d.title}
		      </Box>
		    </Typography>
		    {
		      (d.data).map(dd =>
			<a href={require(`../../docs/${dd.url}`)} download={`${dd.title}`} className={classes.link}>
			  <img src={require("../../images/news-icon.svg")} className={classes.download} />
			  {dd.title}
			</a>
		      )
		    }
		  </section>
		  {
		    id!=data.length-1&&<hr />
		  }
		</>
	      )
	    })
	  }
	</Grid>
	<Grid xs={false} sm={1} item/>
      </Grid>
      <Footer />
    </div>
  )
}
