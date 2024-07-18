console.log("예제 2 : Closure를 사용한 개선된 방식");

function createUserWithPrivacy(name, initialAge, birthdate) {
    let age = initialAge;
    //프라이빗 변수, 외부에서 직접 접근 불가
    const birthday = new Date(birthdate);
    const currentDate = new Date();

    //생일이 올해 지났다면 나이를 증가시키는 간단한 함수
    function checkBirthday() {
        const currentYearBirthday = new Date(currentDate.getFullYear(), birthday.getMonth(), birthday.getDate());
        if (currentDate > currentYearBirthday) {
            age++;
            console.log(`생일 축하합니다! ${name}님, 이제 ${age}세 입니다.`)
        }
    }

    //생성 시 생일 체크
    checkBirthday();

    return {
        //총 네개의 메서드를 반환
        getName: function () {
            return name;
        },
        getAge: function () {
            return age;
        },
        incrementAge: function () {
            age++;
        },
        getInfo: function () {
            return `${name}님의 나이는 ${age}세 입니다.`;
        },
        checkBirthday: checkBirthday
        //필요시 생일을 수동으로 체크하는 메서드
    }
}

const userOne = createUserWithPrivacy("신지윤", 25, "2000-03-10");
console.log(userOne.getInfo()); // 출력 : 신지윤님의 나이는 25세 입니다.
userOne.incrementAge(); // 계속 호출하면 나이가 증가한다.
console.log(userOne.getInfo()); // 출력 : 신지윤님의 나이는 26세 입니다.

//이제 직접 접근이 불가능 하다.
userOne.age = 50; //아무 효과 없다.
console.log(userOne.getInfo()); // 출력 : 신지윤님의 나이는 26세 입니다.

//age 변수에 직접 접근할 수 없다
console.log(userOne.age); // 출력 : undefined

//필요 시 생일을 수동으로 체크 (스크립트가 장기간 실행될 경우 유용)
userOne.checkBirthday();
console.log(userOne.getInfo()); //생일이 지났다면 나이가 증가한 출력
