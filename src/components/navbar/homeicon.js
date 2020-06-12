import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import { makeStyles } from '@material-ui/core/styles'
import { Link, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white"
  }
}))
export default function HomeIcon() {
  const classes = useStyles()
  const location = useLocation().pathname
  return (
    <>
      {
	(location !== '/') &&
	  <Link to='/' draggable="false">
	    <HomeRoundedIcon className={classes.icon}/>
	  </Link>
      }
    </>
  )
}
