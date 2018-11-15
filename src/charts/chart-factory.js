import * as d3 from 'd3';
import chartIndex from './chart-index';

const viewBox = {
  w: 200,
  h: 200
}
const chartFactory = (domEl, chartType, params = {}) => {
  const d3El = d3.select(domEl);
  const w = params.w || domEl.clientWidth;
  const h = params.h || domEl.clientHeight;
  
  const g = createG(d3El, w, h);
  return chartIndex[chartType](g, params);
}
const createG = (d3El, w, h) => {
  return d3El.append('svg')
    .attr('preserveAspectRatio', 'xMidYMid')
    .attr('viewBox', '0 0 ' + viewBox.w + ' ' + viewBox.h)
    .attr('width', '100%')
    .attr('height', '100%')
      .append('g')
        .attr('transform', 'translate(' + viewBox.w / 2 + ',' + viewBox.h / 2 + ')');
}
export default chartFactory;