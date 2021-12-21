import React, { useEffect } from "react";
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import { Grid, Typography } from "@material-ui/core";
import PersonCard from "../../components/person_card/index";
import { makeStyles } from "@material-ui/core/styles";

const staff_data = require("../../json/staff.json").data;

const useStyle = makeStyles({
  title: {
    color: "#2e8b57",
    textDecoration:"none",
    width:"30rem",
    textAlign:"left",
    paddingLeft:"2rem"
  },
  head: {
    marginTop:"5rem",
    display:"flex",
    justifyContent:"center",
  },
  officestaff: {
    marginTop: "-2.5rem",
    paddingLeft:"4rem",
    textAlign:"center",
  }
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
      <Grid container className={classes.head}>
      <Typography gutterBottom >
        <Grid item xs={false} sm={1} />
        <Grid container item xs={12} sm={10}>
        {/* <Grid item xs={12} sm={10}>
            <Typography variant="h2" gutterBottom className={classes.title}>
              Office staff
            </Typography>
          </Grid> */}
          <Typography gutterBottom className={classes.officestaff}>
          {staff_data.map((staff) => {
            const { name, designation, emailID, phone, src } = staff;
            return (
              <>
              <Grid item xs={12} sm={10}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              {staff.head}
            </Typography>
          </Grid>
                <Grid item xs={12} sm={6}>
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
          </Typography>
        </Grid>
        <Grid item xs={false} sm={1} />
        </Typography>
      </Grid>
      <div style={{ height: "90px" }}></div>
      <Footer />
    </>
  );
}
