import { useState } from "react";
import "./style.css";
const Modal = (props) => {
    const { text } = props;
    return (
        <div id="modal">
            입력한 값은 <span style={{ color: "orangered" }}>{text}</span>입니다.
        </div>
    );
}

export default function InputTest() {
    const [text, setText] = useState("");
    return (
        <div>
            <input type="text" value={text} onChange={(e) => { setText(e.target.value); console.log(e) }} />
            <button onClick={() => setText("")}>초기화</button>
            <hr />
            {
                text &&
                <Modal text={text} />
            }

        </div>
    );
}