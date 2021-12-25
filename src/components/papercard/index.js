import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import OutlinedCard from "./outlinedcard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      // maxWidth: theme.spacing(70),
      minHeight: theme.spacing(77),
    },
  },
}));

export default function PaperCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <OutlinedCard title={props.title} items={props.items} linkToOlder={props.linkToOlder} />
    </div>
  );
}
