import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import WhiteLogo from '../images/mf-logo-white.svg';
import AllProducts from './allProducts.js';


class Heading extends Component {
  render () {
    return (

        <nav className="top-bar nav">
          <ul className="top-bar part1">
            <img src={WhiteLogo}/>
            <li>
              <Link to="/components/landing"className="top-bar part1">About</Link>
            </li>
            <li>
              <Link to="/components/termsAndCond" className="top-bar part1">Terms + Conditions</Link>
            </li>
            <li>|</li>
          </ul>
          <ul className="top-bar part2">
            <li>
              <Link to="/components/allProducts" className="top-bar part2">All</Link>
            </li>
            <li>Seating</li>
            <li>Tables</li>
            <li>Desk<a/></li>
            <li>Storage</li>
            <li>Bedroom</li>
            <li>Misc</li>
            <li>|</li>
          </ul>
          <ul className="top-bar cart">
          <a><i className="fa fa-cart-plus" aria-hidden="true"></i></a>
          </ul>
        </nav>

    );
  }
};

export default Heading
