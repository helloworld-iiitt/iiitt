import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
} from "@material-ui/core";
import {
  Link,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import clsx from "clsx";

const createStyles = makeStyles({
  answer: {
    paddingLeft: "1.5rem",
  },
  root: {
    cursor: "pointer",
  },
  text: {
    lineHeight: "2",
  },
});

export default function Faq(props) {

  const { question, answer, questionNumber } = props;

  const classes = createStyles(props);

  const [expanded, setExpanded] = React.useState(false);

  const toggleFaq = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent
          onClick={toggleFaq}
          aria-expanded={expanded}
          aria-label="Show answer"
        >
          <IconButton
            onClick={toggleFaq}
            aria-expanded={expanded}
            aria-label="Show answer"
          >
            <KeyboardArrowRightIcon />
          </IconButton>
          {question}
        </CardContent>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          className={classes.answer}
        >
          <CardContent className={classes.text}>
            {answer}
            {questionNumber === 11 ? <Link to='/contactus'>location page for more information</Link> : null}
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
