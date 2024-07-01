function isIntegerCheck(value: number): boolean {
    let checkValue: boolean = Number.isInteger(value);
    return checkValue;
}

//아래 함수 선언부에서 '함수'가 무엇을 입력하고 출력하는지 한눈에 알아볼 수 있다.
function add(a: number, b: number): number {
    if (isIntegerCheck(a) === false || isIntegerCheck(b) === false) {
        throw new Error('매개변수 둘중 하나라도 정수가 아니라면 에러를 발생시키기');
    }
    let result: number = a + b;
    return result;
}

//실행 부분
try {
    const result: number = add(2, 3);
    console.log(result);

    //의도하지 않은 인자 타입을 전달하면 컴파일 타임에 오류가 발생
    //const resultWithString: number = add(2, '3');
    //오류 : Argument of type 'string' is not assignable to parameter of type 'number'

    //소수 값을 전달하면 의도하지 않았으므로 에러 발생
    const resultWithFloat: number = add(2.5, 3);
    console.log(resultWithFloat);
} catch (error) {
    console.error(error.message);
}
