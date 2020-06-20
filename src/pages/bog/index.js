import React from 'react';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Card } from '@material-ui/core';
 
export default class BoG extends React.Component{

    componentWillUnmount()  {
        document.getElementsByTagName('title')[0].innerHTML = "IIIT Trichy";
      }
    
      componentDidMount() {
        document.getElementsByTagName('title')[0].innerHTML = "BoG | IIIT Tiruchirappalli";
      }
    
    render(){
      const bull = <span>•</span>;
        
        return(
            <>
            <Navbar />
            <div style={{width: "100%", padding: "35px"}}>
            <Typography variant="h2" component="h2" style={{color: "#3f51b5", paddingBottom: "1.5rem"}}>Board of Governors (BoG)</Typography>
            <Card variant="outlined">
            <Typography variant="h4" style={{color: "#000000", paddingBottom: "1.5rem",display:"flex", justifyContent:"center"}}>Members of Board of Governors (BoG)</Typography>
            
            <div >
            <table id="customers" style={{color: "#000000", width:"100%",borderCollapse:"collapse",paddingBottom: "1.5rem", justifyContent:"center" }}>
                <tr>
                  <th className="th">S.no</th>
                  <th className="th">Name</th>
                  <th className="th">Designation</th>
                </tr>
                <tr style={{alignItems:"center"}}>
                  <td className="td">abc</td>
                  <td className="td">xyz</td>
                  <td className="td">mno</td>
                </tr>
                
              </table>

            </div>

            </Card>
            </div>
            <Footer />
            </>

        );
    }
}