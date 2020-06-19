import React from 'react';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index'
import Divider from '@material-ui/core/Divider';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
            <Typography class="title">Hello World</Typography>
            <Footer />
            </>

        );
    }
}