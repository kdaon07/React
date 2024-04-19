import { useEffect, useState } from "react";
import './style.css';

export default function UseEffect1() {
    const [name, setname] = useState("");
    const [nickname, setnickname] = useState("");
    const [modal, setModal] = useState(true);
    const [depName, setDepName] = useState("");
    useEffect(() => {
        console.log("마운트될때만 실행됩니다.");
        setTimeout(() => setModal(false), 3000);
    }, []);

    useEffect(()=>{ alert(`이펙트함수 -변경후이름:${depName}`);
        return() => {
            alert(`이펙트함수 -변경전이름:${depName}`);
    }}, [depName]);

    const Modal = (msg) => {
        useEffect(() => {
            return()=>{
                alert("Modal 컴포넌트 언마운트");
            }
        }, []);
        return (
            <div id='modal'>{msg.msg}</div>
        );
    }
    return (
        <div>
            <form>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} /> <br />
                <input type="text" value={nickname} onChange={(e) => setnickname(e.target.value)} />
                <button type="button" onClick={() => setDepName(name)} >이름출력</button>
            </form>
            <p>이름 : {name}</p>
            <p>닉네임 : {nickname}</p>
            {modal && <Modal msg="useEffect 실습입니다."/>}
        </div>
    );
}