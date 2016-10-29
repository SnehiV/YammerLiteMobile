import { connect } from 'react-redux';
import { createComment, editComment } from './post_actions.js';
import Comments from './comment_feed';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  newComment: (commentParams) => dispatch(createComment(commentParams)),
  editComment: (commentParams) => dispatch(editComment(commentParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
