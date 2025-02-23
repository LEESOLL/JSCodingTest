// 인프런 코테강의 5-3. 크레인 인형뽑기(카카오)
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수
function solution(board, moves) {
  let answer = 0;

  // board는 행렬로 접근하고, answer는 스택으로 접근

  let stack = [];

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      let item = board[i][move - 1];
      board[i][move - 1] = 0;
      if (item !== 0) {
        if (stack[stack.length - 1] === item) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(item);
        }
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

console.log(
  solution(
    [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3, 1],
      [0, 2, 5, 0, 1, 1],
      [4, 2, 4, 4, 2, 3],
      [3, 5, 1, 3, 1, 3],
      [4, 2, 4, 4, 2, 3],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4, 3, 4]
  )
);
console.log(
  solution(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3, 1, 0, 0, 1, 2],
      [0, 2, 5, 0, 1, 1, 7, 7, 0, 5],
      [4, 2, 4, 4, 2, 3, 6, 7, 4, 7],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
      [4, 2, 4, 4, 2, 3, 3, 2, 1, 5],
      [4, 2, 4, 4, 2, 3, 6, 7, 4, 7],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
      [4, 2, 4, 4, 2, 3, 3, 2, 1, 5],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4, 3, 4, 7, 8, 9, 7, 8]
  )
);
console.log(
  solution(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3, 1, 0, 0, 1, 2, 0, 0, 1, 0, 3, 1, 0, 0, 1, 2],
      [0, 2, 5, 0, 1, 1, 7, 7, 0, 5, 0, 2, 5, 0, 1, 1, 7, 7, 0, 5],
      [4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
      [4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5],
      [4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
      [4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
      [4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5],
      [4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
      [4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
      [4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5],
      [4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
      [4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5],
      [3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5],
    ],
    [
      1, 5, 3, 5, 1, 2, 1, 4, 3, 4, 7, 8, 9, 7, 8, 1, 15, 13, 5, 1, 12, 11, 14,
      13, 14, 17, 18, 19, 17, 18,
    ]
  )
);

console.log(
  solution(
    [
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ],
      [
        0, 0, 1, 0, 3, 1, 0, 0, 1, 2, 0, 0, 1, 0, 3, 1, 0, 0, 1, 2, 0, 0, 1, 0,
        3, 1, 0, 0, 1, 2,
      ],
      [
        0, 2, 5, 0, 1, 1, 7, 7, 0, 5, 0, 2, 5, 0, 1, 1, 7, 7, 0, 5, 0, 2, 5, 0,
        1, 1, 7, 7, 0, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4,
        2, 3, 6, 7, 4, 7,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4,
        2, 3, 3, 2, 1, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4,
        2, 3, 6, 7, 4, 7,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 4, 2, 4, 4, 2, 3, 6, 7, 4, 7, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 4, 2, 4, 4, 2, 3, 3, 2, 1, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
      [
        3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3, 1, 3, 5, 7, 3, 5, 3, 5, 1, 3,
        1, 3, 5, 7, 3, 5,
      ],
    ],
    [
      1, 5, 3, 5, 1, 2, 1, 4, 3, 4, 7, 8, 9, 7, 8, 1, 15, 13, 5, 1, 12, 11, 14,
      13, 14, 17, 18, 19, 17, 18, 25, 26, 27, 30, 29, 1, 5, 3, 5, 1, 2, 1, 4, 3,
      4, 7, 8, 9, 7, 8, 1, 15, 13, 5, 1, 12, 11, 14, 13, 14, 17, 18, 19, 17, 18,
      25, 26, 27, 30, 29,
    ]
  )
);
