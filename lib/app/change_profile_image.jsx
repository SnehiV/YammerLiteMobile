import React from 'react';
import { MenuItem, Button, Modal } from 'react-bootstrap';

class ChangeProfileImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }


  render() {
    return (
      <MenuItem onClick={this.open}>Change Profile Image
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Change Profile Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button onClick={this.close}>Change Image</Button>
          </Modal.Footer>
        </Modal>
      </MenuItem>
    );
  }
}

export default ChangeProfileImage;
