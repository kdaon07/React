import { useState } from 'react'
import "./style.css";

export default function ConditionR() {
    const [login, setLogin] = useState(false);
    return (
        <div>
            <div className='wrapp'>
                {login && <span className='greeting'>환영합니다.~</span>}
                {
                    login ?
                        <button className='btn' onClick={() => setLogin(false)}>로그아웃</button> :
                        <button className='btn' onClick={() => setLogin(true)}>로그인</button>
                }
            </div>
            <hr />
            <div style={{ paddingTop: '8px' }}>모두함께 리액트 공부</div>
        </div>
    );
}