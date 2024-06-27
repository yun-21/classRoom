// 원본 배열 : 객체의 배열
const originalArray = [
  { name : '신지윤', age: 25},
  { name : '멍지윤', age: 22}
];

//얕은 복사 : 원본 객체의 참조를 그대로 복사
const shallowCopyArray = originalArray.map((item)=>{
  //참조를 복사하여 동일한 객체를 가리킴
  return item
})

//깊은 복사 : 원본 객체의 값을 새로운 객체에 복사
const deepCopyArray = originalArray.map((item)=>{
  //새로운 객체를 생성하여 각 속성을 복사
  const result = {
    name : item.name,
    age : item.age
  };
  return result;
});

//원본 배열과 복사본 배열 출력
console.log('원본 배열:', originalArray);
console.log('얕은 복사 배열 :', shallowCopyArray);
console.log('깊은 복사 배열 :', deepCopyArray);

//원본 배열의 첫 번째 요소 변경
originalArray[0].name = '황도';

//변경 후의 배열 출력
console.log('변경 후');
console.log('원본 배열:', originalArray);
console.log('얕은 복사 배열 :', shallowCopyArray);
console.log('깊은 복사 배열 :', deepCopyArray);