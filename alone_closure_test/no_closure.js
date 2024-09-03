function outerFunc() {
  var x = 10;

  var innerFunc = function () {
    console.log(x); // x를 콘솔에 출력
  };

  return innerFunc(); // innerFunc()를 즉시 호출하고 그 결과를 반환
}

outerFunc(); // outerFunc 호출, innerFunc() 호출로 인해 10이 출력됨