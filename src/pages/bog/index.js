import React from 'react';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index'
import Divider from '@material-ui/core/Divider';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

  

export default class BoG extends React.Component{

        

    componentWillUnmount()  {
        document.getElementsByTagName('title')[0].innerHTML = "IIIT Trichy";
      }
    
      componentDidMount() {
        document.getElementsByTagName('title')[0].innerHTML = "BoG | IIIT Tiruchirappalli";
      }
    
    render(){
    
        
        return(
            <>
            <Navbar />

            <Typography class="title">Board of Governors (BoG)</Typography>
            
            <Footer />
            </>

        );
    }
}