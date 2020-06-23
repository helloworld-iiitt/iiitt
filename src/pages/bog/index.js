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
import bog_members from '../../json/bog_members.json';
import './style.css'
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
            <Card variant="outlined" >
            <Typography variant="h4" style={{color: "#000000", paddingBottom: "1.5rem",display:"flex", justifyContent:"center"}}>Members of Board of Governors (BoG)</Typography>
            
            //option 1 
            <div>
              <table className="table">
              <tr className="centered" items={bog_members.data}>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="tr">
                <td items={bog_members.sno}/>
                <td items={bog_members.name}/>
                <td items={bog_members.designation}/>
              </tr>
              </table>
            </div>

          //option 2 
          <div >
            {bog_members.map((members, index) => {
                return (
                  <table className="table">
                    <tr className="tr">
                      <th className="th" >S.no</th>
                      <th className="th" >Name</th>
                      <th className="th" >Designation</th>
                    </tr>
                    <tr className="centered">
                      <td>Maria Anders</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                    </tr>
                    <tr className="centered">
                      <td>Maria Anders</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                    </tr>
                  </table>
                )
              })}
          </div>

            </Card>
            </div>
            <Footer />
            </>

        );
    }
}