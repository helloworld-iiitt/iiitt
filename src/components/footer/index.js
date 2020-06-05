import React from 'react';
import Icon from '@material-ui/core/Icon';
import './style.css'
import { css } from '@emotion/core';

/* Footer */ 
const Footer = () => {

    return(
        <div>
            <footer className="footer">
                <div >
                    <p className='credits'>&lt;/&gt; with <Icon id="favorite">favorite</Icon> by Web Dev-IIITT</p>
                </div>
            </footer>
        </div>
)}

export default Footer;
