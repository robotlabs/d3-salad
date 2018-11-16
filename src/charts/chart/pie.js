import * as d3 from 'd3';

const radius = 80;
const innerRadius = radius * 0.1;

const pie = (g, params) => {
  g
  .attr('transform', 'translate(' + 100 + ',' + 200 / 2 + ')');
  let storeD = {};
  let arc = d3.arc()
		// .outerRadius(radius) 
    // .innerRadius(innerRadius);
  
  var color = d3.scaleOrdinal(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"]);
  var pie = d3.pie()
    .sort(null)
    .value(function(d) { 
      return d[1]; 
    });
    
  const update = (d) => {
    
    //** be sure the object has all params in place. if missing add with value = 0 */
    let keysD = Object.keys(d);
    let keysStoreD = Object.keys(storeD);
    if (keysD.length < keysStoreD.length) {
      for (let i = 0; i < keysStoreD.length; i++) {
        const key = keysStoreD[i];
        if (!d[key]) {
          d[key] = 0;
        }
      }
    }
    storeD = d;

    const pieData = pie(Object.entries(d))
    const arcs = g.selectAll('.arc')
      .data(pieData);

    let rnR = Math.random() * 100;
    // update
    arcs 
      .transition()
      .duration(1500)
      .attrTween("d", arcTween)
      .each(function(d) { 
        d.outerRadius = rnR;
        d.innerRadius = rnR * 0.4;
      });

  // enter
  arcs.enter().append("path")
    .attr("class", "arc")
    .attr("fill", (d, i) => {
      return color(i);
    })
    .attr("d", arc)
    .each(function(d) { 
      d.outerRadius = 0;
      d.innerRadius = 0;
      this._current = d; 
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