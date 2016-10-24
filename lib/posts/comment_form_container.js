import { connect } from 'react-redux';
import { createComment } from './post_actions.js';
import CommentForm from './comment_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  newComment: (commentParams) => dispatch(createComment(commentParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
