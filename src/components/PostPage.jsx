import React, { Component } from "react";
import Post from "./Post";
import Comments from "./Comments";
import { firestore } from "../firebase";
import { getIDsAndDocs } from "../utilities";
import { withRouter } from "react-router-dom";
class PostPage extends Component {
  state = {
    post: null,
    comments: []
  };

  get postId() {
    return this.props.match.params.id;
  }

  get postRef() {
    return firestore.doc(`posts/${this.postId}`);
  }

  get commentsRef() {
    return this.postRef.collection("comments");
  }

  unsubscribeFromPost = null;
  unsubscribeFromComments = null;

  componentDidMount = async () => {
    this.unsubscribeFromPost = this.postRef.onSnapshot(snapshot => {
      const post = getIDsAndDocs(snapshot);

      this.setState({ post: post });
    });
    this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapshot => {
      const comments = snapshot.docs.map(getIDsAndDocs);
      this.setState({ comments });
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromPost = null;
    this.unsubscribeFromComments = null;
  }

  render() {
    const { post, comments } = this.state;
    console.log("POSTTTT", post);
    return (
      <section>
        {post && <Post {...post} />}
        {post && (
          <Comments onCreate={() => {}} comments={comments} postId={post.id} />
        )}
      </section>
    );
  }
}
export default withRouter(PostPage);
