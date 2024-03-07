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
            <button onClick={onInvert}>Invert</button>
        </div>
    );
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
            </select>
            <hr/>
            {index === "-1" ? <h3>Please select your units</h3> : null}
            {index === "0" ? <MinutesToHours /> : null}
            {index === "1" ? <KmToMile /> : null}
        </div>
    );
}