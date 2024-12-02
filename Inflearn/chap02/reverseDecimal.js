// 인프런 코테강의 2-6. 뒤집은 소수
// 주어진 숫자를 뒤집었을 때 그 수가 소수이면 출력
const isDecimal = (num) => {
  let flag = true;

  if (num === 1) {
    flag = false;
  } else if (num === 2 || num === 3 || num === 5) {
    flag = true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) flag = false;
    }
  }

  return flag;
};

function solution(input) {
  let answer = [];

  let inputArr = input.split(" ");

  let tmp = 0;

  for (let i = 0; i < inputArr.length; i++) {
    tmp = Number(inputArr[i].split("").reverse().join(""));

    if (isDecimal(tmp)) answer.push(tmp);
  }

  return answer;
}

console.log(
  solution(
    "53 96 4229 2046 801 14 8058 20699 153 90 5762 12217 971 2 6075 21524 979 66 5667 7023 99 55 4749 2352 129 59 1159 28848 217 24 4169 1427 725 23 2000 18005 234 34 5787 29990 693 74 1222 4856 678 77 4005 4310 524 42 9715 11127 8 6 9309 9491 886 9 1304 20853"
  )
);
