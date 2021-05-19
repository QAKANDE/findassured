import React, { Component } from 'react'
import { Row, Col, Card, CardDeck } from 'react-bootstrap'
import trainingLogo from '../Assets/ic_baseline-model-training.svg'
import simulationLogo from '../Assets/carbon_user-simulation.svg'
import solutionLogo from '../Assets/fluent_production-checkmark-24-regular.svg'
import '../css/AboutUs.css'

class AboutUs extends Component {
  state = {}
  render() {
    return (
      <div className="mt-5 container">
        <div className="d-flex justify-content-center">
          <h1 id="on-findassured-text">On FindAssured</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h2 id="one-platform-for-adopting">
            One platform for adopting more efficient security solutions{' '}
          </h2>
        </div>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={trainingLogo}
              style={{ width: '15%' }}
              className="icons"
            />
            <Card.Body>
              <Card.Title id="training-txt">Trainings</Card.Title>
              <Card.Text>
                <p id="training-txt-paragraph">
                  Enim elit aliquam sapien vel aliquam nisl fames tortor. Nisl
                  ut gravida varius tempor ultrices neque congue.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={solutionLogo}
              style={{ width: '15%' }}
              className="icons"
            />
            <Card.Body>
              <Card.Title id="training-txt">Solutions</Card.Title>
              <Card.Text>
                <p id="training-txt-paragraph">
                  Enim elit aliquam sapien vel aliquam nisl fames tortor. Nisl
                  ut gravida varius tempor ultrices neque congue.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={simulationLogo}
              style={{ width: '15%' }}
              className="icons"
            />
            <Card.Body>
              <Card.Title id="training-txt">Simulations</Card.Title>
              <Card.Text>
                <p id="training-txt-paragraph">
                  Enim elit aliquam sapien vel aliquam nisl fames tortor. Nisl
                  ut gravida varius tempor ultrices neque congue.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    )
  }
}

export default AboutUs
