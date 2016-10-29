import React from 'react';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

class EditPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      postText: this.props.post.postText
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(e){
   this.setState({postText: e.target.value});
  }

  handleEdit(e){
    e.preventDefault();
    let id = this.props.post._id;
    let newPostText = this.state.postText;
    let username = this.props.post.postUser.username;
    let postParams = {id: id, newPostText: newPostText, username: username};
    this.props.editPost(postParams);
    this.close();
  }


  render() {
    return (
      <div className='edit-post-container'>
          <Button bsStyle="link" onClick={this.open}>Edit</Button>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl
                    componentClass="textarea"
                    onChange={this.handleChange}
                    value={this.state.postText}  />
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button onClick={this.handleEdit}>Edit Post</Button>
            </Modal.Footer>
          </Modal>
      </div>
    );
  }
}

export default EditPost;
