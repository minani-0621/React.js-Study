const root = document.getElementById("root");

function App() {
    const [amount, setAmount] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false); // 분->시, 시->분 모드를 구별하기 위한 flipped State 추가 생성
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = () => {
        setAmount(0);
    };
    const onFlip = () => {
        reset();
        setFlipped(!flipped);
    };
    return (
        <div>
            <h1>Super Converter</h1>
            <div>
                <label htmlFor="minutes">Minutes </label>
                <input 
                    value={flipped ? amount * 60 : amount} 
                    id="minutes" 
                    placeholder="Minutes" 
                    type="number" 
                    onChange={onChange}
                    disabled={flipped}
                />
            </div>
            <div>
                <label htmlFor="hours">Hours </label>
                <input 
                    value={flipped ? amount : amount / 60} 
                    id="hours" 
                    placeholder="Hours" 
                    type="number" 
                    onChange={onChange} 
                    disabled={!flipped}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>Flip</button>
        </div>
    );
}
