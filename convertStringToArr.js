function convertStringToArr(num, string) {
  let tmpArr = string.split(" ");

  let array = new Array(num);
  for (let i = 0; i < num; i++) {
    array[i] = new Array(num);
  }

  for (let i = 0; i < num; i++) {
    array[i].push(tmpArr.slice(i, num * (i + 1)));
  }

  console.log(array);
}

convertStringToArr(5, "2 3 1 7 3 4 1 9 6 8 5 5 2 4 4 6 5 2 6 7 8 4 2 2 2");
