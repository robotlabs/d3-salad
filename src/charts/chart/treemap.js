// import flare from './treemap3.json';
import * as d3 from 'd3';
import './style.css'
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

    nodes
      .exit()
      .remove();

    nodes
      .transition()
      .duration(2800)
      .ease(d3.easePolyInOut)

      .attr("class", "node")
      .style("left", (d) => d.x0 + "px")
      .style("top", (d) => d.y0 + "px")
      .style("width", (d) => Math.max(0, d.x1 - d.x0 - 1) + "px")
      .style("height", (d) => Math.max(0, d.y1 - d.y0  - 1) + "px")
      .style("background", (d) => color(d.parent.data.name))
      .text((d) => d.data.name);

    nodes
    .enter().append("div")
      .attr("class", "node")
      .style("left", (d) => d.x0 + "px")
      .style("top", (d) => d.y0 + "px")
      .style("width", (d) => Math.max(0, d.x1 - d.x0 - 1) + "px")
      .style("height", (d) => Math.max(0, d.y1 - d.y0  - 1) + "px")
      .style("background", (d) => color(d.parent.data.name))
      .text((d) => d.data.name);



        
  //   streams
  //   .exit()
  //   .remove();
  
  // streams 
  //   .transition()
  //   .duration(2800)
  //   .ease(d3.easePolyInOut)
  //   .attr('d', area)

  // streams
  //   .enter()
  //   .append("path")
  //   .attr('class', 'streams')
  //   .attr('d', area)
  //   .style('fill', (d, i) => color(i));

  }
  const exporter = {
    update: update
  }
  return exporter;
  
  // d3.selectAll("input").on("change", function change() {
  //   const value = this.value === "count"
  //       ? (d) => { return d.size ? 1 : 0;}
  //       : (d) => { return d.size; };

  //   const newRoot = d3.hierarchy(data, (d) => d.children)
  //     .sum(value);

  //   node.data(treemap(newRoot).leaves())
  //     .transition()
  //       .duration(1500)
  //       .style("left", (d) => d.x0 + "px")
  //       .style("top", (d) => d.y0 + "px")
  //       .style("width", (d) => Math.max(0, d.x1 - d.x0 - 1) + "px")
  //       .style("height", (d) => Math.max(0, d.y1 - d.y0  - 1) + "px")
  // });
}
export default treemap;