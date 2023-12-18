// 프로그래머스 Lv.0 문자열안에 문자열
// str1 안에 str2 가 있다면 1, 없으면 2 리턴
// string.subString 같은 메서드가 있을 듯 함 찾아보기.
// String.prototype.includes 사용
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}

solution("ab6CDE443fgh22iJKlmn1o","6CD");
solution("ppprrrogrammers",	"pppp");
solution("AbcAbcA",	"AAA");