import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import "./styles.css";

const useStyle = makeStyles({
  show: {
    cursor: "pointer",
    fontSize: "0.6em",
    background: "#3f51b5",
    padding: "0.2rem",
    borderRadius: "5px",
    color: "white",
    display: "inline-block",
    marginBottom: "0.2rem",
  },
  designation: {
    color: "#424242",
    fontSize: "1em",
  },
  researchArea: {
    fontSize: "0.85em"
  },
  name: {
    fontSize: "1.2vw"
  }
});

const PersonCard = (props) => {
  const sliceLimit = 80;
  const classes = useStyle();
  var researchArea = "";
  if (props.researchArea) researchArea = props.researchArea

  const [content, setContent] = useState(researchArea.slice(0, sliceLimit));

  const showLess = (e) => {
    setContent(researchArea.slice(0, sliceLimit));
  };

  const showMore = (e) => {
    setContent(researchArea);
  };

  return (
    <>
      <div className={`container`}>
        <div className="pic">
          <img
            src={require(`../../images/people/${props.src_type}/${props.src}`)}
            alt={props.name}
            className="image"
          />
        </div>
        <div className="content">
          {props.src_type === "faculty" ? (
            <Typography variant="h5" className={classes.name}>
              <Link to={`/details/${props.dept}/${props.deptID}`}>
                {props.name}
              </Link>
            </Typography>
          ) : (
            <Typography variant="h5" className={classes.name}>
              {props.name}
            </Typography>
          )}
          {props.designation && (
            <Typography
              variant="h6"
              className={classes.designation}
              gutterBottom
            >
              {props.designation}
            </Typography>
          )}
          {props.department && (
            <Typography
              variant="h6"
              className={classes.designation}
              gutterBottom
            >
              {props.department}
            </Typography>
          )}
          {props.institute && (
            <Typography
              variant="h6"
              className={classes.designation}
              gutterBottom
            >
              {props.institute}
            </Typography>
          )}
          {props.researchArea && (
            <>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.researchArea}
              >
                {content}
                {props.researchArea.length !== content.length &&
                  props.researchArea.length > sliceLimit &&
                  "..."}
              </Typography>
              {props.researchArea.length !== content.length && (
                <Typography
                  onClick={showMore}
                  variant="span"
                  className={classes.show}
                >
                  Show More
                </Typography>
              )}
              {props.researchArea.length === content.length &&
                props.researchArea.length > sliceLimit && (
                  <Typography
                    onClick={showLess}
                    variant="span"
                    className={classes.show}
                  >
                    Show Less
                  </Typography>
                )}
            </>
          )}
          {/* <Typography variant="body2" gutterBottom>
			{content}{(props.researchArea.length !== content.length && props.researchArea.length>sliceLimit) && '...'}
		    </Typography>
		    {
		    (props.researchArea.length !== content.length) &&
		    <Typography onClick={showMore} variant="span" className={classes.show}>
			Show More
		    </Typography>
		    }
		    {
		    (props.researchArea.length === content.length && props.researchArea.length>sliceLimit) &&
		    <Typography onClick={showLess} variant="span" className={classes.show}>
			Show Less
		    </Typography>
		    } */}
          <br />
          <Typography variant="body2">
            <a href={`mailto:${props.emailID}`} className="email">
              <span aria-label="mailing" role="img">
                &#128231;
              </span>
              &nbsp;
              {props.emailID}
            </a>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
