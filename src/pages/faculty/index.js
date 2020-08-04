import React, { useEffect } from "react";
import Navbar from "./../../components/navbar/index";
import PersonCard from "./../../components/person_card/index.js";
import Footer from "./../../components/footer/index";
import fac_data from "../../json/faculty.json";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grp: {
    color: "#3f51b5",
    marginTop: "0.5rem",
    marginLeft: "1.3rem",
  },
});

export default function Faculty(props) {
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
  for (var grp in fac_data) {
    grps.push(grp);
    var li = [];
    li.push(
      fac_data[`${grp}`].map((x) => {
	const { name, emailID, src, designation, researchArea } = x;
	return (
	  <Grid item xs={12} md={6} lg={4}>
	    <PersonCard
	      name={name}
	      emailID={emailID}
	      src={src}
	      src_type='faculty'
	      designation={designation}
	      researchArea={researchArea}
	    />
	  </Grid>
	);
      })
    );
    branches.push(li);
  }

  return (
    <>
      <Navbar />
      <Grid container>
	<Grid item xs={false} sm={1} />
	<Grid container item xs={12} sm={10}>
	  {branches.map((x, ind) => {
	    return (
	      <>
		<Grid item sm={12}>
		  <Typography
		    variant="h3"
		    component="h3"
		    className={classes.grp}
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
    </>
  );
}
