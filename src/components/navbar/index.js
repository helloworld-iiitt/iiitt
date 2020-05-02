import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import MenuListComposition from './desktop-items'

export default class Navbar extends React.Component{

  constructor(){
    super();
    this.state={
      right: false,
      anchorEl:null,

    }
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



toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
   
    this.setState({ right:open });
    
  };



list = (anchor) => (
    <div
      className={clsx(this.classes.list, {
        [this.classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <List>
        
          <ListItem button >
            <ListItemIcon> <HomeIcon/></ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>
       
      </List>
      <Divider />
      <List>
        
          <ListItem button >
            <ListItemIcon><LocalLibraryIcon/></ListItemIcon>
            <ListItemText primary="Academics" />
          </ListItem>
      
      </List>
    </div>
  );


    render(){
        
        return(
        <div className="navbar">
        <img src="http://www.iiitt.ac.in/images/logo-iiit.png" alt="IIITT Logo" className="iiitt_logo"/> 
        <div className={this.classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu" id="mobile_navigation" onClick={this.toggleDrawer('right', true)}>
                <MenuIcon onClick={this.toggleDrawer('right', true)}/>
            </IconButton>
            <Drawer anchor={'right'} open={this.state.right} onClose={this.toggleDrawer('right', false)}>
            {this.list('right')}
            </Drawer>


            <div id="desktop_menu">
            {['Institute','Academics','People','Admission','Notification','Students','Campus Life','Virtual Academy'].map(item=>{
            return <MenuListComposition nav_head={item}/>
            })}
            </div>
            
            </Toolbar>
        </AppBar>
        </div>
        </div>

        );
    }
}