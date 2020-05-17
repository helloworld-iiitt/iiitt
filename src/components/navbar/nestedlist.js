import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarBorder from '@material-ui/icons/StarBorder';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PeopleIcon from '@material-ui/icons/People';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WebIcon from '@material-ui/icons/Web';
import Typography from '@material-ui/core/Typography';  
import { Link } from 'react-router-dom';

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };

  let Icon = Icons[props.menu.icon];

  return (
 
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={props.menu.text} />
        {open ? <ExpandLess /> : <ArrowForwardIosIcon style={{fontSize:'14px'}} />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {props.menu.submenu.map(item=>{
            return(
            <List component="div" disablePadding>
             <ListItem button className={classes.nested} onClick={props.toggleDrawer(props.anchor, false)}>
                  <Link to={item.link} draggable="false" className="nav_routes">
                      <ListItemText primary={item.text} />
                  </Link>
             </ListItem>
           </List>)
        })}
       
      </Collapse>
    </>
  );
}