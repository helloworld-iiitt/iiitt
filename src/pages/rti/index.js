import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Grid,
  Box,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import "./style.css";

export default function RTI() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "RTI";
  }, []);

  useEffect(
    () => () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    },
    [],
  );
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
      <Typography variant="h2" component="h2" gutterBottom className="heading">
        <Box component="span" fontWeight={380} paddingTop="2rem">
          RTI
        </Box>
      </Typography>
      <Typography variant="subtitle1" gutterBottom className="head">
        {rti &&
          rti.map((rti) => (
            <div className="rti">
              <Typography variant="subtitle1" gutterBottom className="title">
                <Box
                  component="h3"
                  fontWeight="fontWeightBold"
                  className="themeText"
                >
                  {rti.head}
                </Box>
                <Card className="card">
                  <CardMedia
                    className="media"
                    image={require(`../../images/${rti.src}`)}
                    title="Mentor Registrar"
                  />
                  <CardContent>
                    <Typography variant="body" gutterBottom className="info">
                      <Box component="span" component="h2" gutterBottom>
                        {rti.name}
                      </Box>
                      <br />
                      <Typography className={rti.cls}>
                        <Box fontSize="1.3rem">{rti.designation}</Box>
                        <br />
                        <a href={`mailto:${rti.emailID}`}>{rti.emailID}</a>
                        <br />
                        {/* <a href={`tel:${rti.phone}`}>{rti.phone}</a> */}
                        <br />
                        {rti.fax && <a href={`fax:${rti.fax}`}>{rti.fax}</a>}
                        <br />
                      </Typography>
                    </Typography>
                  </CardContent>
                  <br />
                </Card>
              </Typography>
            </div>
          ))}
      </Typography>
      <Footer />
    </div>
  );
}
