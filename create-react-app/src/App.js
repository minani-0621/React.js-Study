import { useEffect, useState } from "react";

function Hello() {
{/*
  useEffect(function() {
    console.log("created!");
    return function() {
      console.log("destroyed!");
    };
  }, []);  */}
// 위의 주석 처리된 useEffect() 부분과 아래의 useEffect() 부분은 서로 같은 의미이다. 익명함수로 표현했는지 안했는지 표현방법만 다를 뿐이다.
  useEffect(() => {
    console.log("created!");
    return () => console.log("destroyed!");
  }, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return(
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick} >{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   // useEffect()의 두번째 인자로 배열(deps)이 들어가는데, 이 배열안에 상태 변화를 감지할 대상을 넣는다. 만약에 배열이 비어있다면 감시하고 있는 state가 없다는 의미이므로 처음에 한번만 실행된다.
//   useEffect(() => {
//     console.log("I run only once.");
//   }, []);
//   useEffect(() => {
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when 'keyword & counter' change.");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input 
//         value={keyword} 
//         onChange={onChange} 
//         type="text" 
//         placeholder="Search here..." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

export default App;
