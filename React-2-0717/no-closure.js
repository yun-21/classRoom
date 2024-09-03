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
//이유는 안적어둬서 적음
//그 이유는 클로저때문임. 위에서 notehrFunction를 호출시키면서 전역변수의 값을 20으로 변경하여
//innerFunction에서 참조하는 outerData가 변경되어 메모리에 저장이 되었기 때문이다.

outerFunction(someData)(); //15
closureExample(); //위에서 outerDate를 5로 다시 변경 해줬기 때문에 메모리에는 outerData값이 5로 변경되었음.