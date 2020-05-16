import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
import MenuListComposition from './desktop-items';
import TemporaryDrawer from './drawer';

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





    render(){
      const arr=[{text:'Institute',icon:'AccountBalanceIcon',submenu:[{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'},{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'}]},
                  {text:'Academics',icon:'LocalLibraryIcon',submenu:[{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'},{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'}]},
                  {text:'People',icon:'PeopleIcon',submenu:[{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'},{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'}]},
                  {text:'Admission',icon:'NoteAddIcon',submenu:[{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'},{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'}]},
                  {text:'Notification',icon:'NotificationImportantIcon',submenu:[{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'},{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'}]},
                  {text:'Students',icon:'PersonIcon',submenu:[{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'},{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'}]},
                  {text:'Campus Life',icon:'SchoolIcon',submenu:[{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'},{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'}]},
                  {text:'Virtual Academy',icon:'WebIcon',submenu:[{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'},{text:'About IIITT',link:'/about'},{text:'Director',link:'/director'}]}];
        
        return(
        <div className="navbar">
        <img src={require('../../images/textlogo.png')} alt="IIITT Text Logo" className="iiitt_logo"/> 
        <div className={this.classes.root}>
        <AppBar position="static">
            <Toolbar id="mobile_navbar">
            
              {/*Navbar Mobile Icons Start here */}
                <TemporaryDrawer items={arr}/>
                <Typography variant="h6" className={this.classes.title} style={{width:'100%'}}>
                  IIIT TRICHY
                </Typography>
                
              
              {/*Navbar Mobile Ends here */}
            
            </Toolbar>

            <Toolbar id="desktop_menu">
              {/*Navbar @Desktop start here*/}
            {arr.map(item=>(
            <MenuListComposition nav_head={item.text}/>
            ))}
            {/*Navbar @Desktop Ends here */}
            </Toolbar>
            
            
        </AppBar>
        </div>
        </div>

        );
    }
}