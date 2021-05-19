import React, { Component } from 'react'
import '../css/Jumbo.css'
import notifyIcon from '../Assets/carbon_user-simulation.svg'

class Jumbo extends Component {
  state = {}
  render() {
    return (
      <div>
        <h4 id="header-text" className="text-center">
          Take the world’s cyber security classified with you
        </h4>
        <p id="adopt-top-rated" className="text-center">
          Adopt top rated cyber security products, reduce risk by opting for
          employee security trainings and much more!
        </p>
        <p id="notify-at-launch">
          Notify at Launch{' '}
          <img src={notifyIcon} id="notify-icon" className="mx-1 " />
        </p>
      </div>
    )
  }
}

export default Jumbo
