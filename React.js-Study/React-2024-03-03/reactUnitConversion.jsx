const root = document.getElementById("root");

function App() {
    const [minutes, setMinutes] = React.useState();
    const onChange = (event) => { // jsx는 js처럼 이벤트를 처리할 수 있게 리액트가 처리할 수 있는 가상의 이벤트인 SyntheticBaseEvent 객체를 생성해준다.
        setMinutes(event.target.value); // target은 이벤트가 발생한 해당 객체를 의미(이 코드에선 id가 minutes인 input태그임)
    };
    return (
        <div>
            <h1 className="hi">Super Converter</h1>
            <label htmlFor="minutes">Minutes</label>
            <input 
                value={minutes} 
                id="minutes" 
                placeholder="Minutes" 
                type="number" 
                onChange={onChange}
            />
            <h4>You want to convert {minutes}</h4>
            <label htmlFor="hours">Hours</label>
            <input id="hours" placeholder="Hours" type="number" />
        </div>
    );
}
