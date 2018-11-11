import * as d3 from 'd3';

const radius = 80;
const innerRadius = radius * 0.01;
const rnArrayC = ['#ff0099', '#000000', '#00ff99', '#0099ff', '#335500']

const pie = (g) => {
  const arc = d3.arc()
		.outerRadius(radius) 
    .innerRadius(innerRadius);
    
  const update = (d) => {
    const pieChart = d3.pie().value(d => {
      return d[1]
    });
    const pieData = pieChart(Object.entries(d))
      .sort((a, b) => b.data[1] - a.data[1]);
    //color.domain(pieData.map(d => d.data[0]));

    const slicesx = g.selectAll('.arc')
      .data(pieData)

    slicesx
    .exit()
    // .transition()
    //   .duration(1000)
    //   .attrTween("d", arcTween)
    .remove();

    slicesx
      // .attr('d', arc)
      .transition()
      .duration(1000)
      .attrTween("d", arcTween)

    slicesx
      .enter()
      .append('path')
      
    // .merge(slicesx)
      // .attr('d', arc) // We pass our data to our arc generator, which gives us back a long unintelligible string
      
      .classed('arc', true)
      .transition()
      .duration(1500)
      .attrTween("d", arcTween)
      .attr('fill', (d, i) => {
        return rnArrayC[i];
      }); 
    
      function arcTween(d) {
        var i = d3.interpolate(this._current, d);
        this._current = i(0);
        return function(t) {
          return arc(i(t))
        }
      
      }
    return;
  }
  const exporter = {
    update: update
  }
  return exporter;
}
export default pie;