class Blog{
  constructor(name, age){
    this.name=name;
    this.age = age;
  }
  set name(value){
    if(typeof(value)==='string'){
      this._name = value;
    }else{
      console.error("이름이 문자열이 아닙니다.")
    }
  }
  set age(value){
    if(typeof(value)==='number'){
      this._age = value;
    }else{
      console.error("나이가 숫자가 아닙니다.")
    }
  }
  get name(){
    if(typeof(this._name)==='string'){
      console.log("dd")
      return this._name
    }else{
      return console.log("ss")
    }
  }
  get age(){
    if(this._age>20){
      return this._age+"wow"
    }
  }
}
const blog = new Blog('이름',22);
console.log(blog)
console.log(blog.name)