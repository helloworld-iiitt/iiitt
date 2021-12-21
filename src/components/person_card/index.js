import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import MailIcon from '@material-ui/icons/Mail';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./styles.css";

const useStyle = makeStyles({
  researchArea: {
    fontSize: "1em",
    fontWight: "bold",
  },
});

const PersonCard = (props) => {


  const classes = useStyle();

  return (
    <>
      <div className="card">
        <div className="top">
          <div className="text">
            {props.src_type === "faculty" ? (
              <Link
                className="name"
                 to='#'
            /*    to={`/faculty_detail/${props.dept}/${props.deptID}`} */
              >
                {props.name}
              </Link>
            ) : (
              <a className="name" href="#">
                {props.name}
              </a>
            )}
            <h4>{props.designation}</h4>
          </div>

          <div className="circle-img">
            <img
              src={require('../../images/people/'+props.src_type+'/'+props.src)}
              alt="avatar_img"
            />
          </div>
        </div>
        <div className="bottom">
          <p className="description">
            {props.researchArea && (
              <>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.researchArea}
                >
                  {props.researchArea}
                </Typography>
              </>
            )}
          </p>
          <div className="info-div">
            <MailIcon className="info-icon" />
            <a href={`mailto:${props.emailID}`} className="info">
              {props.emailID}
            </a>
          </div>
          <div className="info-div">
          <a href={`Phone:${props.phone}`} style={{color:"white"}}>{props.phone}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
