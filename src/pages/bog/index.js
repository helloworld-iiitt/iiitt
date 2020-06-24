import React from 'react';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'
import { Typography, Card, responsiveFontSizes } from '@material-ui/core';
 
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
            <Typography variant="h2" component="h2" className="typography"
            style={{color: "#3f51b5", padding:"1.5rem"}}>Board of Governors (BoG)</Typography>
            <Card variant="outlined" className="card" >
            <Typography variant="h4" className="card_heading" style={{display:"flex", justifyContent:"center", padding:"1.5rem"}}>Members of Board of Governors (BoG)</Typography>
            <div>
              <table className="table">
                <thead>
                <tr className="tr">
                  <th className="th" >S.no</th>
                  <th className="th" >Name</th>
                  <th className="th" >Designation</th>
                </tr>
                </thead>
                <tbody>
                <tr className="centered">
                  <td>1</td>
                  <td>Shri. K. Shanmugam, I.A.SChief Secretary to GovernmentGovernment of Tamil NaduSecretariat, Chennai- 600 009</td>
                  <td>Chairperson</td>
                </tr>
                <tr className="centered">
                  <td>2</td>
                  <td>Dr. Rakesh SarwalAS (TE) & CVO118-C, Shastri BhawanMHRD, Government of IndiaNew Delhi – 110 115</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>3</td>
                  <td>Smt.Darshana M Dabral, I.A.S Joint Secretary & Financial Advisor, 120 C, Shastri BhawanMHRD, Government of India</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>4</td>
                  <td>Shri Mangat Ram Sharma, I.A.S Principal Secretary to Government,Higher Education Department,Government of Tamil Nadu,Secretariat, Chennai – 600 009</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>5</td>
                  <td>Shri.Prashant AgarwalDirector(IITs & IIITs), Department of Higher Education,MHRD, Government of India</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>6</td>
                  <td>Dr.Mini Shaji Thomas,Director,National Institute of Technology,Tiruchirappalli – 620 015</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>7</td>
                  <td>Dr.M.K.Surappa,Vice Chancellor,Anna University,Chennai – 600 025</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>8</td>
                  <td>Ms.N.S.Shobana, Chief Financial Officer,TAKE Solutions,No. 27, Tank Bund Road,Chennai - 600 028</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>9</td>
                  <td>Shri Ramkumar RamaurthyGroup Chief Executive (Tech. & Operations),Cognizant Technology Solutions India (P) Ltd,#5/535, Old Mahabalipuram Road,SDB 2 Building, Okkiam-Thoraipakkam, Chennai - 600 096</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>10</td>
                  <td>Shri. Srikantan MoorthyExecutive Vice President,Head Global Services – Application Development and Maintenance Infosys Ltd, Electronic CityHosur Road, Bengalaru-560 100</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>11</td>
                  <td>Dr. Krishnamurthy Kesavasamy,Head, Academic Interface Programme,TCS, Technopark Campus,Kariyavattom,Thiruvananthapuram - 695581</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>12</td>
                  <td>Shri. P.R.Venketrama Raja,Vice Chairman & Managing Director,Ramco Systems Limited,64, Sardar Patel Road,Tharamani, Chennai - 600 113</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>13</td>
                  <td>Shri M.Vijayakumar, I.A.S,Managing Director - ELCOTElectronics Corporation of Tamil Nadu Ltd 692 M.H.U Complex – II Floor,Anna Salai, Nandanam, Chennai - 600 035</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>14</td>
                  <td>Shri.K.Vivekanandan, I.A.S,Member Secretary - BOG (Transit Board)Commissioner of Technical EducationDirectorate of Technical Education,Chennai- 600 025</td>
                  <td>Member</td>
                </tr>
                <tr className="centered">
                  <td>15</td>
                  <td>Shri. N. Vittoba Deputy Registrar, IIITT</td>
                  <td>Secretary</td>
                </tr>
                </tbody>
              </table> 
            </div>
            <br/>
            </Card >

            <Card variant="outlined" className="card">
            <Typography variant="h4" className="card_heading" style={{display:"flex", justifyContent:"center", padding:"1.5rem"}}>BoG Meeting</Typography>
            <Divider  variant="middle" />
            <Typography variant="h6" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c1">Minutes of The Ninth Meeting of The Board of Governors</a></Typography>
            <Typography variant="h9" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c2">Minutes of The Ninth Meeting of The c2oard of Governors (Transit Board), held on 30 October, 2019 at 05:30PM.</a></Typography>
            <Divider variant="middle"/>
            <Typography variant="h6" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c1">Minutes of The Eighth Meeting of The Board of Governors</a></Typography>
            <Typography variant="h9" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c2">Minutes of The Eighth Meeting of The Board of Governors (Transit Board), held on 21 June, 2019 at 04:30PM.</a></Typography>
            <Divider variant="middle"/>
            <Typography variant="h6" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c1">Minutes of The Seventh Meeting of The Board of Governors</a></Typography>
            <Typography variant="h9" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c2">Minutes of The Seventh Meeting of The Board of Governors (Transit Board), held on 12 April, 2019 at 12:00PM.</a></Typography>
            <Divider variant="middle"/>
            <Typography variant="h6" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c1">Minutes of The Sixth Meeting of The Board of Governors</a></Typography>
            <Typography variant="h9" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c2">Minutes of The Sixth Meeting of The Board of Governors (Transit Board), held on 12 September, 2017 at 4PM.</a></Typography>
            <Divider variant="middle"/>
            <Typography variant="h6" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c1">Minutes of The Fifth Meeting of The Board of Governors</a></Typography>
            <Typography variant="h9" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c2">Minutes of The Fifth Meeting of The Board of Governors (Transit Board), held on 13 October, 2016 at 4PM.</a></Typography>
            <Divider variant="middle"/>
            <Typography variant="h6" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c1">Minutes of The Fourth Meeting of The Board of Governors</a></Typography>
            <Typography variant="h9" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c2">Proceedings of the Fourth Meeting of The Board of Governors (Transit Board), held on 2 February, 2016 at 5PM.</a></Typography>
            <Divider variant="middle"/>
            <Typography variant="h6" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c1">Minutes of The Third Meeting of The Board of Governors</a></Typography>
            <Typography variant="h9" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c2">Proceedings of the Third Meeting of The Board of Governors (Transit Board), held on 24 February, 2015 at 4:30PM.</a></Typography>
            <Divider variant="middle"/>
            <Typography variant="h6" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c1">Minutes of The Second Meeting of The Board of Governors</a></Typography>
            <Typography variant="h9" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c2">Proceedings of the Second Meeting of The Board of Governors (Transit Board), held on 12 November, 2014 at 5:30PM.</a></Typography>
            <Divider variant="middle"/>
            <Typography variant="h6" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c1">Minutes of The First Meeting of The Board of Governors</a></Typography>
            <Typography variant="h9" className="card_heading"><a href="src\docs\IIITT_9th_BOG_Minutes.pdf" className="c2">Proceedings of the First Meeting of The Board of Governors (Transit Board), held on 13 December, 2013 at 6PM.</a></Typography>
            <Divider variant="middle"/>
            <br/>
            </Card>
            </div>
            <Footer />
            </>

        );
    }
}
