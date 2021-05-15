import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../css/Comingsoon.css'
import rightsvg from '../Assets/Illustration.svg'

class Coming extends Component {
  state = {
    email: '',
    noText: false,
    successMessage: false,
    emailExists: false,
    emailError: false,
  }

  sendEmail = async (e) => {
    e.preventDefault()
    const emailCheck1 = this.state.email.includes('@')
    const emailCheck2 = this.state.email.includes('.com')
    if (this.state.email === '') {
      this.setState({ noText: true, email: '' })
      setTimeout(() => {
        this.setState({
          noText: false,
        })
      }, 1700)
    } else if (emailCheck1 && emailCheck2 === false) {
      this.setState({
        emailError: true,
      })
      setTimeout(() => {
        this.setState({
          emailError: false,
        })
      }, 1200)
    } else {
      const response = await fetch(
        'http://localhost:3003/comingsoon/new-email',
        {
          method: 'POST',
          body: JSON.stringify({ email: this.state.email }),
          headers: {
            'Content-Type': 'Application/json',
          },
        },
      )
      const details = await response.json()
      if (details.message === 'Email already exists') {
        this.setState({
          emailExists: true,
          email: '',
        })
        setTimeout(() => {
          this.setState({
            emailExists: false,
          })
        }, 1200)
      } else if (details.message === 'New user signed up') {
        this.setState({
          successMessage: true,
          email: '',
        })
        setTimeout(() => {
          this.setState({
            successMessage: false,
          })
        }, 1200)
      } else {
        alert('An error occured')
      }
    }
  }
  render() {
    return (
      <div className="container">
        <Row>
          <Col
            xl={7}
            id="left-col"
            style={{ width: '55%', position: 'relative' }}
          >
            <div
              style={{
                width: '55%',
                height: 'auto',
                position: 'absolute',
                right: '0',
                bottom: '0',
              }}
            >
              <img
                className="coming-soon-image"
                src={rightsvg}
                alt="coming-soon-svg"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </Col>
          <Col
            xl={5}
            style={{
              backgroundColor: '#fafafa',
              height: '100vh',
              width: '100%',
            }}
            id="right-col"
          >
            <div style={{ margin: '0 auto', width: '100%' }}>
              <p id="findassured-text" className="text-center">
                FindAssured
              </p>
              <p id="comingsoon-text">Coming soon</p>

              <div className="d-flex justify-content-center mx-5">
                <form>
                  <input
                    id="email-form"
                    type="email"
                    placeholder="mail@yourdomain.com"
                    value={this.state.email}
                    onChange={(e) =>
                      this.setState({ email: e.currentTarget.value })
                    }
                  ></input>
                  <div className="d-flex justify-content-center">
                    <button
                      id="signup-button"
                      onClick={(e) => this.sendEmail(e)}
                    >
                      SIGN ME UP
                    </button>
                  </div>
                </form>
              </div>
              {this.state.noText === true ? (
                <p
                  style={{ color: 'red', fontWeight: 'Bolder' }}
                  className="text-center mt-3"
                >
                  Email field cannot be empty
                </p>
              ) : (
                <div></div>
              )}
              {this.state.emailError === true ? (
                <p
                  style={{ color: 'red', fontWeight: 'Bolder' }}
                  className="text-center mt-3"
                >
                  Please enter a valid email
                </p>
              ) : (
                <div></div>
              )}
              {this.state.successMessage === true ? (
                <p
                  style={{ color: 'green', fontWeight: 'Bolder' }}
                  className="text-center mt-3"
                >
                  You have successfully signed up to FindAssured.
                </p>
              ) : (
                <div></div>
              )}
              {this.state.emailExists === true ? (
                <p
                  className="text-center mt-3"
                  style={{ color: 'Grey', fontWeight: 'Bolder' }}
                >
                  This email already exists.
                </p>
              ) : (
                <div></div>
              )}
              <p id="collect-email-text" className="text-center">
                We collect emails to enable us set you up quicky when we launch.
                We promise never to spam you at all!
              </p>
              <Row style={{ marginTop: '5rem' }}>
                <Col>
                  <p id="security-tools">Security tools</p>
                  <p id="optimized-text">
                    Optimized tools will help you keep your infrastructure up &
                    running without worrying about threats.
                  </p>
                </Col>
                <Col>
                  <p id="training-text">Trainings</p>
                  <p id="interactive-training">
                    Interactive trainings and workshops for your staff, to
                    provide insight on threats and how to avoid being a victim.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Coming
