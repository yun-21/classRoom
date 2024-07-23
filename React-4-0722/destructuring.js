//객체 구조 분해
const person = {name:"신지윤",age:25}
const {name, age} = person;
console.log(person.name); //신지윤
console.log(person.age); //25
//구조분해(destructuring) 할당(assign)을 사용하면 위와 아래처럼
//명시적으로 작성하느냐, 간결하게 작성하느냐의 차이가 있다.
//코드가 너무 길어지는 경우 객체구조를 분해해서 변선언하듯이 사용하는데,
//변수 선언부분에 '중괄호'를 사용하는 것이 작성법이다.
console.log(name); //신지윤
console.log(age); //25

//배열 구조 분해
const features = ["크롱", "뽀로로"];
const [appearance, nickname] = features;
console.log(appearance); //"크롱"
console.log(nickname); //"뽀로로"