import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../css/WhyUs.css'
import explore from '../Assets/Explore.svg'
import solutionLogo from '../Assets/fluent_production-checkmark-24-regular.svg'
import signUpLogo from '../Assets/signupicon.svg'

class WhyUs extends Component {
  state = {}
  render() {
    return (
      <div id="wrapper">
        <div className="container">
          <Row>
            <Col xl={5} id="left-col">
              <img src={explore} id="explore-icon" />
            </Col>
            <Col xl={7} id="right-col">
              <p id="why-findassured-header">Why FindAssured?</p>
              <h2 id="why-findassured-subheader">
                A smarter move for security conscious organizations
              </h2>
              <p id="why-findassured-paragragh">
                Et, feugiat malesuada in mauris consectetur semper. Massa,
                fringilla neque quisque quis. Feugiat sed non interdum turpis
                orci, diam ultricies blandit. Amet, lectus dui quis non
                fermentum aliquet. Cursus sollicitudin consectetur sem imperdiet
                rhoncus, purus massa eu tincidunt. Ultricies habitant est
                aliquam facilisis. Risus sed sed amet, fringilla interdum dolor
                a congue. In cursus eget id urna bibendum tellus mattis. Mi amet
                ultricies vestibulum vehicula at massa. Faucibus laoreet ornare
                faucibus eget vitae augue accumsan, volutpat. Molestie amet a
                nunc urna.
              </p>

              <a id="sign-up-text">
                <p>
                  Sign Up <img src={signUpLogo} />
                </p>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default WhyUs
