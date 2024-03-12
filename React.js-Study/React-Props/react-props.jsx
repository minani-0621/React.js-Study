const root = document.getElementById("root");

function Btn({text, onClick}) { {/* 첫번째 Btn 컴포넌트에 인자로 onClick prop이 전달되었으므로, 첫번째 Btn 컴포넌트에서 onClick prop를 이용해 컴포넌트를 구성할 수 있게 된다. */}
    return (
        <button 
            onClick={onClick}
            style={{
                backgroundColor: "tomato",
                color:"white",
                padding:"10px 20px",
                border: 0,
                borderRadius: 10,
            }}
        >
            {text}
        </button>
    )
}

{/* 부모 컴포넌트의 state를 변경하면 당연히 자식 컴포넌트들도 리렌더링이 일어나는데, 이 때 React.memo()로 prop의 변경이 일어난 부분만 리렌더링 시킬 수 있다.
어떤 부모 컴포넌트가 수 많은 자식 컴포넌트를 가지고 있는 경우 React.memo()를 통해 불필요한 리렌더링을 줄일 수 있는 것이다. 컴포넌트가 React.memo()로 wrapping 될 때, 
React는 컴포넌트를 렌더링하고 결과를 메모이징한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징된 내용을 재사용한다. */}
const MemorizedBtn = React.memo(Btn); 

function App() {
    const [value, setValue] = React.useState("Save Changes");
    const changeValue = () => setValue("Revert Changes");
    return (
        <div>
            <MemorizedBtn text={value} onClick={changeValue} /> {/* App 컴포넌트에서 첫번째 Btn에 onClick은 onClick 리스너가 아니라 그저 prop의 이름일 뿐이다. onClick prop은 changesValue 함수를 갖는데, 이 함수는 App 컴포넌트의 state인 value의 값을 "Revert Changes"로 바꿔준다. */}
            <MemorizedBtn text="Continue" />
        </div>
    )
}
/* props에 String, true/false 뿐만 아니라 function도 보낼 수 있다. 이것은 JSX로 html 태그 자체에 이벤트 리스너를 넣는 것과는 전혀 다른 것이다.
그저 이벤트를 실행시키는 함수가 프로퍼티로 들어간 것임. prop은 그냥 부모에서 자식으로 데이터를 넘길 때 사용하는 argument의 역할을 하는 것일뿐! */