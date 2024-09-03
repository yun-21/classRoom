function useState(initialValue) {
  let _value = initialValue;

  const state = () => _value;
  const setState = (newValue) => {
    _value = newValue;
  };

  return [state, setState];
}

const [count, setCount] = useState(1);
console.log(count()); // 1
setCount(2);
console.log(count()); // 2