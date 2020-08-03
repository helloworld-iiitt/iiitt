import React, { useEffect, useState } from 'react'
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem"
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
    padding: "2rem 0",
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
  const [notice, setNotice] = useState(false);
  const [notices, setNotices] = useState([]);
  const [noticeData, setNoticeData] = useState([]);
  useEffect(() => {
    import('../../json/notices.json')
      .then((data)=> {
	var arr = [], arrr = []
	for (var k in data.default) {
	  arr.push(k)
	  arrr.push(data[k])
	}
	setNotices(arr)
	setNoticeData(arrr)
	setNotice(true)
      })
  }, [])

  const classes = createStyles();

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
	    {
	      notice&&notices.map((ntc,id) => (
		(noticeData[id].url.endsWith('.pdf')) ?
		noticeData[id].isNew&&<a href={require(`../../docs/${noticeData[id].url}`)} download={`${noticeData[id].url}`} className={`${classes.link}`}>
		  <div className={classes.notice}>
		    <Typography>
		      <Box className={classes.themeText}>
			{ntc}
		      </Box>
		      <Box>
			{noticeData[id].description}
		      </Box>
		    </Typography>
		  </div>
		</a>
		:
		noticeData[id].isNew&&<a href={`${noticeData[id].url}`} className={`${classes.notice} ${classes.link}`}>
		  <Typography>
		    <Box className={classes.themeText}>
		      {ntc}
		    </Box>
		    <Box>
		      {noticeData[id].description}
		    </Box>
		  </Typography>
		</a>
	      ))
	    }
	  </section>
	  <section className={classes.notice_section}>
	    <Typography variant="h5" className={classes.themeText}>
	      <Box component="span" fontWeight="fontWeightBold">
		Old Notices
	      </Box>
	    </Typography>
	    {
	      notice&&notices.map((ntc,id) => (
		(noticeData[id].url.endsWith('.pdf')) ?
		!noticeData[id].isNew&&<a href={require(`../../docs/${noticeData[id].url}`)} download={`${noticeData[id].url}`} className={`${classes.link}`}>
		  <div className={classes.notice}>
		    <Typography>
		      <Box className={classes.themeText}>
			{ntc}
		      </Box>
		      <Box>
			{noticeData[id].description}
		      </Box>
		    </Typography>
		  </div>
		</a>
		:
		!noticeData[id].isNew&&<a href={`${noticeData[id].url}`} className={`${classes.notice} ${classes.link}`}>
		  <Typography>
		    <Box className={classes.themeText}>
		      {ntc}
		    </Box>
		    <Box>
		      {noticeData[id].description}
		    </Box>
		  </Typography>
		</a>
	      ))
	    }
	  </section>
	</Grid>
	<Grid xs={false} sm={1} item/>
      </Grid>
      <Footer />
    </>
  )
}
