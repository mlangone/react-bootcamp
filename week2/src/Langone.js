import React, { Component } from "react";

class Langone extends Component {
  render() {
    let name = prompt("What's your name");

    // This has curly's because it switches to vanilla javascript
    const Heading = () => {
      return <h1 className='entry-title'>{name}'s first custom React Page.</h1>;
    };

    function HeaderContainer() {
      return (
        <div id='pageContainer'>
          <Heading />
        </div>
      );
    }

    // Mapping over an array, def need more education on this
    // Mike England's way is so elegant, see if you can learn a thing Langone
    const likes = ["Learn", "Live", "Love", "Laugh"];

    const ThingsList = () => {
      const listItems = likes.map((like) => <li>{like}</li>);
      return <ul>{listItems}</ul>;
    };

    // No curly's becuase by this time js is back to jsx
    const PostBody = () => (
      <div id='postclass'>
        <p>
          This is the first time {name} has built a React Page from scratch.
        </p>
        <p>Here are some of the things I like to do:</p>
        <ThingsList />
      </div>
    );

    function PostContainer() {
      return (
        <div id='postContent'>
          <PostBody />
        </div>
      );
    }

    const Footer = () => (
      <footer>
        <p>
          Thanks for visiting visit me on Social I was going to make this a list
          of my social sites but I ran out of time 🤣🤣🤣
        </p>
      </footer>
    );
  }
}

function App() {
  return (
    <React.Fragment>
      <HeaderContainer />
      <PostContainer />
      <Footer />
    </React.Fragment>
  );
}

export default Langone;
