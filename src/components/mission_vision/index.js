import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./style.css";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MissionVision() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Card
        className={classes.root}
        variant="outlined"
        id="mission_vision"
        className="only_on_desktop"
      >
        <CardContent>
          <Typography variant="h5" component="h1" style={{ color: "#2e8b57" }}>
            Vision
          </Typography>
          <Divider />
          <Typography className={classes.pos} color="textSecondary" id="vision">
            To achieve "World Class Excellence in Information and Communication
            Technology".
          </Typography>

          <Typography variant="h5" component="h1" style={{ color: "#2e8b57" }}>
            Mission
          </Typography>
          <Divider />
          <Typography
            className={classes.pos}
            color="textSecondary"
            gutterBottom
            id="mission"
          >
            {bull} To impart Information Technology education to students and
            future leaders.
            <br />
            <br />
            {bull} To establish Center of Excellences in Information Technology.
            <br />
            <br />
            {bull} To engage in cutting edge technology research to meet the
            current needs and future challenges of India and the world at large.
          </Typography>
        </CardContent>
        <CardActions id="learn_more">
          <Button size="small">
            Learn More about IIIT Trichy <ArrowForwardIcon />{" "}
          </Button>
        </CardActions>
      </Card>

      <Card
        className={classes.root}
        variant="outlined"
        id="mission_vision"
        className="only_on_mobile"
      >
        <CardContent>
          <Typography variant="h5" component="h1" style={{ color: "#2e8b57" }}>
            Vision
          </Typography>
          <Divider />
          <Typography className={classes.pos} color="textSecondary" id="vision">
            To achieve "World Class Excellence in Information and Communication
            Technology".
          </Typography>

          <Typography variant="h5" component="h1" style={{ color: "#2e8b57" }}>
            Mission
          </Typography>
          <Divider />
          <Typography
            className={classes.pos}
            color="textSecondary"
            gutterBottom
            id="mission"
          >
            {bull} To impart Information Technology education to students and
            future leaders.
            <br />
            {bull} To establish Center of Excellences in Information Technology.
            <br />
            {bull} To engage in cutting edge technology research to meet the
            current needs and future challenges of India and the world at large.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            Learn More about IIIT Trichy <ArrowForwardIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
