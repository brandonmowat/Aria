import React from 'react'
import '../styles/contact__styles.scss'

export default class ClassName extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="contactForm__wrapper">
        <h2>Contact Us</h2>
        <h4>We're always happy to help.</h4>
        <div className="form__wrapper">
          <form>
            <input placeholder="First Name"/>
            <input placeholder="Last Name"/>
            <br/>
            <input className="subject" placeholder="Subject"/>
            <br/>
            <textarea placeholder="Message"/>
          </form>
        </div>
      </div>
    )
  }
}
