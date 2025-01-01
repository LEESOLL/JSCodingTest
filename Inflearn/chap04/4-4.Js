// 인프런 코테강의 4-4. 모든 아나그램 찾기
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열 개수
// T문자열의 Length만큼 슬라이딩 윈도우
// T맵의 key가 없거나, T맵의 key에 해당하는 value가 0보다 작으면 안됨
function solution(S, T) {
  let answer = 0;

  let Tmap = new Map();
  let Smap = new Map();

  // T 문자열에 대한 Map 생성
  for (const char of T) {
    Tmap.set(char, (Tmap.get(char) || 0) + 1);
  }

  // S의 T길이 - 1 만큼 초기 슬라이딩 윈도우 생성
  for (let i = 0; i < T.length - 1; i++) {
    Smap.set(S[i], (Smap.get(S[i]) || 0) + 1);
  }

  let lt = 0;

  // S 문자열 돌면서 T 길이 만큼의 슬라이딩 윈도우 진행
  for (let rt = T.length - 1; rt < S.length; rt++) {
    Smap.set(S[rt], (Smap.get(S[rt]) || 0) + 1);

    if (isAnagram(Tmap, Smap)) {
      answer++;
    }

    Smap.set(S[lt], Smap.get(S[lt]) - 1);

    if (Smap.get(S[lt]) === 0) {
      Smap.delete(S[lt]);
    }

    lt++;
  }

  function isAnagram(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
      if (map2.get(key) !== val) return false;
    }

    return true;
  }

  return answer;
}

console.log(
  solution(
    "WetabtqtqEFqGHIJKLtabeWPQRSTUVWetabdgXYabteWcdefghijklmnopqrabtWestuwxyz",
    "Wetab"
  )
);
