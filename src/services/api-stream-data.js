
const apiStreamData = () => {
  let d = getRnArr();
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      resolve(d);
    }, 50);
  });
};
export {apiStreamData};

const getRnArr = () => {
  const nrStreams = 6;
  const nrStreamSteps = 10;
  let rnData = [];

  const rn = Math.random();
    if (rn < 0.5) {
      for( let i = 0; i < nrStreamSteps; i++) {
        let step = {
          streamStep: (i + 1),
        }
        for (let i = 0; i < nrStreams; i++) {
          let rnV = Math.random() * 12;
          if (i === 0 || i === (nrStreams - 1)) {
            rnV = Math.random() * 2
          }
          step['stream-' + (i + 1)] = rnV;
        }
        rnData.push(step)
      }
    } else {
      for( let i = 0; i < nrStreamSteps; i++) {
        let step = {
          streamStep: (i + 1),
        }
        for (let i = 0; i < nrStreams; i++) {
          let rnV = Math.random() * 2;
          if (i === 0 || i === (nrStreams - 1)) {
            rnV = Math.random() * 6
          }
          step['stream-' + (i + 1)] = rnV;
        }
        rnData.push(step)
      }
    }

  
  return rnData;
}
