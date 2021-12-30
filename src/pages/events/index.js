import React, { useEffect, useState } from "react";
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { validURL } from '../../common/utils'
import "./styles.css";

const createStyles = makeStyles({
    container: {
        padding: "1.5rem 1rem",
    },
    themeText: {
        color: "#2e8b57",
    },
    link: {
        display: "inline-block",
        textDecoration: "none",
        color: "black",
    },
    item_section: {
        padding: "0.5rem 0 2rem 0",
    },
    item: {
        padding: "1rem 0",
        transition: "transform .2s",
        "&:hover": {
            background: "rgba(0,0,0,0.15)",
        },
    },
});

export default function Events() {
    useEffect(() => {
        document.getElementsByTagName("title")[0].innerHTML = "Events";
    }, []);

    useEffect(() => {
        return () => {
            document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
        };
    }, []);
    const [oldEvents, setOldEvents] = useState([]);
    const [newEvents, setNewEvents] = useState([]);
    useEffect(() => {
        import("../../json/events.json").then((data) => {
            let d = data.data
            let latest = d.filter(x => x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
            setNewEvents(latest)
            let old = d.filter(x => !x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
            setOldEvents(old)
        });
    }, []);

    const classes = createStyles();

    const date = new Date();

    return (
        <div className="page-container">
            <Navbar />
            <Grid container className={classes.container}>
                <Grid xs={false} sm={1} item />
                <Grid xs={12} sm={10} item>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        className={classes.themeText}
                    >
                        <Box component="span" fontWeight={380}>
                            Events
                        </Box>
                    </Typography>
                    <section className={classes.item_section}>
                        {console.log(process.env.REACT_APP_STATIC_BASE_URL)}
                        <Typography variant="h5" className={classes.themeText}>
                            <Box component="span" fontWeight="fontWeightBold">
                                Upcoming events
                            </Box>
                        </Typography>
                        <ul className="doclist">
                            {newEvents &&
                                newEvents.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a
                                                href={validURL(item.link) ? item.link : `${process.env.REACT_APP_STATIC_BASE_URL}/${item.link}`}
                                                download={`${item.url}`}
                                                className={classes.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className={classes.item}>
                                                    <Typography>
                                                        {
                                                            item.date &&
                                                            <Typography
                                                                variant="caption"
                                                                color="textSecondary"
                                                                gutterBottom
                                                            >
                                                                Posted on:{item.date}
                                                            </Typography>
                                                        }
                                                        <br />
                                                        <Box
                                                            className={classes.themeText}
                                                            component="span"
                                                        >
                                                            {item.title}
                                                        </Box>
                                                        <br />
                                                        <Box component="span">{item.text}</Box>
                                                    </Typography>
                                                </div>
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </section>
                    <section className={classes.item_section}>
                        <Typography variant="h5" className={classes.themeText}>
                            <Box component="span" fontWeight="fontWeightBold">
                                Passed events
                            </Box>
                        </Typography>
                        <ul className="doclist">
                            {oldEvents &&
                                oldEvents.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <a
                                                href={validURL(item.link) ? item.link : `${process.env.REACT_APP_STATIC_BASE_URL}/${item.link}`}
                                                download={`${item.url}`}
                                                className={classes.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className={classes.item}>
                                                    <Typography>
                                                        {
                                                            item.date &&
                                                            <Typography
                                                                variant="caption"
                                                                color="textSecondary"
                                                                gutterBottom
                                                            >
                                                                Posted on:{item.date}
                                                            </Typography>
                                                        }
                                                        <br />
                                                        <Box
                                                            className={classes.themeText}
                                                            component="span"
                                                        >
                                                            {item.title}
                                                        </Box>
                                                        <br />
                                                        <Box component="span">{item.text}</Box>
                                                    </Typography>
                                                </div>
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </section>
                </Grid>
                <Grid xs={false} sm={1} item />
            </Grid>
            <Footer />
        </div>
    );
}
