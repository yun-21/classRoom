let outerData;
let innerData =10;
function outerFunction(globalOuterData){
    outerData = globalOuterData;
    function innerFunction(){
        console.log(innerData + outerData);
    }
    return innerFunction;
}

function anotehrFunction(){
    outerData = 20 ;
    //함수 내부에서 선언된 변수 재할당 가능
    console.log('anotehrFunction에서 outerData:',outerData);
}
//anotherFunction이라는 함수는 위 선언된 outerData라는
//전역 변수를 핸들링 할 수 있는 '권리'가 있다.
//하지만 언제 어떻게 outerData를 변경할지는 모른다는
//예기치 못하게 변경될 수 있는 상황이 발생할 수 있다.

let someData = 5;
// 리터럴 인수 할당
const closureExample = outerFunction(someData);
anotehrFunction(); //20

closureExample(); //엥? 왜 15가 아니라 30이지?