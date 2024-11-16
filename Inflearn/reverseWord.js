// 인프런 코테강의 4.단어 뒤집기
function solution(arr) {
  let answer = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     let tmp = "";
  //     for (let j = arr[i].length - 1; j >= 0; j--) {
  //       tmp += arr[i][j];
  //     }
  //     answer.push(tmp);
  //   }

  return arr.map((item) => item.split("").reverse().join(""));
}

console.log(solution(["good", "Time", "Big"]));
