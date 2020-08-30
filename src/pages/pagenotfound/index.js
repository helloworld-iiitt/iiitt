import React from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import { Grid, Typography } from '@material-ui/core'

export default class PageNotFound extends React.Component {
  state = {
    redirect: false,
    time: 5
  }

  componentDidMount() {
    this.timerHandle = setTimeout(
      () => {
	this.setState({redirect: true})
      },
      5000
    )
    this.intervalHandle = setInterval(
      () => {
	var t = this.state.time
	t--
	this.setState({time: t})
      },
      1000
    )
  }

  componentWillUnmount () {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle)
    }
    if (this.intervalHandle) {
      clearInterval(this.intervalHandle)
    }
  }

  render() {
    return (
      <div className="page-container">
        <Navbar />
        <Grid container>
          <Grid item xs={false} sm={1} />
          <Grid container item xs={12} sm={10} style={{display: "flex", justifyContent: "center"}}>
            <Grid item xs={12} align="center" style={{margin: "2rem"}}>
              <img src={require('../../images/pagenotfound.png')} alt="notfound"/>
              {
          this.state.redirect && <Redirect to='/' />
              }
            </Grid>
            <Grid item xs={12} >
              <Typography variant="h4" align="center" gutterBottom>
          Redirecting you to home page in {this.state.time} seconds
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
        <Footer />
      </div>
    )
  }
}
