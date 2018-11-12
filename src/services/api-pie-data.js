import DataForPie from './../app/data/source/fire.json';
import {parsePie} from './../app/data/parsers/parser';
const apiPieData = () => {
  const rn = Math.random();
  let d;
  if (rn < 0.2) {
    d = parsePie(DataForPie);
  }
  if (rn >= 0.2 && rn < 0.4) {
    d = {male: 100}//, female: 200, third: 300}
  }
  if (rn >= 0.4 && rn < 0.6) {
    d = {male: 400, female: 200, third: 1300, fourth: 233}
  }
  if (rn >= 0.6 && rn < 1) {
    d = {male: 100, female: 200}
  }
  // const d = parsePie(DataForPie);
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      resolve(d);
    }, 1000);
  });
};
export {apiPieData};