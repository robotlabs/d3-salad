import React, { Component } from 'react';
import './dashboard.css';

import chartFactory from './../../charts/chart-factory';
import {apiPieData} from './../../services/api-pie-data';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.node1 = React.createRef();
    this.node2 = React.createRef();
  }
  componentDidMount() {
    // const d = parsePie(DataForPie);
    let c = chartFactory(this.node1.current, 'pie');
    c.update(
      {
        male: 0, 
        female: 0, 
        third: 0, 
        fourth: 0,
        fifth: 0,
        sixth: 0,
        seventh: 0
      });

    let c2 = chartFactory(this.node2.current, 'stack');
    // c2.update(d);

    setTimeout(() => {
      this.refreshC1Data();
    }, 500)
    setInterval(() => {
      this.refreshC1Data();
    }, 1500)
  }
  refreshC1Data() {
    apiPieData()
      .then((d) => {
        this.c.update(d);
      })
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
        <div 
          ref={this.node3}
          className="dv3"> 
        </div>
        <div 
          ref={this.node4}
          className="dv4"> 
        </div>
        <div 
          ref={this.node5}
          className="dv5"> 
        </div>
      </div>
    );
  }
}
function test() {
  console.log('xthis ', this);
}

export default Dashboard;
