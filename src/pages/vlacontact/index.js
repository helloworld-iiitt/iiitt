import React, { useEffect, useState } from "react";
import Navbar from "./../../components/navbar/index";
import PersonCard from "./../../components/person_card/index.js";
import Footer from "./../../components/footer/index";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "block"
  }
});

export default function VlaContact() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "VLA | Contact";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const [admins, setAdmins] = useState(undefined)
  useEffect(() => {
    import('../../json/vlacontact.json')
      .then(d => setAdmins(d.data))
  }, [])

  const classes = useStyles();

  return (
    <div className="page-container">
      <Navbar src="vla_navbar.json" homeRoute="/vla"/>
      <Grid container>
        <Grid item xs={false} sm={1} />
        <Grid container item xs={12} sm={10} className={classes.container}>
          <Typography variant="h2" component="h2" gutterBottom className={classes.themeText}>
            <Box component="span" fontWeight={380}>
              Administrators
            </Box>
          </Typography>
          {
            admins && admins.map(admin => {
              return (
                <>
                  <Typography variant="h4" component="h4" gutterBottom className={classes.themeText}>
                    <Box component="span" fontWeight={300}>
                      { admin.institute }
                    </Box>
                  </Typography>
                  {
                    admin.people && admin.people.map(person => {
                      return (
                        <>
                          <PersonCard
                            name={person.name}
                            designation={person.designation}
                            department={person.department}
                            institute={person.institute}
                            emailID={person.emailID}
                            src={person.src}
                            src_type='faculty'
                          />
                          <br />
                        </>
                      )
                    })
                  }
                </>
              )
            })
          }
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
