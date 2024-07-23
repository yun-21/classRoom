const company = {
  name: "크드트 엔터테인먼트",
  location:{
    country:"대한민국",
    city:"대전",
    address:{
      street:"대덕대로",
      building:{
        name:"크드트 타워",
        floor:3
      }
    }
  },
  employee:{
    name:"신지윤",
    position:"배우",
    details:{
      age:25,
      skills:["숨쉬기", "머리만지기", "네일하기"]
    }
  }
};

//위의 코드는 객체의 깊이가 제법 길다.
//이러한 것들을 사용하려면
console.log(company.location.address.building.floor); //3
//객체 접근이 상당히 길어진다. 이러한 것을 간결하게 표현할 수 있다.

const {location:{address:{building:{floor}}}}=company;
console.log(floor); //3

const {
  name: companyName, //구조분해할 때 이름을 변경할 수 있다.
  location:{
    country,
    address:{
      street,
      building:{name:buildingName}
    }
  },
  employee:{
    name: employeeName,
    details:{age,skills:[primarySkill]}
  }
}=company;

console.log(companyName); //"크드트 엔터테인먼트"
console.log(city); //"대전"
console.log(street); //"대덕대로"
console.log(buildingName); //"크드트 타워"
console.log(employeeName); //"신지윤"
console.log(age); //"25"
console.log(primarySkill); //"숨쉬기"