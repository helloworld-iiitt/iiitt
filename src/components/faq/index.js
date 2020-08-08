import React, { useEffect, useState } from 'react'
import { Typography, Grid, Box, Card, CardContent, CardActions, Collapse, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import clsx from 'clsx'

const createStyles = makeStyles({
  answer: {
    paddingLeft: "1.5rem"
  },
  root: {
    cursor: "pointer"
  },
  text: {
    lineHeight: "2"
  }
});

export default function Faq(props) {
  const question = props.question
  const answer = props.answer
  const color = props.color

  const classes = createStyles(props)

  const [expanded, setExpanded] = React.useState(false)

  const toggleFaq = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <Card className={classes.root}>
	<CardContent onClick={toggleFaq} aria-expanded={expanded} aria-label="Show answer">
	  <IconButton
	    onClick={toggleFaq} aria-expanded={expanded} aria-label="Show answer">
	    <KeyboardArrowRightIcon />
	  </IconButton>
	  {question}
	</CardContent>
	<Collapse in={expanded} timeout="auto" unmountOnExit className={classes.answer}>
	  <CardContent className={classes.text}>
	    {answer}
	  </CardContent>
	</Collapse>
      </Card>
    </>
  )
}
