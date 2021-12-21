import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import {
  Card,
  Typography,
  Grid,
  Box,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  themeText: {
    color: "#2e8b57",
    textAlign:"center",
    marginBottom:"2rem",
  },
  media: {
    height: "15rem",
    width: "12rem",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid #2e8b57",
    borderRadius: "4px",
    padding: "0.5rem",
  },
  card: {
    padding: "8rem",
    width:"90%",
    height:"70%",
  },
  info:{
    margin:"0 auto",
    textAlign:"center",
  },
  title: {
    width:"50%",
    fontSize: "1.5rem",
    textAlign:"center",
  },
  head: {
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
  },
  // media: {
  //   paddingTop:"25rem",
  // }, 
});

export default function RTI() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "RTI";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);
  const [rti, setRti] = useState(undefined);
  useEffect(() => {
    import("../../json/rti.json").then((data) => {
      setRti(data.data);
    });
  }, []);
  const classes = createStyles();
  return (
    <div className="pagecontainer">
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={classes.themeText}
          >
            <Box component="span" fontWeight={380}>
              RTI
            </Box>
          </Typography>
          <Typography 
              variant="subtitle1"
              gutterBottom
              className={classes.head}
          >
          {/* <Grid item xs={12} sm={4}> */}
            {rti && rti.map((rti) => (
              <>
              <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.title}
              >
            
             <Box
                component="h3"
                fontWeight="fontWeightBold"
                className={classes.themeText}
              >
                {rti.head}
              </Box>
              <Card className={classes.card}>
                <Grid container>
                  <Grid item xs={12}>
                    <CardMedia
                      className={classes.media}
                      image={require(`../../images/${rti.image}`)}
                      title="Mentor Registrar"
                    />
                  </Grid>
                  <CardContent>
                    <Typography variant="body" gutterBottom className={classes.info}>
                      <Box component="span" fontSize="2rem" gutterBottom>
                        {rti.name}
                      </Box>
                      <br />
                      <Box fontSize="1rem">{rti.designation}</Box>
                      <br />
                      <a href={`mailto:${rti.emailID}`}>{rti.emailID}</a>
                      {/* {rti.emailIDSecondary && (
                        <>
                          ,&nbsp;
                          <a href={`mailto:${rti.emailID}`}>
                            {rti.emailIDSecondary}
                          </a>
                        </>
                      )} */}
                      <br />
                      {/* <a href={`tel:${rti.mobileNo}`}>{rti.mobileNo}</a> */}
                      <br />
                      {rti.fax && <a href={`fax:${rti.fax}`}>{rti.fax}</a>}
                      <br />
                      </Typography>
                  </CardContent>
                   <br />
                </Grid>
              </Card>
              </Typography>
              </>
            ))
          }
          {/* </Grid> */}
          
          </Typography>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
