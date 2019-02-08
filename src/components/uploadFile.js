import React, { Component } from "react";

class ImageUpload extends Component {
  render() {
    return (
      <div style={{ marginTop: "60px" }}>
        {/* <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: this.props.progress + "%" }}
            aria-valuenow={this.props.progress}
            aria-valuemin={this.props.progress}
            aria-valuemax={this.props.progress}
          >
            {this.props.progress}%
          </div>
        </div> */}

        {/* <progress value={this.props.progress} /> */}
        <input type="file" onChange={this.props.handleChange} />
        {/* <label for="file">Choose a surati</label> */}
        <button
          type="button"
          onClick={this.props.handleUpload}
          className="btn btn-outline-success"
        >
          upload
        </button>
        {/* <div type="click" onClick={this.props.handleUpload}>
          Upload
        </div> */}
        <br />
        <img
          src={this.props.url || "https://via.placeholder.com/350x150"}
          alt=""
          height="150"
          width="350"
        />
      </div>
    );
  }
}

export default ImageUpload;
