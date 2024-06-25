const createPerson = (callback)=>{
  let person = {};
  callback(person, setName);
};

const setName = (person, callback)=>{
  person.name = "신지윤";
  callback(person, setAge);
};

const setAge = (person, callback) => {
  person.age = 26;
  callback(person, setJob);
};

const setJob = (person) => {
  person.job = "백수";
  console.log(person);
};

createPerson((person, callback)=>callback(person,setName));