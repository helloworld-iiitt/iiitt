import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import ReactDOM from 'react-dom';
import Navbar from '../../components/navbar/index';
import PaperCard from '../../components/papercard/index'
import MainCarousel from '../../components/carousel/index';
import MissionVision from '../../components/mission_vision/index'
import Marquee from '../../components/marquee/index'
import Footer from '../../components/footer/index'
import Divider from '@material-ui/core/Divider';
import news from '../../json/news.json';
import './style.css'
import carouselData from '../../json/homeCarousel.json'
import { Typography, Card } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';

export default class Industry_Partners extends React.Component{

    componentWillUnmount()  {
        document.getElementsByTagName('title')[0].innerHTML = "IIIT Trichy";
      }
    
      componentDidMount() {
        document.getElementsByTagName('title')[0].innerHTML = "Industry Partners | IIIT Tiruchirappalli";
      }

      myfunction() {
        ;
  }

      render(){
        const bull = <span>•</span>;
        return(
            <>
            <Navbar />
            <div style={{width: "100%", padding: "35px"}}>
            <Typography variant="h2" component="h2" className="typography" style={{color: "#3f51b5", padding:"1.5rem"}}>Industry Partners</Typography>
            <Card className="card">
            <Typography className="content">Industry partners of IIIT Trichy includes <a  className="link" href="https://www.tcs.com/" target="blank">Tata Consultancy Services(TCS)</a>, <a className="link" href="https://www.cognizant.com/" target="blank">Cognizant Technology Solutions (CTS)</a>, <a  className="link" href="https://www.infosys.com/" target="blank">Infosys</a>, <a className="link" href="https://www.ramco.com/" target="blank">Ramco Systems</a>, <a className="link" href="https://www.elcot.in/" target="blank">ELCOT</a>, and <a className="link" href="https://www.navitaslifesciences.com/" target="blank">Navitas (TAKE Solutions)</a>.</Typography>
            </Card>
            
            <Card className="card">
            <Typography variant="h6" component="h2" className="typography" style={{color: "#3f51b5", padding:"1.5rem"}}>Tata Consultancy Services</Typography>
            <Typography className="content"> TCS is one of the largest Indian companies by market capitalization ($80 billion). TCS is now placed among the ‘Big 4’ most valuable IT services brands worldwide. TCS alone generates 70% dividends of its parent company, Tata Sons. In 2015, TCS is ranked 64th overall in the Forbes World's Most Innovative Companies ranking, making it both the highest-ranked IT services company and the top Indian company. It is the world's 10th largest IT services provider by revenue. As of December 2015, it is ranked 10th on the Fortune India 500 list. On 12 January 2017, N.Chandrashekaran was elevated as the chairman for Tata Sons .</Typography>    
            <Button href="https://www.tcs.com/" src="src\images\tcs-logo.svg" target="blank"  className="image" style={{display:"flex", justifyContent:"centre"}}>TCS</Button>
            </Card>

            <Card className="card">
            <Typography variant="h6" component="h2" className="typography" style={{color: "#3f51b5", padding:"1.5rem"}}>Cognizant Tecchnology Solutions (CTS)</Typography>
            <Typography className="content"> Cognizant is an American multinational corporation that provides digital, technology, consulting, and operations services. It is headquartered in Teaneck, New Jersey, United States. Cognizant is listed in the NASDAQ-100 and the S&P 500 indices. It was founded as an in-house technology unit of Dun & Bradstreet in 1994, and started serving external clients in 1996. It made an initial public offering in 1998, after a series of corporate splits and restructures of its parent companies. It was the first software services firm listed on the NASDAQ. During the dot com bust, it grew by accepting the application maintenance work that the bigger players were unwilling to perform. Gradually, it ventured into application development, complex systems integration and consulting work. Cognizant had a period of fast growth during the 2000s, becoming a Fortune 500 company in 2011. In 2015, the Fortune magazine named it as the world's fourth most admired IT services company.</Typography>    
            <Button href="https://www.cognizant.com/" src="" target="blank"  className="image" style={{display:"flex", justifyContent:"centre"}}>CTS</Button>
            </Card>

            <Card className="card">
            <Typography variant="h6" component="h2" className="typography" style={{color: "#3f51b5", padding:"1.5rem"}}>Infosys</Typography>
            <Typography className="content">Infosys Limited (formerly Infosys Technologies Limited) is an Indian multinational corporation that provides business consulting, information technology and outsourcing services. It has its headquarters in Bengaluru, India. Infosys is the second-largest Indian IT services company by 2016 revenues, and the largest employer of H-1B visa professionals in the United States. On January 12, 2017, its market capitalisation was $34.38 Billion.</Typography>    
            <Button href="https://www.infosys.com/" src="" target="blank"  className="image" style={{display:"flex", justifyContent:"centre"}}>Infosys</Button>
            </Card>

            <Card className="card">
            <Typography variant="h6" component="h2" className="typography" style={{color: "#3f51b5", padding:"1.5rem"}}>Ramco Systems</Typography>
            <Typography className="content"> Ramco Systems Limited is a software products and services provider incorporated in India. Ramco Systems is a provider of Enterprise Resource Planning, Human Capital Management, Logistics and Aviation Maintenance & Engineering (M&E) & Maintenance Repair & Overhaul (MRO) Software. Customers include Dabur, Kerzner, Norske Skog, Mother Dairy, Vopak, Khimji Ramdas, Dynamic Aviation, Redtag, MHW,Malaysia Airlines, Emirates, GoAir, Air Tahiti, Caribbean Airlines, Hevilift, and others. P.R Venkatarama Raju, established Ramco Systems in 1992. Ramco Systems is present in India, United States, UK, Germany, Switzerland, Middle East, Kenya, Nigeria, South Africa, Australia, New Zealand, Singapore.</Typography>    
            <Button href="https://www.ramco.com/" src="" target="blank"  className="image" style={{display:"flex", justifyContent:"centre"}}>Ramco Systems</Button>
            </Card>

            <Card className="card">
            <Typography variant="h6" component="h2" className="typography" style={{color: "#3f51b5", padding:"1.5rem"}}>ELCOT</Typography>
            <Typography className="content">The Electronics Corporation of Tamil Nadu Limited (ELCOT) is a South Indian, public sector undertaking, established on 21 March 1977. ELCOT functions to promote, establish and run State Public Sector Enterprises for Electronic items; manage, supervise, finance, advise, assist, aid or collaborate with any private and public associations, firms, companies, enterprises, undertakings, institutions, and schemes for the advancement and development of electronics and information technology. It is considered the back office for the Information Technology Department of the Government of Tamil Nadu, and functions to implement the Government's E-Governance initiative. </Typography>    
            <Button href="https://www.elcot.in/" src="" target="blank"  className="image" style={{display:"flex", justifyContent:"centre"}}>ELCOT</Button>
            </Card>

            <Card className="card">
            <Typography variant="h6" component="h2" className="typography" style={{color: "#3f51b5", padding:"1.5rem"}}>Navitas (TAKE Solutions)</Typography>
            <Typography className="content">Navitas, the dedicated life sciences company of TAKE Solutions, harnesses the combined knowledge and experience of three legacy companies—Ecron Acunova, Navitas, and Intelent—to provide end-to-end services and solutions. It help its clients to address their most critical problems by bringing together the capabilities of a full-service CRO, a technology-led life sciences services provider across clinical, regulatory and safety, and a life sciences big data services and analytics provider. </Typography>    
            <Button href="https://www.navitaslifesciences.com/" src="" target="blank"  className="image" style={{display:"flex", justifyContent:"centre"}}>Navitas</Button>
            </Card>

            <Card className="card">
            <Typography className="content">The Department of Training and Placement is proposed to bring in the services of Industry Partners to help, co-ordinate and arrange for campus placement opportunities to the UG and PG students.</Typography>    
            <Typography className="lastline">The advantage of IIIT Trichy is that Industry Partners are one of the stake holders of the Institute. These Industry Partners are willing to offer internships to students during their studies to enrich their programming skills and application of ideas to projects, etc.</Typography>
            </Card>

            </div>
            <Footer/>
            </>
        );
      }
}