const apiPromiseReject = (time) => {
  console.log('timesi', time);
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      reject(':not working');
    },time);
  });
};

const apiPromiseResolve = (time) => {
  console.log('timesi', time);
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      console.log('resolving0');
      resolve(':yeah');
    },time);
  });
};

const apR = () => {
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      console.log('+ api R');
      reject(':oh no');
    }, 2000);
  });
};

const ap1 = () => {
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      console.log('+ api1');
      resolve(':yeah');
    }, 2000);
  });
};
const ap2 = () => {
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      console.log('+ api2');
      resolve(':yeah');
    }, 2000);
  });
};
const ap3 = () => {
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      console.log('+ api3');
      resolve(':yeah');
    }, 3000);
  });
};
//.then(() => new Promise((resolve) => setTimeout(resolve, 15000)))
export {apiPromiseReject, apiPromiseResolve, ap1, ap2, ap3, apR};