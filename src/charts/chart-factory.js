import * as d3 from 'd3';
import chartIndex from './chart-index';
// import gauge from './chart/gauge';
const chartFactory = (domEl, chartType, params = {}) => {
  const d3El = d3.select(domEl);
  const w = params.w || domEl.clientWidth;
  const h = params.h || domEl.clientHeight;
  
  const g = createG(d3El, w, h);
  return chartIndex[chartType](g);
}
const createG = (d3El, w, h) => {
  return d3El.append('svg')
    .attr('preserveAspectRatio', 'xMidYMid')
    .attr('viewBox', '0 0 200 200')
    .attr('width', '100%')
    .attr('height', '100%')
      .append('g')
        .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')');
}
export default chartFactory;