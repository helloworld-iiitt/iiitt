import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  themeText: {
    color: "#3f51b5",
  },
  sectionPadding: {
    padding: "1rem 0",
  },
  dept_desc: {
    paddingLeft: "0.5rem",
  },
});

export default function Departments() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Departments";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const [depts, setDepts] = useState(undefined);

  useEffect(() => {
    import("../../json/departments.json").then((d) => {
      setDepts(d.data);
    });
  }, []);

  const classes = createStyles();

  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={{ ...classes.themeText }}
            className={classes.themeText}
          >
            <Box component="span" fontWeight={380}>
              Departments
            </Box>
          </Typography>
          {depts &&
            depts.map((dept) => {
              return (
                <section className={classes.sectionPadding}>
                  <Typography
                    variant="h5"
                    className={classes.themeText}
                    gutterBottom
                  >
                    <Box component="span" fontWeight="fontWeightBold">
                      {dept.name}
                    </Box>
                  </Typography>
                  <Box
                    component="span"
                    fontSize="1.2em"
                    className={classes.dept_desc}
                    gutterBottom
                  >
                    {dept.description}
                  </Box>
                </section>
              );
            })}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
