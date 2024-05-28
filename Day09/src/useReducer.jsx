import { useState, useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}

export default function UseReducer() {
    const [number, dispatch] = useReducer(reducer, 0);
    //2. useState대신 리듀서함수, 초기값을 쓰는 변수 number 로 수정하시오.
    const onIncrease = () => {
        dispatch({ type: 'INC' });
        //3. dispatch를 사용하여 수정하시오.   dispatch({type: 'INC'})
    }
    const onDecrease = () => {
        dispatch({ type: 'DEC' });
        //4. dispatch를 사용하여 수정하시오.   
    }

    return (
        <div>
            <h1>{number}
            </h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}