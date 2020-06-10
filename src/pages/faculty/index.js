import React from 'react';
import Navbar from './../../components/navbar/index';
import PersonCard from './../../components/person_card/index.js';
import Footer from './../../components/footer/index';
import fac_data from '../../json/faculty.json';
import { Grid, Typography } from '@material-ui/core';

export default function Faculty(props) {

    var groups = []
    var grps = []
    for(var grp in fac_data) {
        grps.push(grp.toUpperCase())
        var li = []
        li.push(fac_data[`${grp}`].map( (x) => {
            const { name, emailID, src, designation, researchArea } = x;
            console.log(x)
            return (
                <Grid item xs={12} sm={4}>
                    <PersonCard
                        name={name} 
                        emailID={emailID} 
                        src={src} 
                        designation={designation} 
                        researchArea={researchArea}
                    />
                </Grid>
            )
        }));
        groups.push(li)
    }

    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item xs={false} sm={1} />
                <Grid container item xs={12} sm={10}>
                    {
                        groups.map((x,ind) => {
                            return (
                                <>
                                    <Grid item sm={12}>
                                        <Typography variant="h3" component="h3">
                                            {grps[ind]}
                                        </Typography>
                                    </Grid>
                                    <Grid container item spacing={1} style={{margin: "0.5rem"}}>
                                    {x}
                                </Grid>
                                </>
                            )
                        })
                    }
                    {groups[0]}
                    <Grid item sm={12}>
                        <Typography variant="h2" component="h2">
                            ECE
                        </Typography>
                    </Grid>
                    {groups[1]}
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
            <Footer />
        </>
    )

}
