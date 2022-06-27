'use strict';

let students = {
  js: [
    {
      name: 'John',
      progress: 100
    },
    {
      name: 'Ivan',
      progress: 60
    }
  ],
  html: {
    basic: [
      {
        name: 'Peter',
        progress: 20
      },
      {
        name: 'Ann',
        progress: 18
      }
    ],

    pro: [
      {
        name: 'Sam',
        progress: 10
      }
    ]
  }
};
function averageProgress(data) {
  let sum = 0;
  let count = 0;
  for (const item of Object.values(data)) {
    if (Array.isArray(item)) {
      for (const elem of item) {
        sum += elem.progress; 
        count++;
      }
    } else {
      for (const elem of Object.values(item)) {
        for (const el of elem) {
          sum += el.progress;
          count++;
        }
      }
    }
  }
  // console.log(count);
  return sum / count;
}
console.log(averageProgressRecursion(students));

function averageProgressRecursion(data) {
  if (Array.isArray(data)) {
    let sum = 0;
    for (const elem of data) {
      sum += elem.progress;
    }
    return [sum, data.length];
  }

  let total = [0, 0];
  for (const item of Object.values(data)) {
    let subTotal = averageProgressRecursion(item);
    total[0] += subTotal[0];
    total[1] += subTotal[1];
  }
  return total;
}
