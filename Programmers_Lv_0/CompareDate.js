// 프로그래머스 Lv.0 날짜 비교하기
// date1 이 date2 보다 앞서면 1, 아니면 0 리턴
// 2 번 풀이 -> Date 객체 사용
function solution(date1, date2) {
  //   let year1 = date1[0];
  //   let year2 = date2[0];
  //   let month1 = date1[1];
  //   let month2 = date2[1];
  //   let day1 = date1[2];
  //   let day2 = date2[2];

  //   if (year1 === year2) {
  //     if (month1 === month2) {
  //       if (day1 < day2) return 1;
  //       else return 0;
  //     } else if (month1 < month2) return 1;
  //     else return 0;
  //   } else if (year1 < year2) return 1;
  //   else return 0;
  return new Date(date1) < new Date(date2) ? 1 : 0; // 근데 실행시간은 더 느림
}
console.log(solution([2021, 12, 28], [2021, 12, 29]));
console.log(solution([1024, 10, 24], [1024, 10, 24]));
