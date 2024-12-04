function stringToTwoDimensionalNumArr(num, string) {
  let tmpArr = string.split(" ");

  let tmpArrToNumArr = tmpArr.map((item) => parseInt(item));

  let array = new Array(num);

  for (let i = 0; i < num; i++) {
    array[i] = new Array(num);
  }

  for (let i = 0; i < tmpArrToNumArr.length; i = i + num) {
    array[i / num] = tmpArrToNumArr.slice(i, i + num);
  }

  return array;
}

function stringToNumArr(string) {
  let tmpArr = string.split(" ");

  let tmpArrToNumArr = tmpArr.map((item) => parseInt(item));

  return tmpArrToNumArr;
}

module.exports = { stringToTwoDimensionalNumArr, stringToNumArr };
