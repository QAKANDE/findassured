import React, { Component } from 'react'
import footerLogoIcon from '../Assets/footer-logo.svg'
import '../css/Footer.css'
class Footer2 extends Component {
  state = {}
  render() {
    return (
      <div id="footer">
        <div className="left">
          <p>Copyright ©️ 2021 - FindAssured</p>
        </div>
        <div className="center">
          <div className="footer-logo">
            <img src={footerLogoIcon} alt="Footer logo" />
          </div>
        </div>
        <div className="right">
          <p>Contact Us:</p>
          <div className="links">
            <a href="#">LN</a>
            <a href="#">TW</a>
            <a href="#">ML</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer2
