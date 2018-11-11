import * as d3 from 'd3';
const parseStack = (d) => {
  return d;
}
const parsePie = (d) => {
  // const data = Data;
	let byGender = d.reduce(
		(col, cur) => (col[cur.IsFemale ? 'female' : 'male']++, col),
		{male: 0, female: 0}
  ); //
	// byGender = {};
	// byGender.male = 20;
	// byGender.female = 50;
  // Initialise generators
  // const pie = d3.pie().value(d => {
	// 	return d[1]
	// });
  return byGender;
}
export {parseStack, parsePie};
// export {parsePie};

