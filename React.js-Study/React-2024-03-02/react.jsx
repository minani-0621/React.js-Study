const root = document.getElementById("root");
/*
아래 두 방식은 서로 같은 의미임.

function f1() {
    return();
}

const c1 = () => {     ... 이 방식이 간단해서 더 선호함

}

*/
function Title() {
    return(
        <h3 id="title" onMouseOver={() => console.log("mouse enter")}>Hello I'm a title</h3>
    );
}
const Button = () => (
    <button style={{backgroundColor: "tomato"}} onClick={() => console.log("im clicked")}>Click me</button>
);

const Container = () => (
    <div>
        <Title />
        <Button />
    </div>
)
