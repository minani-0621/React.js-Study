const root = document.getElementById("root");
/* const x = [1, 2, 3] 일때, const a = x[0], const b = x[1], const c = x[2] 처럼 안하고, const [a, b, c] = x 처럼 작성할 수 있다.
    a에 x배열 첫번째 요소, b에 x배열 두번째 요소, c에 x배열 세번째 요소를 넣는것과 같다. */
function App() {
    const [counter, setCounter] = React.useState(0); // React.useState()는 [요소, 요소를 다룰 함수]의 형태를 가진다.
    const onClick = () => {
        /* State를 세팅하는 데는 2가지 방법이 있다. */
        // setCounter(counter + 1); // 1. 직접 값을 설정해주기
        setCounter((current) => current + 1); // 2. 함수를 전달해서 설정해주기
    }
    return (
        <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}
// state가 변경되면 React.js가 자동으로 변경된 부분만 리랜더링 해준다.