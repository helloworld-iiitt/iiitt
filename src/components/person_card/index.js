import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
  }
});

const PersonCard = (props) => {
  const sliceLimit = 80;
  const classes = useStyle();
  const [content, setContent] = useState(props.researchArea.slice(0, sliceLimit));

  const showLess = (e) => {
    setContent(props.researchArea.slice(0, sliceLimit));
  };

  const showMore = (e) => {
    setContent(props.researchArea);
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
	  <Typography variant="h5">{props.name}</Typography>
	  <Typography variant="h6" className={classes.designation} gutterBottom>
	    {props.designation}
	  </Typography>
	  {props.researchArea && (
	    <>
	      <Typography variant="body2" gutterBottom className={classes.researchArea}>
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
