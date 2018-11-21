
const apiTreemapData = () => {
  const rn = Math.random();
  let liveData;
  if (rn < 0.25) {
    liveData = A1;
  } 
  if (rn >= 0.25 && rn < 0.5) {
    liveData = A2;
  }
  if (rn >= 0.5 && rn < 0.75) {
    liveData = A3;
  }
  if (rn < 1 && rn >= 0.75) {
    liveData = A4;
  }
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      resolve(liveData);
    }, 50);
  });
};

const A1 = {
  name: 'whatever',
    children: [
      {
        name: 'A',
        children: [
          {name: 'A-1', size: 50},
          {name: 'A-2', size: 100}
        ]
      },
      {
        name: 'B', size: 200
      }
    ]
}
const A2 = {
  name: 'flare',
    children: [
      {
        name: 'A', size: 280
      },
      {
        name: 'B', 
        children: [
          {name: 'B-1', size: 50},
          {name: 'B-2', size: 100},
          {name: 'B-3', size: 100}
        ]
      }
    ]
}
const A3 = {
  name: 'flare',
    children: [
      {
        name: 'A', size: 280
      },
      {
        name: 'B', 
        children: [
          {name: 'B-1', size: 50},
          {name: 'B-2', size: 100},
          {name: 'B-3', size: 100}
        ]
      },
      {
        name: 'B', 
        children: [
          {name: 'B-1', size: 50},
          {name: 'B-2', size: 100},
          {
            name: 'B-3', 
            children: [
              {name: 'B-3-A', size: 50},
              {name: 'B-3-B', size: 80},
              {name: 'B-3-C', size: 20},
              {name: 'B-3-D', size: 40}
            ]
          }
        ]
      }
    ]
}
const A4 = {
  name: 'flare',
    children: [
      {
        name: 'A', size: 280
      },
      {
        name: 'B', 
        children: [
          {name: 'B-1', size: 50},
          {name: 'B-2', size: 100},
          {name: 'B-3', size: 100}
        ]
      },
      {
        name: 'B', 
        children: [
          {name: 'B-1', size: 50},
          {name: 'B-2', size: 100},
          {
            name: 'B-3', 
            children: [
              {name: 'B-3-A', size: 50},
              {name: 'B-3-B', size: 80},
              {name: 'B-3-C', size: 20},
              {
                name: 'B-3-D', children: [
                  {name: 'B-3-D-1', size: 80},
                  {name: 'B-3-D-2', size: 40},
                  {name: 'B-3-D-3', size: 120},
                ]
              }
            ]
          }
        ]
      }
    ]
}
export {apiTreemapData};
