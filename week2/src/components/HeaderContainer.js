import React from "react";

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

export default HeaderContainer;
