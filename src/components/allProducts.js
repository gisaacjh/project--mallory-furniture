import React, { Component } from 'react';

class AllProducts extends Component {
  render () {
    const nameProduct = this.props.data
    const name = nameProduct.map(obj => (<div className="item-container">
      <img className="item-image" src={obj.imageLink}></img>
      <p><strong>{obj.item}</strong></p>
      <p className="subtitle">$ {obj.price}</p>
    </div>)); 

    return (
      <div className="product-list">
        <h2>All Products</h2>
        <h4 className="subtitle">All available listings</h4>
        <div className="items">
          <a className="all-items-button">All items</a>
          <a className="on-sale-button">On Sale</a>
        </div>
        <div className="showing-items">
          <p className="number-of-products">{nameProduct.length}</p>
          <p className="subtitle">items showing</p>
        </div>
        <div className="product-list-container">
          <div className="box-products">
            {name}
          </div>
        </div>
      </div>
    );
  }
};

export default AllProducts
