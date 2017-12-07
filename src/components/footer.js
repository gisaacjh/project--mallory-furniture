import React, { Component } from 'react'
import BlackLogo from "../images/mf-logo-black.svg"

class FooterView extends Component {
  render () {
    return (
      <div className="bottom">
        <hr/>
        <div className="footer-logo-container">
          <img src={BlackLogo}/>
          <hr/>
        </div>
        <div className="inline-footer-menu">
          <div className="footer-companies-and-categories">
            <ul className="footer-company">
              <caption>Company</caption>
              <li>About</li>
              <li>Press</li>
              <li>Terms + Conditions</li>
            </ul>
            <ul className="footer-categories">
              <caption>Categories</caption>
              <li>Seating</li>
              <li>Tables</li>
              <li>Misc</li>
            </ul>
          </div>
          <div className="social-networks">
            <ul>
              <caption>Social</caption>
              <ul className="socialmedia">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-pinterest-square" aria-hidden="true"></i>
            </ul>
            </ul>
          </div>
        </div>
      </div>

    );
  }
};

export default FooterView
