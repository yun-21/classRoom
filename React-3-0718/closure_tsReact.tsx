import React, {useState, useEffect} from 'react';
interface UserComponentProps{
  name:string;
  initialAge : number;
  birthdate : string;
}

const UserComponent : React.FC<UserComponentProps> = ({name, initialAge, birthdate})=>{
  const [age, setAge] = useState<number>(initialAge); //프라이빗 변수, 외부에서 직접 접근 불가
  const birthday = new Date(birthdate);
  const currentDate = new Date();

  //생일이 올해 지났다면 나이를 증가시키는 간단한 함수
  const checkBrithday = () => {
    const currentYearBirthday = new Date(
      currentDate.getFullYear(),
      birthday.getMonth(),
      birthday.getDate()
    );
    if(currentDate > currentYearBirthday){
      setAge((prevAge) => {
        return prevAge + 1;
      });
      console.log(`생일 축하합니다! ${name}님, 이제 ${age+1}세입니다.`);
    }
  };

  //생일 체크를 컴포넌트가 처음 렌더링될 때 한 번 수행
  useEffect(()=>{
    checkBrithday();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //빈 배열을 전달하여 처음 마운트될 때만 실행
  const incrementAge = () => {
    setAge((prevAge)=>{
      return prevAge + 1;
    })
  }
  return (
    <div>
      <p>
        {name}님의 나이는 {age}세입니다.
      </p>
      <button onClick={incrementAge}>나이 증가</button>
      <button onClick={checkBrithday}>생일 체크</button>
    </div>
  )
}

const App: React.FC=()=>{
  return (
    <div>
      <h1>예제 2: Closure를 사용한 개선된 방식</h1>
      <UserComponent name="신지윤" initialAge={25} birthdate='2000-03-10' />
    </div>
  )
}
export default App;