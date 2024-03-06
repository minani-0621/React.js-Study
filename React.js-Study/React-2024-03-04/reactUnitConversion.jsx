const root = document.getElementById("root");

function MinutesToHours() {
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

function KmToMiles() {
    return <h3>Km to M</h3>;
}

function App() {
    const [index, setIndex] = React.useState("-1");
    const onSelect = (event) => {
        setIndex(event.target.value);
    }
    return (
        <div>
            <h1>Super Converter</h1>
            <select onChange={onSelect}>
                <option value="-1">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
            </select>
            <hr/>
            {index === "-1" ? <h3>Please select your units</h3> : null}
            {index === "0" ? <MinutesToHours /> : null}
            {index === "1" ? <KmToMiles /> : null}
        </div>
    );
}