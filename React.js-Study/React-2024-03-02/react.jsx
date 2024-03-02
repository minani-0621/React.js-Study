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
/* 내가 만든 컴포넌트를 직접 자리에 넣을 때는 대문자로 시작해야 됨. 소문자 즉 button과 같이 적으면 내가 만든 컴포넌트 Button이 아니라
html 태그의 종류 중 하나인 button 태그로 인식하게 됨. */
const Container = () => (
    <div>
        <Title />
        <Button />
    </div>
)
