import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class SignUpModal extends Component {
  state = { showModal: null }

  handleClose = () => this.setState({ showModal: false })
  handleShow = () => this.setState({ showModal: true })
  render() {
    return (
      <Modal
        show={this.props.displayModal}
        onHide={() => this.setState({ showModal: false })}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.setState({ showModal: false })}
          >
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SignUpModal
