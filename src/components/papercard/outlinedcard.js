import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DescriptionIcon from "@material-ui/icons/Description";
import Link from "@material-ui/core/Link";
import "./style.css";
const useStyles = makeStyles({
  root: {
    minWidth: 237,
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

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} id="simplecard">
      <CardContent>
        <div className="newshead">{props.title}</div>
        <ul className={props.title}>
          {props.items &&
            props.items.map((item) => {
              return (
                <li style={{ marginBottom: "15px" }}>
                  <Link href={item.link}>{item.title}</Link>
                  <br />
                  {item.date && <Typography
                    variant="caption"
                    color="textSecondary"
                    gutterBottom
                  >
                    Posted:{item.date}
                  </Typography>
                  }
                </li>
              );
            })}
        </ul>
      </CardContent>
      <CardActions>
        <Link href={props.linkToOlder}><Button size="small">View older</Button></Link>
      </CardActions>
    </Card>
  );
}
