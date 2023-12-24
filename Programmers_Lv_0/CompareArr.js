// 프로그래머스 Lv.0 배열 비교하기
// 배열 길이 다르다 -> 긴 쪽이 더 큼
// 배열 길이 같다 -> 모든 원소의 합 비교 후 더 큰 쪽이 크다.
// arr1이 크면 1, 같으면 0, 작으면 -1 리턴
function solution(arr1, arr2) {
  if (arr1.length > arr2.length) return 1;
  else if (arr1.length < arr2.length) return -1;
  else {
    let arr1Sum = arr1.reduce((acc, cur) => acc + cur);
    let arr2Sum = arr2.reduce((acc, cur) => acc + cur);
    return arr1Sum > arr2Sum ? 1 : arr1Sum < arr2Sum ? -1 : 0;
  }
}
console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));
