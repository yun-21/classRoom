function outerFunc() {
  var x = 10;

  var innerFunc = function () {
    console.log(x) // x를 콘솔에 출력
    return console.log(x+2);
  };

  return innerFunc; // innerFunc 함수 자체를 반환
}

var inner = outerFunc(); // outerFunc 호출, innerFunc 함수 참조를 반환받음
console.log('확인용')
inner(); // inner() 호출, 10이 출력됨