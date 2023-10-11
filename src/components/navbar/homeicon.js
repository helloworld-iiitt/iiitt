import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  icon: {
    color: (props) => `${props.color}`,
    paddingLeft: (props) => !props.nopadding && "100",
  },
});

export default function HomeIcon(props) {
  const classes = useStyles(props);
  const location = useLocation().pathname;
  let home = "/";
  if (props.home) home = props.home;
  console.log(home);
  return (
    <>
      {location !== home && (
        <Link to={home} draggable="false" id="home_button">
          {!props.nopadding ? (
            <Button>
              <HomeRoundedIcon className={classes.icon} />
            </Button>
          ) : (
            <HomeRoundedIcon className={classes.icon} />
          )}
        </Link>
      )}
    </>
  );
}
