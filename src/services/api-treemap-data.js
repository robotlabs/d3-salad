
import data from './../app/data/source/treemap.json';
import data2 from './../app/data/source/treemap2.json';
const apiTreemapData = () => {
  const rn = Math.random();
  let liveData;
  if (rn < 0.5) {
    console.log('-1-');
    liveData = data;
  } else {
    console.log('-2-');
    liveData = data2
  }
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      resolve(liveData);
    }, 50);
  });
};
export {apiTreemapData};
