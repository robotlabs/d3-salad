import * as d3 from 'd3';
import chartIndex from './chart-index';

const viewBox = {
  w: 200,
  h: 200
}
const chartFactory = (domEl, chartType, params = {}) => {
  const d3El = d3.select(domEl);
  params.viewBox = viewBox;
  params.domEl = domEl;
  const g = createG(d3El, params);
  return chartIndex[chartType](g, params);
}
const createG = (d3El, params) => {
  let svg = d3El.append('svg');
  if (params.preserve) {
    svg = svg
      .attr('preserveAspectRatio', 'xMidYMid  meet')
      .attr('viewBox', '0 0 ' + viewBox.w + ' ' + viewBox.h)
  }
  return svg
    .attr('width', '100%')
    .attr('height', '100%')
      .append('g')



  // return d3El.append('svg')
  //   // .attr('preserveAspectRatio', 'xMidYMid  meet')
  //   // .attr('viewBox', '0 0 ' + viewBox.w + ' ' + viewBox.h)
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //     .append('g')
  //     // .attr('width', '100%')
  //     // .attr('height', '100%')
  //       // .attr('transform', 'translate(' + viewBox.w / 2 + ',' + viewBox.h / 2 + ')');
}
export default chartFactory;