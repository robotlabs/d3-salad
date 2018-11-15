import React, { Component } from 'react';
import './dashboard.css';

import chartFactory from './../../charts/chart-factory';
import {parsePie} from './../data/parsers/parser.js';

import {
  apiPromiseReject, 
  apiPromiseResolve,
  ap1, 
  ap2,
  ap3,
  apR
} from './../../services/api-promise';

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

    setInterval(() => {
      apiPieData()
      .then((d) => {
        console.log('updating data', d);
        c.update(d);
      })
    }, 1500)
    

    // apiPromiseReject(2000).then(
    //   () => {
    //     console.log('xxciao')
    //   },
    //   () => {
    //     console.log('xx');
    //   }
    // )
    // // .catch((r) => {
    //   console.log('reij ', r);
    // })
    // .then(() => {
    //   console.log('2');
    // })
    
    // ap1()
    //   .then(() => {
    //     return ap2()
    //       .then(() => {
    //         console.log('success');
    //       })
    //   })
    //   .then(ap3)
    //   .then(ap2)
    //   .catch(() => {
    //     console.log('yo?');
    //   })
    // ap1()
    //   .then(ap2)
    //   .then(apR, () => {
    //     console.log('wow');
    //   })
    //   .then(ap3)
    //   .then(ap2)
    //   .then(ap3)
      
    //   .then(ap3)
    //   .catch((e) => {
    //     console.log('eeeh ', e);
    //   })



      // .then(() => {
      //   console.log('here');
      //   apiPromiseReject(3000)
      //     .then(() => {

      //     })
      // }, () => {
      //   console.log('ahi');
      // })

      return;
      // .then(() => {
      //   console.log('HARD END');
      // })
      // .catch((er) => {
      //   console.log('er', er);
      // })

    return; 
    apiPromiseResolve(1000)
      .then(() => {
        apiPromiseResolve(3000)
        .then(() => {
          console.log('Finit 2');
        })
      })
      .then(() => {
        console.log('Finit');
      })
        
    

      var firstMethod = function() {
        var promise = new Promise(function(resolve, reject){
           setTimeout(function() {
              console.log('first method completed');
              resolve({data: '123'});
           }, 2000);
        });
        return promise;
     };
      
      
     var secondMethod = function(someStuff) {
        var promise = new Promise(function(resolve, reject){
           setTimeout(function() {
              console.log('second method completed');
              resolve({newData: someStuff.data + ' some more data'});
           }, 2000);
        });
        return promise;
     };
      
     var thirdMethod = function(someStuff) {
        var promise = new Promise(function(resolve, reject){
           setTimeout(function() {
              console.log('third method completed');
              resolve({result: someStuff.newData});
           }, 3000);
        });
        return promise;
     };
    
    firstMethod()
     .then(secondMethod)
     .then(thirdMethod);
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
