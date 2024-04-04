import { useState } from "react";

function GoalAnd(props) {

    const {isGoal, msg} = props;
    if (isGoal) {
        return <h2>Goal!<br /> {msg}</h2>
    }
    else {
        return <h2>MISSED!<br/> {msg}</h2>;
    }
}
//   Ternary Operator(삼항 연산자)
//   조건 ? 참일때 실행할 요소 : 거짓일때 실행할 요소
function GoalTernary(props) {

    const {isGoal, msg} = props;
    return (
        <>
        {isGoal ? <h2>Goal!<br/> {msg}</h2>:<h2>MISSED!<br/>{msg}</h2>}
        </>
    );



}
//   Logical && Operator
//   조건이 참(truecy) 이면 && 왼쪽 요소를 실행함.
function Garage(props) {
    const {cars} = props;
    return (
        <div>
            <h2>차고 상황</h2>
            <h3>차고에 {cars.length}대의 차가 있습니다.</h3>
        </div>
    );
}

export default function ConditionTest() {
    const [goal, setGoal] = useState(false);
    const cars = ['Ford', 'BMW', 'Audi', 'ioric'];

    return (
        <div style={{ margin: '20px' }}>
            {
                !goal ?
                    <button onClick={() => setGoal(true)}>골 실패</button> :
                    <button onClick={() => setGoal(false)}>골 성공</button>
            }

            <GoalAnd isGoal = {goal} msg = {"&&연산자 사용"}/>
            <GoalTernary isGoal = {goal} msg = {"삼향연산자 사용"}/>
            <Garage cars = {cars}/>
        </div>
    );



}