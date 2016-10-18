import React, { Component } from 'react';
import '../styles/pages/_product__styles.scss';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      colour: 'Black'
    }
  }

  _setColour(e) {
    this.setState({
      colour: e.target.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="product-wrapper">
        <div className="product-container">
          <div className="col-2-5">
            <img className="img" src="/assets/vent.png"/>
          </div>
          <div className="col-1-3 w-padding border-right">
            <h3>Aria 4×10”</h3>
            <h3>$99.00 CAD</h3>
            <form action="">
              <div>
                <input
                  onChange={this._setColour.bind(this)}
                  type="radio"
                  name="colour"
                  value="Black"
                  checked={this.state.colour == "Black"}
                />
                <p>Black</p>
              </div>
              <div>
                <input
                  onChange={this._setColour.bind(this)}
                  type="radio"
                  name="colour"
                  value="White"
                />
                <p>White</p>
              </div>
            </form>
          </div>
          <div className="col-1-3 w-padding">
            <h6>Manufactured in Canada</h6>
            <p className="made-in">Fitted for a standard 4" x 10" air vent opening. The integrated vent can be installed top mounted or under mounted. Secure insert with your tile surface to customize vent.</p>
            <h6 className="sub-section">Applications</h6>
            <p className="made-in">Floor, wall and ceiling. Installation</p>
            <h6 className="sub-section">Note: Surface for tile insert is not included with product.</h6>
          </div>
        </div>
      </div>
    )
  }
}
