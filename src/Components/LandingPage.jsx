import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Navbar from './Navbar'
import Jumbo from './Jumbo'
import '../css/LandingPage.css'

class LandingPage extends Component {
  state = {}
  render() {
    return (
      <>
        <div id="landing-wrapper">
          <Navbar />
          <Jumbo />
        </div>
      </>
    )
  }
}

export default LandingPage
