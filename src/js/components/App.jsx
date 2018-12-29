import React, { Component } from "react";

import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: 'https://www.youtube.com/watch?v=XsrZHe83VUQ'
    }
   
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      <video id="background-video" loop autoPlay>
        <source src={this.state.videoURL} type="video/mp4" />
        <source src={this.state.videoURL} type="video/ogg" />
        Your browsers does not support the video tag.
      </video>
      </div>
    )
  }
}

export default App;