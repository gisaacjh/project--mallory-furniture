import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


class LandingContent extends Component {

  constructor() {
    super();

    this.state = {
      offered: []
    }
  }

  componentWillMount = () => {
    request
      .get('https://mallory-furniture-admin.now.sh/api/v1/products?featured=true')
      .then(data => {
        this.setState({
          offered: data.body
        })
  });
}

  render () {
console.log(this.state.offered);
    return (

        <div className="landing-section">
          <div className="brand-and-slogan">
            <h1>Mallory Furniture</h1>
            <h3>Your furniture is old.</h3>
            <h3>Our is older.</h3>
          </div>
          <div className="featured-products">
            <h2>Featured Products</h2>
            <h4 className="subtitle">Check out some of our favorite listings</h4>
          </div>
          <div className="favorite-products">

              <div className="item">
                <img></img>
                <p>mueble</p>
                <p>precio</p>
              </div>

          </div>
          <div>
            <Link to="/components/allProducts" className="all-products-link">All Products</Link>
          </div>
          <div>
            <h2>Browse by Categories</h2>
            <h4 className="subtitle">Explore by furniture type</h4>
          </div>
          <div className="furniture-type" >
            <a className="type">Seating</a>
            <a className="type">Tables</a>
            <a className="type">Desks</a>
            <a className="type">Bedroom</a>
          </div>
          <div className="furniture-type-2">
            <a className="type">Storage</a>
            <a className="type">Misc</a>
          </div>
      </div>

    );
  }
};

export default LandingContent
