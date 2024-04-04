import React from "react";

let foo = ["one", "two", "three"];
let [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);

let user = { name: "soma", age: 20};
let {name, age} = user;
console.log(name);
console.log(age);

function Foo(props) {
    return(
        <div>
            {
                <li> {props.data}</li>
            }
        </div>
    );
}

function Car(props) {
    return <li>I am a { props.data }</li>;
}

function MapTest1() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>foo 배열 출력하기</h1>
            <ul>
                {foo.map((item) => <Foo data={item} />)}
            </ul>
            <h1>차고에 있는 차 목록</h1>
            <ul>
                {cars.map((item) => <Car data={item} />)}
            </ul>
        </>
    );
}

export default MapTest1