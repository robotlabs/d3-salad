import * as d3 from 'd3';
import './../style.css'
const treemap = (g, params) => {
  const {clientWidth: width, clientHeight: height} = params.domEl;
  const color = d3.scaleOrdinal(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"]);
  const treemap = d3.treemap().size([width, height]);
  const divBase = d3.select(params.domEl);

  const update = (data) => {
    const root = d3.hierarchy(data, (d) => d.children)
    .sum((d) => d.size);

  const tree = treemap(root);
  const nodes = divBase.datum(root).selectAll(".node")
      .data(tree.leaves());
      
    //** REMOVE */
    nodes
      .exit()
      .remove();
    //** UPDATE */
    nodes
      .transition()
      .duration(1000)
      .ease(d3.easePolyInOut)
      .call(applyDivStyles, color)
      
    //** ENTER */
    nodes
      .enter().append("div")
      .call(applyDivStyles, color)
      .attr("class", "node")
  }
  return {
    update: update
  }
}
function applyDivStyles(d, color) {
  d
    .style("left", (d) => d.x0 + "px")
    .style("top", (d) => d.y0 + "px")
    .style("width", (d) => Math.max(0, d.x1 - d.x0 - 1) + "px")
    .style("height", (d) => Math.max(0, d.y1 - d.y0  - 1) + "px")
    .style("background", (d) => color(d.parent.data.name))
    .text((d) => d.data.name);
}
export default treemap;