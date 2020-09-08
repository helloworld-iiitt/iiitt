import React, { useState, useEffect } from "react";
import Navbar from "./../../components/navbar/index";
import Footer from "./../../components/footer/index";
import bio_data from "../../json/biographies.json";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";



export default function Biography(props){
  //TODO: fetch the data and display here
  let param = window.location.pathname;
  //console.log(param);

  const [details, dept, id] = param.split("/").filter(Boolean);
  //console.log(details, dept, id);

  
  const info = bio_data[dept].find((data) => data.deptID === id);
  console.log(info)

  return (
    <div>
      <Navbar />
      <div>
        <img
          src={require(`../../images/people/faculty/${info.src}`)}
          alt={info.name}
        />
      </div>
      <h1>{info.deptID}</h1>
      <h1>{info.name}</h1>
    </div>
  );
}