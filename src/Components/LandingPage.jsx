import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import logo from '../Assets/Logo-Colored.svg'
import signUpLogo from '../Assets/signupicon.svg'
import SignUpModal from './SignUpModal'
import { Modal, Button } from 'react-bootstrap'
import '../css/LandingPage.css'

class LandingPage extends Component {
  state = {
    message: '',
    messageEmail: '',
    noMessageText: false,
    messageSuccess: false,
    showMessageModal: false,
    showModal: false,
    email: '',
    noText: false,
    successMessage: false,
    emailExists: false,
    emailError: false,
  }

  handleClose = () => this.setState({ showModal: false })
  handleShow = () => this.setState({ showModal: true })
  handleMessageClose = () => this.setState({ showMessageModal: false })
  handleMessageShow = () => this.setState({ showMessageModal: true })

  sendMessage = async (e) => {
    const messageDetails = {
      email: this.state.messageEmail,
      message: this.state.message,
    }
    e.preventDefault()
    if (this.state.messageEmail && this.state.message === '') {
      this.setState({ noMessageText: true })
      setTimeout(() => {
        this.setState({
          noMessageText: false,
        })
      }, 1500)
    } else {
      const response = await fetch(
        'http://localhost:3003/comingsoon/new-message',
        {
          method: 'POST',
          body: JSON.stringify(messageDetails),
          headers: {
            'Content-Type': 'Application/json',
          },
        },
      )
      const details = await response.json()
      if (details.message === 'Message sent') {
        this.setState({
          message: '',
          messageEmail: '',
          messageSuccess: true,
        })
        setTimeout(() => {
          this.setState({
            messageSuccess: false,
          })
        }, 1500)
        setTimeout(() => {
          this.setState({
            showMessageModal: false,
          })
        }, 1000)
      }
    }
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
    }
    // else if (emailCheck1 && emailCheck2 === false) {
    // //   this.setState({
    // //     emailError: true,
    // //   })
    // //   setTimeout(() => {
    // //     this.setState({
    // //       emailError: false,
    // //     })
    // //   }, 1200)
    // // }
    else {
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
        }, 1500)
        setTimeout(() => {
          this.setState({
            showModal: false,
          })
        }, 1000)
      } else {
        alert('An error occured')
      }
    }
  }

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
                <li onClick={() => this.handleMessageShow()}>
                  <a>Talk with Us</a>
                </li>
                <li onClick={() => this.handleShow()}>
                  <a class="navbar-btn">Get Notified</a>
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
            <a id="notify-at-launch-text" onClick={() => this.handleShow()}>
              Notify At Launch <img src={signUpLogo} />
            </a>
          </div>
        </div>
        <Modal
          show={this.state.showModal}
          onHide={() => this.handleClose()}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body id="modal-wrapper">
            <div id="close-modal-button" onClick={() => this.handleClose()}>
              X
            </div>
            <div>
              <p id="sign-up-text-modal">
                We’re excited that you’ve shown interest in our product and most
                importantly, security! Our team is working hard to ensure that
                we launch soon, and couldn’t be happier to inform you. See you
                on the inside! 👋
              </p>
            </div>

            <div className="d-flex justify-content-center">
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
                  <button id="signup-button" onClick={(e) => this.sendEmail(e)}>
                    SIGN ME UP
                  </button>
                </div>
              </form>
            </div>
            {this.state.noText === true ? (
              <p className="text-center mt-3" id="empty-field">
                Email field cannot be empty
              </p>
            ) : (
              <div></div>
            )}
            {this.state.emailError === true ? (
              <p id="empty-field" className="text-center mt-3">
                Please enter a valid email
              </p>
            ) : (
              <div></div>
            )}
            {this.state.successMessage === true ? (
              <p id="success-text" className="text-center mt-3">
                You have successfully signed up to FindAssured.
              </p>
            ) : (
              <div></div>
            )}
            {this.state.emailExists === true ? (
              <p className="text-center mt-3" id="already-exist-text">
                This email already exists.
              </p>
            ) : (
              <div></div>
            )}
            <div>
              <p id="sign-up-last-text-modal">
                We’re security conscious too, so we promise to never spam you,
                ever!
              </p>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.showMessageModal}
          onHide={() => this.handleMessageClose()}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body id="modal-wrapper">
            <div
              id="close-modal-button"
              onClick={() => this.handleMessageClose()}
            >
              X
            </div>
            <div>
              <p id="sign-up-text-modal">Have something to say to us ?</p>
            </div>

            <div className="d-flex justify-content-center">
              <form>
                <input
                  id="message-email"
                  type="email"
                  placeholder="Enter your email"
                  value={this.state.messageEmail}
                  onChange={(e) =>
                    this.setState({ messageEmail: e.currentTarget.value })
                  }
                ></input>
                <textarea
                  id="send-message-form"
                  rows="4"
                  cols="50"
                  type="text"
                  value={this.state.message}
                  placeholder="Type your message here"
                  onChange={(e) =>
                    this.setState({ message: e.currentTarget.value })
                  }
                ></textarea>
                <div className="d-flex justify-content-center">
                  <button
                    id="sendMessageButton"
                    onClick={(e) => this.sendMessage(e)}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
            {this.state.noMessageText === true ? (
              <p className="text-center mt-3" id="empty-field">
                Fields cannot be empty
              </p>
            ) : (
              <div></div>
            )}
            {/* {this.state.emailError === true ? (
              <p id="empty-field" className="text-center mt-3">
                Please enter a valid email
              </p>
            ) : (
              <div></div>
            )} */}
            {this.state.messageSuccess === true ? (
              <p id="success-text" className="text-center mt-3">
                We have received your message.We will get back to you shortly.
              </p>
            ) : (
              <div></div>
            )}
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default LandingPage
