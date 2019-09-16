import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
// import Introduction from './components/introduction'
import About from './components/about'
import WorkExperience from './components/workexperience'
import Education from './components/education';
import OtherWork from './components/otherwork';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            {/* <Introduction></Introduction> */}
            <About></About>
            <Education></Education>
            <WorkExperience></WorkExperience>
            <OtherWork></OtherWork>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
