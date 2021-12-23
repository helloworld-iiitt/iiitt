import React, { useEffect } from "react";
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import { Grid, Typography, Box } from "@material-ui/core";
import PersonCard from "../../components/person_card/index";
import { makeStyles } from "@material-ui/core/styles";

const staff_data = require("../../json/staff.json").officestaff;
const registrar_data = require("../../json/staff.json").registrar;

const useStyle = makeStyles({
  title: {
    marginTop:"5rem",
    color: "#2e8b57",
    textDecoration:"none",
    display:"flex",
    justifyContent:"center",
  },
  topheading : {
    marginTop:"3rem",
    color: "#2e8b57",
    display:"flex",
    justifyContent:"center",
  },
  topcard: {
    marginTop:"-1rem",
    display:"flex",
    justifyContent:"center",
  },
  officestaff: {
    textAlign:"right",
    display:"flex",
    justifyContent:"center",
  },

});

export default function Staff() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Staff";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const classes = useStyle();

  return (
    <>
      <Navbar />
          <Typography variant="h3" gutterBottom className={classes.topheading}>
            Deputy Registrar
          </Typography>    
            <Typography className={classes.topcard}>
              <PersonCard
                name={"Shri. Biju Mathew"}
                designation={"Deputy Registrar"}
                emailID={"dr@iiitt.ac.in"}
                phone={"9401144440"}
                src={"bijumathew.jpg"}
                src_type="staff"
                researchArea=""
              />
            </Typography>
            <Typography variant="h3" gutterBottom className={classes.topheading}>
              Outsourced Office Staff
            </Typography>
      <Typography gutterBottom className={classes.officestaff}>
        <Typography gutterBottom>
          <Grid container className={classes.head}>
          {staff_data.map((staff) => {
            const { name, designation, emailID, phone, src } = staff;
            return (
              <>
                <Grid item lg={4} md={4}>
                <PersonCard
                    name={name}
                    designation={designation}
                    emailID={emailID}
                    phone={phone}
                    src={src}
                    src_type="staff"
                    researchArea=""
                  />
                </Grid>
                
              </>
            );
          })}
          </Grid>
        </Typography>
        <Grid item xs={false} sm={1} />
        </Typography>
      <div style={{ height: "90px" }}></div>
      <Footer />
    </>
  );
}
