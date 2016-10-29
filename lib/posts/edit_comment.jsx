import React from 'react';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

class EditComment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      commentText: this.props.comment.commentText
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
   this.setState({commentText: e.target.value});
  }

  handleEdit(e){
    e.preventDefault();
    let id = this.props.comment._id;
    let postId = this.props.postId;
    let newCommentText = this.state.commentText;
    let username = this.props.comment.commentUser.username;
    let params = {
      comment: this.props.comment,
      commentParams: {
      id: id,
      postId: postId,
      newCommentText: newCommentText,
      username: username}
    };
    this.props.editComment(params);
    this.close();
  }


  render() {
    return (
      <div className='edit-comment-container'>
          <Button bsStyle="link" onClick={this.open}>Edit</Button>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl
                    componentClass="textarea"
                    onChange={this.handleChange}
                    value={this.state.commentText}  />
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button onClick={this.handleEdit}>Edit Comment</Button>
            </Modal.Footer>
          </Modal>
      </div>
    );
  }
}

export default EditComment;
