//Subject : this 사용 예제
//Object : this가 가리키는 객체 설명
//Verb : this가 가리키는 객체 속성 설명

//this는 함수가 호출될 때 결정되는 특수한 객체로
//함수를 호출하는 방법에 따라 this가 가리키는 객체가 달라진다.

//아래의 this는 속절없이 전역 객체를 가리키는데
//함수 선언문으로 선언된 함수는 기본적으로 전역 객체를 타겟으로 하는 특성

const THIS_IS_GLOBAL = global; //전역 객체 그대로 할당

//일반 함수 선언문
function first(a, b){
  let local = 1;
  this.value = 100;
  //변수로 전역스코프를 가져온것과 같은 결과
  console.log(THIS_IS_GLOBAL);
  console.log("this가 가리키는 이상한 객체 : ",this);

  //내부 함수 선언 ------------------------------------
  function inner(){
    //내부 함수에서도 this는 전역 객체를 가리킴
    console.log("this가 가리키는 이상한 객체 :", this);
    //일반 함수 내부의 함수는 기본적으로 전역 객체를 가리킴
    console.log("this로 접근한 전역객체 키 :", this.value);
    console.log("전역객체 키 :", THIS_IS_GLOBAL.value);
    //inner() 함수의 지역변수 value를 가져온 것이 아닌,
    //전역 객체의 value를 가져온 사례 : 상당히 위험한 코드

    //아래는 first() 함수의 지역변수 local을 가져온 것
    //inner() 함수의 입장에서는 지역변수가 아닌, 전역변수처럼 보임
    console.log(local);

    return this.value;
  }

  //내부 함수에서 리턴된 값에 a와 b를 더한 값을 리턴
  return inner() + a + b;
}
const firstExample = first(1,2);
console.log(firstExample);