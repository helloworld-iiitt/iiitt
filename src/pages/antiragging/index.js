import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import './style.css'
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
  image: {
    width: "100%"
  },
})

export default function AntiRagging() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Anti-Ragging";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const arCommittee = 'AR-committee.pdf'
  const classes = createStyles()
  return (
    <>
      <Navbar />
      <Grid container>
	<Grid item xs={false} sm={1} />
	<Grid container item xs={12} sm={10} className={classes.container}>
	  <Grid item xs={12}>
	    <Typography variant="h2" gutterBottom className={classes.themeText}>
	      <Box component="div" fontWeight={380}>
		Ragging is a Crime!!
	      </Box>
	    </Typography>
	  </Grid>
	  <section>

	    <br />
	    {/*<img src={require('../../images/anti_ragging.png')} alt='Anti ragging' className={classes.image}/>*/}
	    <Typography variant="h4">
	      What Constitutes Ragging?
	    </Typography>
	    <ul style={{lineHeight:'35px '}}>
	      <br/>

	      Ragging constitutes one or more of any of the following acts:
	      <br/>

	      <li> Any conduct by any student or students whether by words spoken or
		written or by an act which has the effect of teasing, treating or
		handling with rudeness a fresher or any other student.</li>
	      <li> Indulging in rowdy or undisciplined activities by any student or students
		which causes or is likely to cause annoyance, hardship, physical or
		psychological harm or to raise fear or apprehension thereof in any fresher
		or any other student.</li>
	      <li> Asking any student to do any act which such student will not in the
		ordinary course do and which has the effect of causing or generating a
		sense of shame, or torment or embarrassment so as to adversely affect
		the physique or psyche of such fresher or any other student.</li>
	      <li> Any act by a senior student that prevents, disrupts or disturbs the regular
		academic activity of any other student or a fresher.</li>
	      <li> Exploiting the services of a fresher or any other student for completing
		the academic tasks assigned to an individual or a group of students.</li>
	      <li> Any act of financial extortion or forceful expenditure burden put on a
		fresher or any other student by students</li>
	      <li> Any act of physical abuse including all variants of it: sexual abuse,
		homosexual assaults, stripping, forcing obscene and lewd acts,
		gestures, causing bodily harm or any other danger to health or person</li>
	      <li> Any act or abuse by spoken words, emails, post, public insults which
		would also include deriving perverted pleasure, vicarious or sadistic
		thrill from actively or passively participating in the discomfiture to
		fresher or any other student. </li>
	      <li> Any act that affects the mental health and self-confidence of a fresher or any
		other student with or without an intent to derive a sadistic pleasure or
		showing off power, authority or superiority by a student over any fresher </li>
	    </ul>
	    <br/>
	    <br/>
	    <Typography variant="h4">
	      Seeking Help:
	    </Typography>
	    <br/>
	    <ul className="seekhelp">
	      <li>  Reach out to the Anti-Ragging Squad of  IIIT Trichy
		<ul className="doclist">
		  <li>
		    <a href={require(`../../docs/${arCommittee}`)} download={`${arCommittee}`} className={classes.link}>
		      IIITT Anti-Ragging Committee
		    </a>
		  </li>
		</ul>
	      </li>
	      <br/>
	      <br/>
	      <li>
		Seek help at National The Anti-Ragging Portal:&nbsp;
		<a href="https://www.antiragging.in/">https://www.antiragging.in/</a>
	      </li>
	      <br/>
	      <br/>
	      <li>
		National Anti Ragging Help Line (UGC Crisis Hotline)
		24x7 Toll Free Number: <a href="tel:1800-180-5522">1800-180-5522</a>
	      </li>
	      <br/>
	      <br/>
	      <li>
		Reaching out to helpline via Email: <a href="mailto:helpline@antiragging.in">helpline@antiragging.in</a>
	      </li>
	    </ul>


	  </section>
	</Grid>
	<Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </>
  )
}
