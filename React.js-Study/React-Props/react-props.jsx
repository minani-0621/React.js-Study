const root = document.getElementById("root");

function Btn({text, big}) {
    console.log(text, big);
    return (
        <button 
            style={{
                backgroundColor: "tomato",
                color:"white",
                padding:"10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize: big ? 18 : 12,
            }}
        >
            {text}
        </button>
    )
}

function App() {
    return (
        <div>
            <Btn text="Save Changes" big={true} />
            <Btn text="Continue" big={false} />
        </div>
    );
}