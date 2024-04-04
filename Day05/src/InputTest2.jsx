import { useState } from "react";
import './style.css'
const Modal = (props) => {
    const { name, nickname, email } = props;
    return (
        <div id="modal">
            입력된 이름은 <span>{name}</span>이고, 닉네임은 <span>{nickname}</span>, 입력된 이메일은 <span>{email}</span> 입니다.
        </div>
    );
}
export default function InputTest2() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
        email: '',
    }); // 객체의 주소 100번지
    const { name, nickname, email } = inputs;

    return (
        <div>
            <form action=" ">
                <h1> 로그인</h1>

                <li >이름<input type="text" name="name" value={name} onChange={
                    (e) => setInputs({
                        ...inputs,
                        [e.target.name]: e.target.value,
                    })} /></li>
                <li>닉네임<input type="text" name="nickname" value={nickname} onChange={
                    (e) => setInputs({
                        ...inputs,
                        [e.target.name]: e.target.value,
                    })} /></li>
                <li>이메일<input type="email" name="email" value={email} onChange={
                    (e) => setInputs({
                        ...inputs,
                        [e.target.name]: e.target.value,
                    })} /></li>

                <li><button type="submit" action="" onClick={() => alert("등록이 완료되었습니다.")}> 등록 </button>
                    <button onClick={() =>
                        setInputs({
                            ...inputs,
                            name: "",
                            nickname: "",
                            email: "",
                        })
                    }>취소</button></li>
            </form>
            {
                name && nickname && email ?
                    <Modal {...inputs} /> : ""
            }
        </div>
    );

}