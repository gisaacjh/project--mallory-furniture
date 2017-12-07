import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import Heading from './components/header.js';
import FooterView from './components/footer.js';
import LandingContent from './components/landing.js';
import Terms from './components/termsAndCond.js';
import AllProducts from './components/allProducts.js';
import SingleView from './components/single-product.js';
import request from 'superagent';

class MalloryWeb extends Component {

  constructor() {
    super();

    this.state = {
      products: []
    }
  }

  componentWillMount = () => {
    request
      .get('https://mallory-furniture-admin.now.sh/api/v1/products')
      .then(data => {
        this.setState({
          products: data.body
        })
  });
}


  render() {
console.log(this.state.products);
    return (
      <div className="MalloryWeb">
        <header>
          <Heading />
        </header>
        <div>
          <Switch>
            <Route exact path="/components/landing" render={props => <LandingContent data={this.state.products} />} />
            <Route exact path="/components/termsAndCond" component={Terms} />
            <Route exact path="/components/allProducts" render={props => <AllProducts data={this.state.products} />} />
            <Route exact path="/components/single-product" component={SingleView} />
          </Switch>
        </div>
        <div>
          <FooterView />
        </div>
      </div>
    );
  }
}

export default MalloryWeb;
