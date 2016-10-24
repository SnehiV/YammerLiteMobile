import React from 'react';
import { Form, FormGroup, FormControl} from 'react-bootstrap';


class PostForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e){
   this.setState({postText: e.target.value});
  }

  handleKeyPress(e){
    if (!e.shiftKey && (e.key === 'Enter')){
      let username = this.props.currentUser.username;
      let postParams = {username: username, postText: this.state.postText};
      this.props.newPost(postParams);
      this.setState({postText: ""});
    }
  }

  render() {
    return (
      <div className='post-form-container'>
        <Form horizontal onKeyPress={this.handleKeyPress}>
          <FormGroup controlId="formControlsTextarea">
            <FormControl
              componentClass="textarea"
              placeholder="Create a new post...[Press Enter to submit and Shift+Enter to insert a new line]"
              onChange={this.handleChange}
              value={this.state.postText} />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default PostForm;
