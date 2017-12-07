import React, { Component } from 'react'

class SingleView extends Component {
  render () {
    return (
      <div className="one-item">
        <div>
          <img></img>
        </div>
        <div className="info-one-item">
          <h3>product name</h3>
          <p>$cost</p>
          <hr className="subtitle-1"/>
          <div>
              <p>condition</p>
          </div>

        </div>
      </div>
    );
  }
};

export default SingleView
