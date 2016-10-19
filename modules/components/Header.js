import React from 'react'
import { Link } from 'react-router'
import '../styles/header__styles.scss'
//require("./styles/styles.css");

export default class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="Header">
          <div className="siteHeader">
            <div className="siteHeader__section">
              <h1 className="logo">
                <img src="/assets/Aria_logo.svg"></img>
              </h1>
            </div>
            <div className="siteHeader__section">
              <nav>
                <Link to="/">Home</Link>
                <Link to="products">Products</Link>
                <Link to="installation">Installation</Link>
                <Link to="products">Buy Now</Link>
              </nav>
            </div>
          </div>
          <div className="headerInfo">
            <div className="headerInfo__section">

            </div>
            <div className="headerInfo__section">
              Minimalist design tailored for all surfaces.
            </div>
          </div>
        </div>
        {this.props.children}
        <div className="siteFooter">
          <div className="siteFooter__section">

          </div>
          <div className="siteFooter__section">
            <a>Privacy Policy</a>
            <a>Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    )
  }
}
