//랜덤 배열 생성 함수
function generateRandomArray(length, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max) + 1);
  }
  return arr;
}

// 버블 정렬 함수 (절차적 접근)
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 테스트용 코드
const randomArray = generateRandomArray(10, 100);
console.log('만들어진 배열:', randomArray);

const sortedArray = bubbleSort(randomArray);
console.log('정렬된 배열:', sortedArray);