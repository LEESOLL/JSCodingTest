// 프로그래머스 Lv.0 수 조작하기 1
// 정수 n, 문자열 control 주어짐
// w -> 1 커짐
// s -> 1 작아짐
// d -> 10 커짐
// a -> 10 작아짐
// 가장 마지막에 나오는 n 값 return
// 1. 시간이 오래걸림
function solution(n, control) {
    // 1.
    // var answer = n;

    // for(let i = 0; i < control.length; i++) {
    //     switch (control.charAt(i)) {
    //         case 'w':
    //             answer += 1;
    //             break;
    //         case 's':
    //             answer -= 1;
    //             break;
    //         case 'd':
    //             answer += 10;
    //             break;
    //         case 'a':
    //             answer -= 10;
    //             break;
    //     }
    // }

    //2.
    const operation = {
        w : (n) => n + 1,
        s : (n) => n - 1,  
        d : (n) => n + 10,  
        a : (n) => n - 10,  
    }

    return control.split('').reduce((acc, cur) => operation[cur](acc), n);
}

console.log(solution(0, "wsdawsdassw"));