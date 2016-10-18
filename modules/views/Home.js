import React from 'react'
import '../styles/home__styles.scss'

export default class Home extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="home__wrapper">
        <div className="grid">
          <div className="grid-3-5">
            <div style={{height: 300}}></div> {/* Photo placeholder */}
            <h5>Modern design for the modern floor.</h5>
          </div>
          <div className="grid-2-5">
            <div style={{height: 300}}></div> {/* Photo placeholder */}
            <h5>Learn More</h5>
          </div>
        </div>
      </div>
    )
  }
}
