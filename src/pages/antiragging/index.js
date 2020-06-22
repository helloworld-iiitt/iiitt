import React from 'react'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Typography, Grid, Box } from '@material-ui/core'
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
  image: {
    width: "100%"
  },
})

export default function AntiRagging() {
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
                  Anti Ragging Committee
                </Box>
              </Typography>
            </Grid>
            <section>
              <Typography variant="body" gutterBottom className={classes.themeText}>
                <a href={require(`../../docs/${arCommittee}`)} download={`${arCommittee}`} className={classes.link}>
                  Anti-Ragging Committee
                </a>
              </Typography>
              <br />
              <img src={require('../../images/anti_ragging.png')} alt='Anti ragging' className={classes.image}/>
            </section>
          </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </>
    )
}
