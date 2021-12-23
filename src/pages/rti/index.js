import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import PersonCard from "../../components/person_card/index";
import {
  Card,
  Typography,
  Grid,
  Box,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";

// const createStyles = makeStyles({
//   container: {
//     padding: "1rem 1rem",
//   },
//   themeText: {
//     color: "#2e8b57",
//     textAlign:"center",
//     marginBottom:"2rem",
//   },
//   media: {
//     height: "15rem",
//     width: "12rem",
//     marginLeft: "auto",
//     marginRight: "auto",
//     border: "1px solid #2e8b57",
//     borderRadius: "4px",
//     padding: "0.5rem",
//   },
//   card: {
//     // padding: "8rem",
//     marginBottom:"5rem",
//     width:"90%",
//     height:"70%",
//   },
//   info:{
//     margin:"0 auto",
//     textAlign:"center",
//   },
//   title: {
//     width:"50%",
//     fontSize: "1.5rem",
//     textAlign:"center",
//   },
//   head: {
//     textAlign:"center",
//     display:"flex",
//     justifyContent:"center",
//   }
// });

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
  // const classes = createStyles();
  return (
    <div className="pagecontainer">
      <Navbar />
      <Grid container className="container">
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className="heading"
          >
            <Box component="span" fontWeight={380} paddingTop={"2rem"}>
              RTI
            </Box>
          </Typography>
          <Typography 
              variant="subtitle1"
              gutterBottom
              className="head"
          >
            {rti && rti.map((rti) => {
              return (
              <>
              <Typography
                  variant="subtitle1"
                  gutterBottom
                  className="title"
              >
            
             <Box
                component="h3"
                fontWeight="fontWeightBold"
                className="themeText"
              >
                {rti.head}
              </Box>
              <Card className="card">
              {/* <Grid> */}
              <CardMedia
                      className="media"
                      image={require(`../../images/${rti.src}`)}
                      title="Mentor Registrar"
                    />
              {/* </Grid> */}
                <Grid container>
                  <CardContent>
                    <Typography variant="body" gutterBottom className="info">
                    <Typography className="name">
                      <Box component="span" component="h1" gutterBottom>                        
                         {rti.name}
                      </Box>
                    </Typography>
                      <br />
                      <Typography className="name">
                      <Box fontSize="1rem">{rti.designation}</Box>
                      </Typography>
                      <br />
                      <a href={`mailto:${rti.emailID}`}>{rti.emailID}</a>
                      <br />
                       <a href={`tel:${rti.phone}`}>{rti.phone}</a>
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
              )
            })
          }
          </Typography>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
