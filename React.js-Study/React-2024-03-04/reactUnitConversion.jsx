const root = document.getElementById("root");

function App() {
    const [amount, setAmount] = React.useState(0);
    const [inverted, setInverted] = React.useState(false); // 분->시, 시->분 모드를 구별하기 위한 inverted State 추가 생성
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = () => {
        setAmount(0);
    };
    const onInvert = () => {
        reset();
        setInverted(!inverted);
    };
    return (
        <div>
            <h1>Super Converter</h1>
            <div>
                <label htmlFor="minutes">Minutes </label>
                <input 
                    value={inverted ? amount * 60 : amount} 
                    id="minutes" 
                    placeholder="Minutes" 
                    type="number" 
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor="hours">Hours </label>
                <input 
                    value={inverted ? amount : amount / 60} 
                    id="hours" 
                    placeholder="Hours" 
                    type="number" 
                    onChange={onChange} 
                    disabled={!inverted}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onInvert}>{inverted ? "Minutes -> Hours" : "Hours -> Minutes"}</button>
        </div>
    );
}
