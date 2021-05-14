import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../css/Comingsoon.css'
import rightsvg from '../Assets/Illustration.svg'
import emailjs from 'emailjs-com'

class Coming extends Component {
  state = {
    email: '',
    noText: false,
    successMessage: false,
    emailExists: false,
  }

  sendEmail = async (e) => {
    e.preventDefault()
    if (this.state.email === '') {
      this.setState({ noText: true, email: '' })
      setTimeout(() => {
        this.setState({
          noText: false,
        })
      }, 1700)
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
      // const templateParams = {
      //   from_name: 'New user',
      //   to_name: 'New user',
      //   message: 'Newly Signed up email :' + this.state.email,
      //   reply_to: this.state.email,
      // }
      // emailjs
      //   .send(
      //     'service_rkdjewq',
      //     'template_0usaevo',
      //     templateParams,
      //     'user_gU749hFc5boPBMgmeAuHG',
      //   )
      //   .then(
      //     function (response) {
      //       console.log(response)
      //     },
      //     function (error) {
      //       console.log('FAILED.', error)
      //     },
      //   )
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xl={7}>
            <div style={{ width: '100%', height: 'auto' }}>
              <img
                className="coming-soon-image"
                src={rightsvg}
                alt="coming-soon-svg"
                style={{ objectFit: 'cover', width: '100%' }}
              />
            </div>
          </Col>
          <Col xl={5} style={{ backgroundColor: '#fafafa' }}>
            <div
              style={{
                backgroundColor: '#fafafa',

                height: 'auto',
              }}
            >
              <p id="findassured-text" className="text-center">
                FindAssured
              </p>
              <p id="comingsoon-text">Coming soon</p>

              <div className="d-flex justify-content-center mx-5">
                <form>
                  <input
                    id="email-form"
                    type="text"
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
                <div id="error-text" className="d-flex justify-content-center">
                  <p>Email field cannot be empty</p>
                </div>
              ) : (
                <div></div>
              )}
              {this.state.successMessage === true ? (
                <div
                  id="success-text"
                  className="d-flex justify-content-center"
                >
                  <p>You have successfully signed up to FindAssured.</p>
                </div>
              ) : (
                <div></div>
              )}
              {this.state.emailExists === true ? (
                <div id="success-text">
                  <p className="text-center">This email already exists.</p>
                </div>
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
      </Container>
    )
  }
}

export default Coming
