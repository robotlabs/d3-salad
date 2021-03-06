import * as d3 from 'd3';
const stack = (g, params, opts = {wiggle: false}) => {
  const color = d3.scaleOrdinal(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"]);
  let _params;
  let _g;

  const update = (data) => {
    const {clientWidth: width, clientHeight: height} = g.node().parentNode;
    _params = params;
    _g = g;

    const offsetW = (width - _params.viewBox.w) / 6;
    // let rangeW = offsetG();
    const stremStepLength = data.length;
    setRandomWiggle(opts);
    
    const stack = d3.stack()
        .keys(_params.keys)
    //** wiggle? */
    if (opts.wiggle) {
      stack.offset(d3.stackOffsetWiggle);
    }

    //** x and y scale */
    const x = d3.scaleLinear()
      .domain([1, stremStepLength])
      .range([0, width]);

    const y = d3.scaleLinear()
    .domain([
      d3.min(stack(data), d => {
        return d3.min(d, e => {
          return e[0];
      })}),
      d3.max(stack(data), d => d3.max(d, e => e[1]))
    ])
    .range([height, 0]);
    //** area for stacks */
    const area = d3.area()
      .x(d => {
        return x(d.data.streamStep);
      })
      .y0(d => (y(d[0]) - 0))
      .y1(d => (y(d[1]) - 0))
      .curve(d3.curveBasis);
    
    //** start the d3 cycle */
    const streams = g.selectAll('path')
      .data(
        stack(data));
  
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

  const offsetG = (params, g) => {
    // const {clientWidth: width} = _g.node().parentNode;
    // let offsetW = 0;
    // let rangeW = _params.viewBox.w;
    // if (width > _params.viewBox.w) {
    //   offsetW = (width - _params.viewBox.w) / 2;
    //   rangeW = width;
    // }
    // _g.attr('transform', 'translate(' + -offsetW + ',' + 0 / 2 + ')');
    // return rangeW;
    // return 0;
  }

  const remove = () => {
    window.removeEventListener("resize", offsetG);
  }
  window.addEventListener("resize", offsetG);
  update(createEmptyData(params));

  //** exporter for public access */
  return {
    update: update,
    remote: remove
  }
}

//** utils */
const createEmptyData = (params) => {
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
  return emptyData;
}

const setRandomWiggle = (opts) => {
  let rn = Math.random();
    if (rn < 0.5) {
      opts.wiggle = true;
    } else {
      opts.wiggle = false;
    }
}
//** final export */
export default stack;