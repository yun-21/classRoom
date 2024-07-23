// enum은 '나열'이라는 뜻으로, 특정 값들을 나열한 것을 의미
// enum은 TypeScript에서 여러 상수를 한 곳에 모아 정의할 수 있게 해준다.
// 정해진 값들을 나열할때 굉장히 유용하며,
// 마치 배열처럼 인덱스로 접근할 수 있어서, 특정 값에 접근할 때 유용하다.
var KdtName;
(function (KdtName) {
    KdtName["WebDeveloper"] = "\uC6F9\uAC1C\uBC1C\uC790";
    KdtName["DataScientist"] = "\uB370\uC774\uD130\uC0AC\uC774\uC5B8\uD2F0\uC2A4\uD2B8";
    KdtName["AIEngineer"] = "AI\uC5D4\uC9C0\uB2C8\uC5B4";
})(KdtName || (KdtName = {}));
var student = {
    name: KdtName.WebDeveloper,
    level: 3,
    skills: ["HTML", "CSS", "JavaScript"],
};
//구조 분해 할당 진행
//enum, interface를 사용해서 강력한 타입제어를 진행하고 있음
var webName = student.name, level = student.level, skills = student.skills;
//name은 이미 선언이 student 부분에 진행되어있으므로
//구조분해할당을 진행하면서 다른 이름도 함께 변경했다.
var primarySkill = skills[1];
console.log(webName); //웹개발자
console.log(level); //3
console.log(primarySkill); //HTML
