import React from 'react';
import { Form, FormGroup, FormControl} from 'react-bootstrap';


class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      commentText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e){
   this.setState({commentText: e.target.value});
  }

  handleKeyPress(e){
    if (!e.shiftKey && (e.key === 'Enter')){
      let username = this.props.currentUser.username;
      let commentParams = {
        username: username,
        postId: this.props.post._id,
        commentText: this.state.commentText
      };
      this.props.newComment(commentParams);
      this.setState({commentText: ""});
    }
  }

  render() {
    return (
      <div className='comment-form-container'>
        <Form horizontal onKeyPress={this.handleKeyPress}>
          <FormGroup controlId="formControlsTextarea">
            <FormControl
              componentClass="textarea"
              placeholder="Create a new comment..."
              onChange={this.handleChange}
              value={this.state.commentText} />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
