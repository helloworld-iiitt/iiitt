import React, { useEffect } from "react";
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import { Grid, Typography, Box } from "@material-ui/core";
import PersonCard from "../../components/person_card/index";
import "./style.css";
const staff_data = require("../../json/staff.json").officestaff;

export default function Staff() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Staff";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  return (
    <>
      <Navbar />
        <Typography className="main">  
         
        </Typography>   
            <Typography variant="h3" gutterBottom className="topheading2">
             Office Staff
            </Typography>
      <Typography gutterBottom className="officestaff">
        <Typography gutterBottom className="cards">
          <Typography gutterBottom className="carding">
          <Grid container className="head">
          
          {staff_data.map((staff) => {
            const { name, designation, emailID, phone, src } = staff;
            return (
              <>
              <Typography gutterBottom className="card2">
                {/* <Grid item xs={18} md={4} className="card1"> */}
                  <PersonCard
                    name={name}
                    designation={designation}
                    emailID={emailID}
                    phone={phone}
                    src={src}
                    src_type="staff"
                    researchArea=""
                  />
                {/* </Grid> */}
                </Typography>
              </>
            );
          })}
          </Grid>
          </Typography>
          </Typography>
        {/* <Grid item xs={false} sm={1} /> */}
        </Typography>
      <div style={{ height: "90px" }}></div>
      <Footer />
    </>
  );
}
