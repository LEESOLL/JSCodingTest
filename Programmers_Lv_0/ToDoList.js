// 프로그래머스 Lv.0 할 일 목록
// 문자열 배열 todo_list 주어짐
// boolean 배열 finished 주어짐
// 아직 마치지 못한 일 순서대로 담은 문자열 배열 return
// 1. 그냥 for문
// 2. filter

function solution(todo_list, finished) {
  //   var answer = [];
  // 1.
  //   for (let i = 0; i < todo_list.length; i++) {
  //     if (!finished[i]) {
  //       answer.push(todo_list[i]);
  //     }
  //   }
  //   return answer;

  // 2.
  return todo_list.filter((item, idx) => finished[idx] === false);
}

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
);
