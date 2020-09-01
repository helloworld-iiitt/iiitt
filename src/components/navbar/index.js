import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Menu from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import './style.css'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import MenuListComposition from './desktop-items'
import HomeIcon from './homeicon'
import TemporaryDrawer from './drawer'
// import navbar_data from '../../json/navbar_data.json'

export default class Navbar extends React.Component{
  constructor(props){
    super(props);
    var navbarSrc = 'navbar_data.json'
    if (this.props && this.props.src) {
      navbarSrc = this.props.src
    }
    this.state={
      right: false,
      anchorEl:null,
      navbarSrc: navbarSrc,
      navbar_data: undefined
    }
  }

  componentDidMount() {
    import(`../../json/${this.state.navbarSrc}`)
      .then(d => {
	this.setState({navbar_data: d})
      })
  }

  classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));





  render(){
    //Building from json/navbar_data.json file
    //For Icons get the icon-name from https://material.io/resources/icons/?style=baseline  and then put out there

    return(
      <div className="navbar">
	<img src={require('../../images/textlogo.png')} alt="IIITT Text Logo" className="iiitt_logo"/>
	<div className={this.classes.root}>
	  <AppBar position="static">
	    <Toolbar id="mobile_navbar">

	      {/*Navbar Mobile Icons Start here */}
	      {
		this.state.navbar_data ?
		  <TemporaryDrawer items={this.state.navbar_data.data}/>
		  :
		  <h2>Loading...</h2>
	      }
	      <Typography variant="h6" className={this.classes.title} style={{width:'100%'}}>

	      </Typography>


	      {/*Navbar Mobile Ends here */}

	    </Toolbar>

	    <Toolbar id="desktop_menu">
	      {/*Navbar @Desktop start here*/}
	      { <HomeIcon color="white" home={this.props.homeRoute}/> }
	      {
		this.state.navbar_data ?
		  this.state.navbar_data.data.map(item=>(
		    <MenuListComposition nav_head={item.text} submenu={item.submenu}/>
		  ))
		  :
		    <h2>Loading...</h2>
	      }
	      {/*Navbar @Desktop Ends here */}
	    </Toolbar>


	  </AppBar>
	</div>
      </div>

    );
  }
}
