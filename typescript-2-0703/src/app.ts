//미녀이거나 꽃미녀이거나 둘중 한가지만 허락하는 JobType 이라는 타입정의
type JobType = "미녀" | "꽃미녀";

//인터페이스는 마치 '답정너' 같은 역할

//Shinjiyun 인터페이스를 정의
interface Shinjiyun{
  name : string;
  age : number;
  job : JobType; //job속성을 JobType 타입으로 정의
}

//? getRandomJob 함수를 정의하여 JobType 값을 무작위로 반환하는 함수이지만,
//? 위에 선언된 JobType 때문에 예상을 벗어나는 값은 반환되지 않는 진실
function getRandomJob(): JobType{
  const jobs: JobType[] = ["미녀","꽃미녀"];
  //실제 값을 이렇게 넣는 경우는 없지만, 이해를 돕기 위해 작성
  //jobs배열은 jobType으로만 구성된 '배열'을 뜻함
  const randomIndex:number = Math.floor(Math.random() * jobs.length);
  return jobs[randomIndex];
}

//minyeoTruth 함수를 정의합니다.
function minyeoTruth(): Shinjiyun{
  //신지윤이라는 사람의 정보를 객체로 만든다.
  const person : Shinjiyun={
    name : "신지윤",
    age : 25,
    job : getRandomJob() //job 속성에 무작위로 선택된 값을 할당
    //그래봐야 값은 정해져있다.
  };

  //Shinjiyun라는 정해진 인터페이스를 리턴할 수 밖에 없다.
  return person;
}
const result = minyeoTruth();
//위 함수의 return은 Shinjiyun인 것은 변함없으므로,
//호출만 확인해도 대략적인 결과를 '추론'할 수 있다.
console.log(result);