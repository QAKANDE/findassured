import React, { Component } from 'react'
import logo from '../Assets/Logo-Colored.svg'
import { Container } from 'react-bootstrap'
import '../css/Navbar.css'

class Navbar extends Component {
  state = {}
  render() {
    return (
      <Container>
        <div className="d-flex justify-content-between">
          <img src={logo} style={{ width: '10%' }} />
          <div className="pt-4 pb-4">
            <a id="talk-with-us-text">Talk with Us</a>
            <button className="mx-5" id="sign-up-button">
              Sign Up
            </button>
          </div>
        </div>
        <hr></hr>
      </Container>
    )
  }
}

export default Navbar
