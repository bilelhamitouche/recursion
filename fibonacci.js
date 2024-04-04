function iterativeFibonnaci(num) {
  let fibArray = [];
  if (num < 0) return [0];
  for (let i = 0; i <= num; i++) {
    if (i == 0 || i === 1) {
      fibArray.push(i);
    } else {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
  }
  return fibArray;
}

function recursiveFibonnaci(num) {
  let fibArray = [];
  if (num === 0) {
    fibArray.push(num);
    return fibArray;
  } else if (num === 1) {
    fibArray.push(num - 1);
    fibArray.push(num);
    return fibArray;
  }
  if (num >= 2) {
    fibArray = recursiveFibonnaci(num - 2).reduce(
      (acc, item) => {
        return acc.includes(item) ? acc : [...acc, item];
      },
      [...recursiveFibonnaci(num - 1)],
    );
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2],
    );
    return fibArray;
  }
}
