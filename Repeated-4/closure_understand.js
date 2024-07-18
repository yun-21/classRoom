function createCounter() {
    let count = 0;
    return {
        //리턴에 함수(메서드) 두 개를 정의함
        increment : function(){
            count++;
        },
        getCount : function(){
            return count;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());
//2가 출력
console.log(counter.count);
//은닉되어있으므로, 찾을 수 없음