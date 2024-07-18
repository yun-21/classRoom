function outerFunction(outerData){
    let innerData = 10;
    //지역 변수 innerData, 함수 내부에 있으므로 노출되지 않았다.

    function innerFunction(){
        console.log(innerData + outerData);
    }
    return innerFunction;
    //어떤 값처럼 보이기 쉽지만, 사실 '함수'자체를 리턴
}
let someData = 5;
const closureExample = outerFunction(someData);
//closureExample : 간단한 변수처럼 보이지만, 사실상 함수 로직이 들어있는 새로운 함수
//outerFunction(someData) : 함수를 호출해서 새로운 함수를 리턴 (리턴 값이 '함수')

closureExample();
//함수이면서 '상위함수'인 outerFunction에 있던 지역변수 값을 활용하고 있다.
//결과 값은 위 someData와 지역변수 innerData를 합한 15가 된다.
