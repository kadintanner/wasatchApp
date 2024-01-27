import React from 'react';
import "../Styles/footer.css";
import whiteLogo from "../Images/whiteLogo.png"

const Footer = () => {
  return (
    <table className='footer'>

    <tr>
      <img src={whiteLogo} className="whiteLogo"/>
    </tr>

    <tr>
      <a 
        href="https://www.google.com/maps/place/Wasatch+Pro+Fitness+Supply/@40.6278036,-112.2190528,10z/data=!4m6!3m5!1s0x8752896143064ceb:0x3b1f749217ff7d3f!8m2!3d40.6278036!4d-111.889463!16s%2Fg%2F11hyk21wxx?entry=ttu">
        6801 S State St, Midvale, UT 84047
      </a>
    </tr>

    <tr>
      <h2>(801) 386-7750</h2>
    </tr>

    </table>
  );
}

export default Footer;
