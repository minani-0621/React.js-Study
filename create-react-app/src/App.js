import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render"); {/* 렌더링이 두번씩 발생하는 이유는 index.js에서 App 컴포넌트가 React.StrictMode 태그에 감싸져 있어서 그렇다. StrictMode 태그는 
                            create-react-app으로 설치했을 때 기본적으로 생성되는 태그로, 해당 태그로 감싸져 있는 경우 자손까지 검사하기 때문에 App 컴포넌트가 두 번 실행되는 것이다. */}
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
