import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDom from "react-dom";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  const imageUrl =
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

  const price = 10.99;

  const product = (
    <div>
      <img src={imageUrl} alt="Tacos With Lime" width="640" />
      <h2>Tacos With Lime</h2>
      <p>Price: {price}</p>
      <button type="button">Add to cart</button>
    </div>
  );

  ReactDom.render(product, document.getElementById("root"));
}

export default App;
