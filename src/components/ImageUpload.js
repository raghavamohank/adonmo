import React, { Component } from "react";
import Resizer from "react-image-file-resizer";

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalImg: null,
      resizedImg: null,
      width: 600,
      height: 600
    };
  }

  handleChange = event => {
    this.setState({
      originalImg: URL.createObjectURL(event.target.files[0]),
      resizedImg: event.target.files[0]
    });
  };

  fileChangedHandler = flag => {
    const { resizedImg, width, height } = this.state;
    // let fileInput = false;
    // if (event.target.files[0]) {
    //   fileInput = true;
    // }
    // if (fileInput) {
    Resizer.imageFileResizer(
      resizedImg,
      flag ? width + 100 : width - 100,
      flag ? height + 100 : height - 100,
      "JPEG",
      100,
      0,
      uri => {
        this.setState({
          resizedImgUri: uri,
          width: flag ? width + 100 : width - 100,
          height: flag ? height + 100 : height - 100
        });
        console.log(uri);
      },
      "base64"
    );
    // }
  };
  headerImg = () => {};
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} />
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h2>Original image</h2>
            <img width="500" src={this.state.originalImg} />
          </div>
          <div style={{ width: "50%" }}>
            <h2>Resized image</h2>
            {this.state.resizedImg ? (
              <img src={this.state.resizedImgUri} />
            ) : (
              "Click to resize the image"
            )}
          </div>
        </div>
        <button onClick={() => this.fileChangedHandler(true)}>increase </button>
        <button onClick={() => this.fileChangedHandler(false)}>decrease</button>
        <div>
          <h2> Add image on header</h2>
          <img width="500" src={this.state.originalImg} />
          <input type="file" onChange={this.headerImg} />
        </div>
      </div>
    );
  }
}
