// 인프런 코테강의 4-2. 아나그램(해쉬)
// 아나그램 -> 두 문자열의 구성이 일치하는 문장
// 두 단어가 아나그램인지 아닌지 판별하라
function solution(input1, input2) {
  let answer = "YES";

  // 알파벳을 key, 갯수를 value 로 갖는 맵

  let map1 = new Map();
  let map2 = new Map();

  for (const char of input1) {
    map1.set(char, (map1.get(char) || 0) + 1);
  }

  for (const char of input2) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }

  for (const [key] of map1) {
    if (map1.get(key) !== map2.get(key)) return "NO";
  }

  return answer;
}

console.log(
  solution(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqrtuvwxyz",
    "ZBCcdFfgIJKLMNOPQRSTvVxyYAabDEeGHhijklmnoqrtuUwWXzZBCcdFfgIJKLMNOPQRSTvVxyYAabDEeGHhijklmnoqrtuUwWXz"
  )
);
