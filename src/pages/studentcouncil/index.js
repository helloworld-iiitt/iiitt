import React, { useEffect } from "react";
import Navbar from "./../../components/navbar/index";
import PersonCard from "./../../components/person_card/index.js";
import Footer from "./../../components/footer/index";
import studentCouncilData from "../../json/studentcouncil.json";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    grp: {
        color: "#2e8b57",

        marginTop: "3rem",
        marginLeft: "1.3rem"

    },
});

export default function StudentCouncil(props) {
    useEffect(() => {
        document.getElementsByTagName("title")[0].innerHTML = "Faculty";
    }, []);

    useEffect(() => {
        return () => {
            document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
        };
    }, []);

    const classes = useStyles();

    var branches = [];
    var grps = [];
    for (var grp in studentCouncilData) {
        grps.push(grp);
        var li = [];
        li.push(
            studentCouncilData[`${grp}`].map((x) => {
                const { name, emailId, src, designation } = x;
                return (
                    <Grid item xs={12} md={6}>
                        <PersonCard
                            name={name}
                            emailID={emailId}
                            src={src}
                            src_type="students"
                            designation={designation}
                        />
                    </Grid>
                );
            })
        );
        branches.push(li);
    }

    return (
        <div className="page-container">
            <Navbar />
            <Grid container>
                <Grid item xs={false} sm={1} />
                <Grid container item xs={12} sm={10}>
                    {branches.map((x, ind) => {
                        return (
                            <>
                                <Grid item sm={12}>
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                    >
                                        {grps[ind]}
                                    </Typography>
                                </Grid>
                                <Grid container item spacing={1} style={{ margin: "0.5rem" }}>
                                    {x}
                                </Grid>
                            </>
                        );
                    })}
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
            <Footer />
        </div>
    );
}

