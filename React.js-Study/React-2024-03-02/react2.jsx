const root = document.getElementById("root");

let counter = 0;

function countUp(){
    counter = counter + 1;
    render();
}

function render(){
    ReactDOM.render(<Container />, root);
}

const Container = () => (
    <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick={countUp}>Click me</button>
    </div>
)
/* 바닐라js에서는 이벤트 리스너를 통해서 갱신된 데이터를 다시 렌더링 할 때, 데이터가 담겨있는 태그요소 전체를 
리렌더링 하는데, React.js에서는 html요소가 아니라 오로지 갱신된 데이터 그 자체만을 리렌더링하는 장점이 있다. */