const apiPieData = () => {
  const rn = Math.random();
  let d;
  if (rn < 0.2) {
    // d = parsePie(DataForPie);
    d = {
      male: Math.random() * 200, 
      female: Math.random() * 200, 
      // third: Math.random() * 200, 
      // fourth: Math.random() * 200
    }
  }
  if (rn >= 0.2 && rn < 0.4) {
    d = {
      male: Math.random() * 200
    }//, female: 200, third: 300}
  }
  if (rn >= 0.4 && rn < 0.6) {
    d = {
      male: Math.random() * 200, 
      female: Math.random() * 200,
      third: Math.random() * 200, 
      
    }
  }
  if (rn >= 0.6 && rn < 0.8) {
    d = {
      male: Math.random() * 200, 
      female: Math.random() * 200,
      third: Math.random() * 200, 
      fourth: Math.random() * 200,
      fifth: Math.random() * 200,
      sixth: Math.random() * 200,
      seventh: Math.random() * 200,

    }
  }
  if (rn >= 0.8 && rn < 1) {
    d = {
      male: Math.random() * 200, 
      female: Math.random() * 200,
      third: Math.random() * 200, 
      fourth: Math.random() * 200,
      fifth: Math.random() * 200,
    }
  }
  // const d = parsePie(DataForPie);
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      resolve(d);
    }, 500);
  });
};
const apiGaugeData = () => {
  const max = Math.random() * 1200;
  const min = max - Math.random() * 1200;
  const value = getRandomArbitrary(min, max);

  const d = {
    max: max, 
    min: min,
    value: value
  }
    
  // const d = parsePie(DataForPie);
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      resolve(d);
    }, 0);
  });
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
export {apiPieData, apiGaugeData};