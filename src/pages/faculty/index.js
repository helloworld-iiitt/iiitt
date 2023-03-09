import React, { useEffect } from "react";
import Navbar from "./../../components/navbar/index";
import PersonCard from "./../../components/person_card/index.js";
import Footer from "./../../components/footer/index";
import fac_data from "../../json/faculty.json";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles({
  grp: {
    color: "#2e8b57",

    marginTop: "3rem",
    marginLeft: "1.3rem",
    marginRight: "0.8rem",
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
  const book = "C-StaffHandbook.pdf";
  const classes = useStyles();

  var branches = [];
  var grps = [];
  for (var grp in fac_data) {
    grps.push(grp);
    var li = [];
    li.push(
      fac_data[`${grp}`].map((x) => {
        const { name, emailID, src, designation, researchArea, id } = x;
        const { dept, deptID } = id;
        //console.log("Dept", dept, "key", deptID);
        return (
          <Grid item xs={12} md={6} lg={4}>
            <PersonCard
              name={name}
              emailID={emailID}
              src={src}
              src_type="faculty"
              designation={designation}
              researchArea={researchArea}
              dept={dept}
              deptID={deptID}
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
      <Typography
        align="center"
        variant="h5"
        className={classes.themeText}
        gutterBottom
      >
        <Box component="span" fontWeight="fontWeightBold">
          Faculty Rule book
        </Box>
      </Typography>
      <Typography align="center">
        <a
          href={require(`../../docs/${book}`)}
          download={`${book}`}
          className={`${classes.link} ${classes.subText}`}
        >
          <img
            src={require("../../images/news-icon.svg")}
            className={classes.download}
          />
          Faculty Rule book
        </a>
      </Typography>
      <Footer />
    </div>
  );
}
