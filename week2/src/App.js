import React from "react";
import HeaderContainer from "./components/HeaderContainer";
import PostContent from "./components/PostContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HeaderContainer />
      <PostContent />
      <Footer />
    </React.Fragment>
  );
}

export default App;
