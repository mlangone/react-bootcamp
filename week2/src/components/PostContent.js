import React, { Component } from "react";

class PostContent extends Component {
  render() {
    const likes = ["Learn", "Live", "Love", "Laugh"];

    const ThingsList = () => {
      const listItems = likes.map((like) => <li>{like}</li>);
      return <ul>{listItems}</ul>;
    };

    // No curly's becuase by this time js is back to jsx
    const PostBody = () => (
      <div id='postclass'>
        <p>
          This is the first time #HOW DO I GET NAME PASSED-- UGH!! has built a
          React Page from scratch.
        </p>
        <p>Here are some of the things I like to do:</p>
        <ThingsList />
      </div>
    );

    return (
      <div id='postContent'>
        <PostBody />
      </div>
    );
  }
}

export default PostContent;
