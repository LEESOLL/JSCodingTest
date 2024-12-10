// 인프런 코테강의 4-1. 학급 회장(해쉬)
// 후보 a,b,c,d,e
// 어떤 기호의 후보가 학급회장이 되었는지?
function solution(input) {
  let voteCount = new Map();

  for (const candidate of input) {
    voteCount.set(candidate, (voteCount.get(candidate) || 0) + 1);
  }

  let answer = "";
  let maxVotes = 0;

  for (const [candidate, count] of voteCount) {
    if (count > maxVotes) {
      maxVotes = count;
      answer = candidate;
    }
  }

  return answer;
}

console.log(solution("BDDAAAAEDCAACBAAABAC"));
