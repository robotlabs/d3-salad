import * as d3 from 'd3';
import * as utils from './../utils';
const radius = 90;
const pi = Math.PI;
const innerRadius = radius * 0.4;
const gauge = (g, params) => {
  g
  .attr('transform', 'translate(' +  params.viewBox.w / 2 + ',' + (params.viewBox.h + radius) / 2 + ')');
  const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(radius)
    .startAngle(-pi /2)
  g.append('path')
    .datum({endAngle: pi / 2})
    .attr('d', arc)
    .style('fill', '#ddd');

  const percArc = g.append('path')
    .datum({endAngle: -pi / 2})
    .attr('d', arc)
    .style('fill', '#000099')

  const onUpdateTransition = (t) => {
    //do move here
  }
  const update = (data) => {
    const p = utils.percPi(data.value, data.min, data.max)
    percArc
      .transition()
      .duration(1000)
      .ease(d3.easePoly)
      .attrTween('d', utils.arcTween(p, arc, onUpdateTransition))
  }
  const exporter = {
    update: update
  }
  return exporter;
  
}
export default gauge;