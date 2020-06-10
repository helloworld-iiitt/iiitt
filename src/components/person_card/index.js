import React from 'react';
// import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import './styles.css'

const PersonCard = (props) => {
    return (
        <>
            <div className="container">
                <div className="pic">
                    <img src={props.src} alt={props.name} />
                </div>
                <div className="content">
                    {props.name}
                    <br />
                    {props.designation}
                    <br />
                    {props.researchArea}
                    <br />
                    <a href={`mailto:${props.emailID}`}>
                        {props.emailID}
                    </a>
                </div>
            </div>
        </>
    )
}

export default PersonCard