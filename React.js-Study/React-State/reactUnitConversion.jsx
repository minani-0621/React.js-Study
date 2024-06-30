const root = document.getElementById("root");

function MinutesToHours() {
    const [amount, setAmount] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);
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

function KmToMile() {
    const [distance, setDistance] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);
    const onChange = (event) => {
        setDistance(event.target.value);
    }
    const reset = () => {
        setDistance(0);
    }
    const onInvert = () => {
        reset();
        setInverted(!inverted);
    }
    return (
        <div>
            <div>
                <label htmlFor="km">Km </label>
                <input 
                    value={!inverted ? distance : distance * 1.609344}
                    id="km"
                    type="number" 
                    placeholder="Km"
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor="mile">Mile </label>
                <input 
                    value={inverted ? distance : distance / 1.609344}
                    id="mile"
                    type="number" 
                    placeholder="Mile"
                    onChange={onChange}
                    disabled={!inverted}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onInvert}>{inverted ? "Mile -> Km" : "Km -> Mile"}</button>
        </div>
    );
}

function UsdToKrw() {
    const [amount, setAmount] = React.useState(0);
    const [rate, setRate] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    }
    const rateChange = (event) => {
        setRate(event.target.value);
    }
    const reset = () => {
        setAmount(0);
    }
    const onInvert = () => {
        reset();
        setInverted(!inverted);
    }
    return(
        <div>
            <div>
                <label htmlFor="rate">KRW/USD </label>
                <input
                    id="rate"
                    type="number"
                    placeholder="rate"
                    onChange={rateChange}
                />
            </div>
            <div>
                <label htmlFor="usd">USD</label>
                <input
                    value={!inverted ? amount : amount / rate}
                    id="USD"
                    type="number"
                    placeholder="USD"
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor="krw">KRW</label>
                <input
                    value={inverted ? amount : amount * rate}
                    id="KRW"
                    type="number"
                    placeholder="KRW"
                    onChange={onChange}
                    disabled={!inverted}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onInvert}>{inverted ? "USD -> KRW" : "KRW -> USD"}</button>
        </div>
    )
}

function App() {
    const [index, setIndex] = React.useState("-1");
    const onSelect = (event) => {
        setIndex(event.target.value);
    }
    return (
        <div>
            <h1>Super Converter</h1>
            <label htmlFor="selectMode">Mode </label>
            <select id="selectMode" onChange={onSelect}>
                <option value="-1">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
                <option value="2">USD & KRW</option>
            </select>
            <hr/>
            {index === "-1" ? <h3>Please select your units</h3> : null}
            {index === "0" ? <MinutesToHours /> : null}
            {index === "1" ? <KmToMile /> : null}
            {index === "2" ? <UsdToKrw/> : null}
        </div>
    );
}