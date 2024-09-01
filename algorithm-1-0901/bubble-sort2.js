//랜덤 배열 생성 함수
function generateRandomArray(length, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max) + 1);
  }
  return arr;
}

//비교 함수 (별도의 함수로 중첩 반복문 대체)
function compare(a, b) {
  return a - b;
}

//선언적 접근으로 배열 정렬
function bubbleSortDeclarative(arr) {
  return arr.sort(compare);
}

//테스트용 코드
const randomArrayDeclarative = generateRandomArray(10, 100);
console.log('만들어진 배열:', randomArrayDeclarative);

const sortedArrayDeclarative = bubbleSortDeclarative(randomArrayDeclarative);
console.log('정렬된 배열:', sortedArrayDeclarative);