import React, { Component } from 'react';
import './dashboard.css';

import chartFactory from './../../charts/chart-factory';
import {apiPieData, apiGaugeData} from './../../services/api-pie-data';
import {apiStreamData} from './../../services/api-stream-data';
import {apiTreemapData} from './../../services/api-treemap-data';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.node1 = React.createRef();
    this.node2 = React.createRef();
    this.node3 = React.createRef();
    this.node4 = React.createRef();
    this.node5 = React.createRef();
    this.node6 = React.createRef();
  }
  componentDidMount() {
    // this.c = chartFactory(this.node1.current, 'pie');
    // this.c.update(
    //   {
    //     male: 0, 
    //     female: 0, 
    //     third: 0, 
    //     fourth: 0,
    //     fifth: 0,
    //     sixth: 0,
    //     seventh: 0
    //   });
    // setTimeout(() => {
    //   this.refreshC1Data();
    // }, 500)
    // setInterval(() => {
    //   this.refreshC1Data();
    // }, 1500)

    // this.cGauge = chartFactory(this.node2.current, 'gauge');
    // setTimeout(() => {
    //   this.refreshC2Data();
    // }, 500)
    // setInterval(() => {
    //   this.refreshC2Data();
    // }, 1500)

    this.cStream = chartFactory(this.node5.current, 'stack', {
      nrStreams: 6,
      keys: ['stream-1', 'stream-2', 'stream-3', 'stream-4', 'stream-5', 'stream-6']
    });
    setTimeout(() => {
      this.refreshCStreamData();
    }, 200)
    setInterval(() => {
      this.refreshCStreamData();
    }, 3500)


    this.cTreemap = chartFactory(this.node3.current, 'treemap', {});
    setTimeout(() => {
      this.refreshCTreemapData();
    }, 200)
    setInterval(() => {
      console.log('/??');
      this.refreshCTreemapData();
    }, 2500)

    
  }
  refreshC1Data() {
    apiPieData()
      .then((d) => {
        this.c.update(d);
      })
  }
  refreshC2Data() {
    apiGaugeData()
      .then((d) => {
        this.cGauge.update(d);
      })
  }
  refreshCStreamData() {
    apiStreamData()
      .then((d) => {
        this.cStream.update(d);
      })
  }
  refreshCTreemapData() {
    apiTreemapData()
      .then((d) => {
        this.cTreemap.update(d);
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
