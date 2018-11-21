import * as d3 from 'd3';
const stack = (g, params, opts = {wiggle: false}) => {
  
  const color = d3.scaleOrdinal(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"]);
  window.addEventListener("resize", redraw);
  
  const redraw = () => {
    const {clientWidth: width} = g.node().parentNode;
    let offsetW = 0;
    let rangeW = params.viewBox.w;
    if (width > params.viewBox.w) {
      offsetW = (width - params.viewBox.w) / 2;
      rangeW = width;
    }
    g.attr('transform', 'translate(' + -offsetW + ',' + 0 / 2 + ')');
    return rangeW;
  }
  const update = (data) => {
    const {clientWidth: width, clientHeight: height} = g.node().parentNode;
    let rangeW = redraw();
    const stremStepLength = data.length;
    if (!params.margins) {
      params.margins = {
        left: 0,
        right: 0
      }
    }
    let rn = Math.random();
    if (rn < 0.5) {
      opts.wiggle = true;
    } else {
      opts.wiggle = false;
    }
    //** set stack keys */
    const stack = d3.stack()
      .keys(params.keys);
    
    //** wiggle? */
    if (opts.wiggle) {
      stack.offset(d3.stackOffsetWiggle);
    }
    
    //** x and y scale */
    const x = d3.scaleLinear()
      .domain([1, stremStepLength])
      //.range([params.margins.left || 0, width - (params.margins.right || 0)]);
      .range([0, rangeW]);

    const y = d3.scaleLinear()
    .domain([
      d3.min(stack(data), d => d3.min(d, e => {
        return e[0];
      })),
      d3.max(stack(data), d => d3.max(d, e => e[1]))
    ])
    .range([height, 0]);

    //** area for stacks */
    const area = d3.area()
      .x(d => {
        const v = x(d.data.streamStep);
        return v;
      })
      .y0(d => {
        return (y(d[0]) - 0);
      })
      .y1(d => {
        return (y(d[1]) - 0);
      })
      .curve(d3.curveBasis);
    
    //** start the d3 cycle */
    const streams = g.selectAll('path')
      .data(stack(data));
  
    streams
      .exit()
      .remove();
    
    streams 
      .transition()
      .duration(2800)
      .ease(d3.easePolyInOut)
      .attr('d', area)

    streams
      .enter()
      .append("path")
      .attr('class', 'streams')
      .attr('d', area)
      .style('fill', (d, i) => color(i));

  }

  //** generate empty 0 data to have a nice trans-in */
  let emptyData = [];
  for( let i = 0; i < 10; i++) {
    let step = {
      streamStep: (i + 1),
    }
    for (let i = 0; i < params.nrStreams; i++) {
      step['stream-' + (i + 1)] = 0;
    }
    emptyData.push(step)
  }
  const remove = () => {
    window.removeEventListener("resize", redraw);
  }
  //** exporter for public access */
  update(emptyData)
  return {
    update: update,
    remote: remove
  }
}
export default stack;