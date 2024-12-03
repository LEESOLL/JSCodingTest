function convertStringToNumArr(num, string) {
  let tmpArr = string.split(" ");

  let tmpArrToNumArr = tmpArr.map((item) => parseInt(item));

  let array = new Array(num);

  for (let i = 0; i < num; i++) {
    array[i] = new Array(num);
  }

  for (let i = 0; i < tmpArrToNumArr.length; i = i + num) {
    array[i / num] = tmpArrToNumArr.slice(i, i + num);
  }

  console.log(array);
}

convertStringToNumArr(5, "2 3 1 7 3 4 1 9 6 8 5 5 2 4 4 6 5 2 6 7 8 4 2 2 2");
