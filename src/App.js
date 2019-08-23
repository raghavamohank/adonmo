import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageUpload from "./components/ImageUpload";
import Resize from "./components/Resize";
import CreateGif from "./components/Gif/CreateGif";

function App() {
  return (
    <div className="App">
      <ImageUpload />
      {/* <CreateGif /> */}
    </div>
  );
}

export default App;
