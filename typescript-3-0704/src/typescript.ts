//JobType 타입을 정의
type JobType = "꽃미남" | "미남";

//Shijiyun 인터페이스 정의
interface Shinjiyun{
  name: string;
  age: number;
  job : JobType; //job 속성을 JobType 타입으로 정의
}

//? 신지윤와 비슷한 여러 사람의 정보를 담는 배열을 정의
//? Shinjiyun[]의 의미
// 인터페이스인 Shinjiyun가 적용된 '배열'이라는 뜻으로 상당히 자주 사용되는 작성법
// 일관된 데이터 관리가 가능하다.
class Shinjiyun implements Shinjiyun{
  //implements의 사전적의미는 '실현하다', '수단이 되다'로 비유

  //class도 인터페이스를 상속받을 수 있다.
  //아래는 인터페이스 Shinjiyun의 속성 중 무엇을 상속받을지 정의한다.
  name:string;
  age:number;
  job:JobType;

  constructor(name:string, age:number, job:JobType){
    this.name=name;
    this.age=age;
    this.job=job;
  }
}

const shinjiyunArray: Shinjiyun[]=[
  new Shinjiyun("신지윤", 25, "꽃미남"),
  new Shinjiyun("박지윤", 22, "미남"),
  new Shinjiyun("멍지윤", 21, "미남"),
];

//배열의 모든 요소를 출력하는 함수를 정의
function printShinjiyunArray(array:Shinjiyun[]):void{
  //array:Shinjiyun[]
  //매개변수 array도 Shinjiyun인터페이스의 배열을 사용하지 않으면
  //실행되지 않는 '안정성'을 확보할 수 있다.

  //():void
  //void는 비어있다는 뜻으로, 반환(return)값이 없는 실행함수를 의미한다.
  //다른 프로그래밍 언어에서 매우 자주사용되는 필수적인 작성법중 하나로,
  //자바스크립트는 생략이 가능하지만, 타입스크립트는 생략이 불가능하다.
  //자바스크립트는 리턴이 없는 함수를 작성하면 undefined를 반환하는 이상한 문제가 있다.
  //무엇도 반환되어서는 안된다. 자바스크립트의 고질적인 문제이며, 타입스크립트는 허락하지 않는다.
  array.forEach((person)=>{
    console.log(`이름: ${person.name}, 나이: ${person.age}, 직업: ${person.job}`);
  });
}

//함수를 호출하여 배열의 모든 요소를 출력
printShinjiyunArray(shinjiyunArray);