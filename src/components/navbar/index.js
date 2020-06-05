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
      const arr=[{text:'Institute',icon:'account_balance',submenu:[{text:'About IIITT',link:'/about'},{text:'Administration',link:'/administration'},{text:'BoG',link:'/bog'},{text:'Senate',link:'/senate'},{text:'FC',link:'/fc'},{text:'BwC',link:'bwc'},{text:'RTI',link:'/rti'},{text:'Industry Partners',link:'/industry_partners'}]},
                  {text:'Academics',icon:'local_library',submenu:[{text:'Programs',link:'/programs'},{text:'Departments',link:'/departments'},{text:'Curriculum',link:'/curriculum'},{text:'Calender',link:'/calender'},{text:'Holidays',link:'/holidays'}]},
                  {text:'People',icon:'people',submenu:[{text:'Faculty',link:'/faculty'},{text:'Staff',link:'/staff'}]},
                  {text:'Admission',icon:'note_add',submenu:[{text:'Undergraduate',link:'/ugadmin'},{text:'Ph.D',link:'/phdadmin'}]},
                  {text:'Notification',icon:'notification_important',submenu:[{text:'General',link:'/general'},{text:'Tenders',link:'/tenders'}]},
                  {text:'Students',icon:'person',submenu:[{text:'Undergraduate',link:'/undergraduate'},{text:"FAQ's",link:'/faq'}]},
                  {text:'Campus Life',icon:'school',submenu:[{text:'Festivals',link:'/festivals'},{text:'Clubs',link:'/clubs'}]},
                  {text:'Contact Us',icon:'school',submenu:[{text:'Contact Us',link:'/contactus'}]},
                  {text:'Virtual Academy',icon:'web',submenu:[{text:'Virtual Learning Academy',link:'/vla'}]}];
        
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
            <MenuListComposition nav_head={item.text} submenu={item.submenu}/>
            ))}
            {/*Navbar @Desktop Ends here */}
            </Toolbar>
            
            
        </AppBar>
        </div>
        </div>

        );
    }
}