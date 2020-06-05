import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';


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

  //let Icon = Icons[props.menu.icon];

  return (
 
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
            <Icon >{props.menu.icon}</Icon>
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