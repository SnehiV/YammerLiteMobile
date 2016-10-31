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
    this.previewFile = this.previewFile.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  previewFile() {
    var preview = document.querySelector('#uploaded-image');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleChangeImage(e) {
    e.preventDefault();
    var file = document.querySelector('input[type=file]').files[0];
    let username = this.props.currentUser.username;
    this.props.changePhoto(username, file);
    this.close();
  }


  render() {
    return (
      <MenuItem onClick={this.open}>Change Profile Image
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Change Profile Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className= 'current-image'>
              Current Image:
              <img id='uploaded-image' src="" height="200" alt="Image preview..." />
            </div>
            <input type="file" onChange={this.previewFile} /><br />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button onClick={this.handleChangeImage}>Change Image</Button>
          </Modal.Footer>
        </Modal>
      </MenuItem>
    );
  }
}

export default ChangeProfileImage;
