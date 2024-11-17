// 인프런 코테강의 10. 가장 짧은 문자거리
function solution(str, c) {
  let answer = [];

  let tmpArr1 = [];
  let tmpArr2 = [];

  let dist = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) {
      dist = 0;
      tmpArr1.push(dist);
    } else {
      dist++;
      tmpArr1.push(dist);
    }
  }

  dist = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === c) {
      dist = 0;
      tmpArr2.push(dist);
    } else {
      dist++;
      tmpArr2.push(dist);
    }
  }

  let reversedTmpArr2 = tmpArr2.reverse();

  // tmpArr2.reverse();
  // 위와 같이 for문 외부에서 tmpArr2.reverse() 를 한번만 호출해야함

  for (let i = 0; i < str.length; i++) {
    answer.push(Math.min(tmpArr1[i], reversedTmpArr2[i]));
    // answer.push(Math.min(tmpArr1[i], tmpArr2.reverse()[i]));
    // reverse()는 원본 배열을 수정함. 따라서 for문이 돌 때 마다 reverse()가 반복적으로 수행해서 반복적으로 뒤집힘.
  }

  return answer;
}

console.log(solution("teachermode", "e"));
