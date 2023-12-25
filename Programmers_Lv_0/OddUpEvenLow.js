// 프로그래머스 Lv.0 배열에서 문자열 대소문자 변환하기
// 홀수 인덱스 -> 대문자 , 짝수 인덱스 -> 소문자 변환

function solution(strArr) {
  return strArr.map((item, idx) =>
    idx % 2 === 1 ? item.toUpperCase() : item.toLowerCase()
  );
}
