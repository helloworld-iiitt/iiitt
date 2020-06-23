import React from 'react'
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
})

export default function AdmissionFeeStructure() {
  const feeStructure = 'Fee Structure 2019-20.pdf'
  const classes = createStyles()
	return (
		<>
      <Navbar />
      <Grid container>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10} >
          <Typography variant="h2" component="h2" gutterBottom className={{...classes.themeText}}>
            <Box component="span" fontWeight={380}>
              Fee Structure
            </Box>
          </Typography>
          <ul className="doclist">
            <li>
              <a href={require(`../../docs/${feeStructure}`)} download={`${feeStructure}`} className={classes.link}>
              {feeStructure}
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Footer />
    </>
	)
}
