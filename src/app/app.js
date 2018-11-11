import React, { Component } from 'react';
import './app.css';

import DataForPie from './data/source/fire.json'
import chartFactory from './../charts/chart-factory';
import {parsePie} from './data/parsers/parser.js';
import TweenMax from 'gsap/TweenMax';
import Dashboard from './dashboards/dashboard';


class App extends Component {
  constructor(props) {
    super(props)
    this.node = React.createRef();
  }
  componentDidMount() {
    let loaderPage = document.getElementsByClassName('loader-page')[0];
    TweenMax.to(loaderPage, 1, {autoAlpha: 0});

    
  }
  render() {
    return (
      <div 
        ref={this.node}
        className="App">
        <header className="">
          Ciao
        </header>
        <Dashboard>
        </Dashboard>
      </div>
    );
  }
}

export default App;
