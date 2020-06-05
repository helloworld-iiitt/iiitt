import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PeopleIcon from '@material-ui/icons/People';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WebIcon from '@material-ui/icons/Web';
import Typography from '@material-ui/core/Typography';  
import NestedList from './nestedlist.js'

const Icons={
    AccountBalanceIcon,
    LocalLibraryIcon,
    PeopleIcon,
    NoteAddIcon,
    NotificationImportantIcon,
    PersonIcon,
    SchoolIcon,
    WebIcon

}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {props.items.map((menu_item, index) => {
           return (
           <NestedList menu={menu_item} toggleDrawer={toggleDrawer} anchor={anchor} />
        )})}
      </List>
      <Divider />
     
    </div>
  );

  return (
    <div>
      
        <React.Fragment >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" id="mobile_navigation" onClick={toggleDrawer('left', true)}>
                <MenuIcon onClick={toggleDrawer('left', true)}/>
            </IconButton>
          <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
            <List id="iiitt_sidetop">
              <ListItem >
                <ListItemIcon><img src={require('../../images/logo-small.png')} alt="IIITT Logo" className="main_logo" width="40px"/></ListItemIcon>
                <ListItemText><Typography variant="h6" style={{color:'rgba(0, 0, 0, 0.75)'}}>
                  IIIT TRICHY
                </Typography></ListItemText>
              </ListItem>
            </List>
            <Divider />
            {list('left')}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}