// 프로그래머스 Lv.0 빈 배열에 추가, 삭제하기
// flag[i]가 true 라면 arr[i]를 arr[i]*2 한만큼 추가,
// false 라면 배열에서 arr[i]개의 원소 제거한 뒤 x return
function solution(arr, flag) {
  var answer = [];

  //   arr.forEach((item, index) => {
  //     if (flag[index]) {
  //       for (let i = 0; i < item * 2; i++) {
  //         answer.push(item);
  //       }
  //     } else {
  //       answer = answer.slice(0, answer.length - item);
  //     }
  //   });

  //   return answer;

  return arr.reduce(
    (acc, item, index) =>
      flag[index]
        ? [...acc, ...new Array(item * 2).fill(item)]
        : acc.slice(0, acc.length - item),
    []
  );
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
