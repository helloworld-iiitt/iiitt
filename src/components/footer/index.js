import React from 'react';
import Icon from '@material-ui/core/Icon';
import './style.css'
import { css } from '@emotion/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

/* Footer */
const Footer = () => {

    return(
        <div>
            <footer className="footer">
            <div className="main-div">
            <div className="contact-main">
            <div className="contacts">
            <div className="logo">
                <img src={require("./logo.png")} alt="logo"></img>
            </div>
            <h2>Indian Institute Of Information Technology</h2>
            <h3>Trichy Dindigul Highway,Pirattiyur,Tiruchirapala-620009</h3>
             <a href="office@iiitt.ac.in">office@iiitt.ac.in</a>
             <a href="office@iiitt.ac.in">+91 431 2500 539</a>
            </div>
                 <div className="icon" >
                 <div className="icon-bg"><TwitterIcon className="twitter"/></div>
                  <div className="icon-bg"><FacebookIcon className="facebook"/></div>
                   <div className="icon-bg"><LinkedInIcon className="linkedin"/></div> </div>
              </div>
              <div className="line"></div>
            <div className="acedemics">
            <h2>Academics</h2>
                     <a href="www.google.com">Programs</a>
                     <hr></hr>
                      <a href="www.google.com">Department</a>
                      <hr></hr>
                       <a href="www.google.com">Curriculum</a>
                       <hr></hr>
                        <a href="www.google.com">Calender</a>
            </div>
            <div className="line"></div>
            <div className="quick-explore">
            <h2>Quick Explore</h2>
                 <a href="www.google.com">Admission Procedure</a>
                 <hr></hr>
                  <a href="www.google.com">Fee Structure</a>
                  <hr></hr>
                   <a href="www.google.com">Anti Ragging Committee</a>
                   <hr></hr>
                    <a href="www.google.com">FAQ's</a>
            </div>
            </div>
            <div >
                 <p className='credits'>&lt;/&gt; with <Icon id="favorite">favorite_border</Icon> by Web Dev-IIITT</p>
             </div>
            </footer>
        </div>
)}

export default Footer;
