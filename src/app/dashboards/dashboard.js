import React, { Component } from 'react';
import './dashboard.css';

import DataForPie from './../data/source/fire.json'
import chartFactory from './../../charts/chart-factory';
import {parsePie} from './../data/parsers/parser.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.node1 = React.createRef();
    this.node2 = React.createRef();
  }
  componentDidMount() {
    const d = parsePie(DataForPie);
    let c = chartFactory(this.node1.current, 'pie');
    c.update(d);

    let c2 = chartFactory(this.node2.current, 'pie');
    c2.update(d);

    // test.bind(this)();
    // test.call(this);
    // let cx = chartFactory.call(this.node.current, 'chartTest');
    // console.log();
    
    // cx.a1()
  }
  render() {
    return (
      <div>
      <div 
        ref={this.node1}
        className="dv1"> 
      </div>
      <div 
        ref={this.node2}
        className="dv2"> 
      </div>
      </div>
    );
  }
}
function test() {
  console.log('xthis ', this);
}

export default Dashboard;
