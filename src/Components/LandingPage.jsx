import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import logo from '../Assets/Logo-Colored.svg'
import signUpLogo from '../Assets/signupicon.svg'
import '../css/LandingPage.css'

class LandingPage extends Component {
  state = {}
  render() {
    return (
      <>
        <div id="hero">
          <div className="navigation">
            <div className="logo">
              <img src={logo} alt="Primary logo" />
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <a href="#">Talk with Us</a>
                </li>
                <li>
                  <a href="#" className="navbar-btn">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="intro">
            <h1>
              Take the world’s cyber <br></br>security classified with you
            </h1>
            <p>
              Adopt top rated cyber security products, reduce risk by opting for{' '}
              <br></br>
              employee security trainings and much more!
            </p>
            <a id="notify-at-launch-text">
              Notify At Launch <img src={signUpLogo} />
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default LandingPage
