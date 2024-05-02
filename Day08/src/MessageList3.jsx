import { useState, useRef } from "react";
import { MdHome } from "react-icons/md";
import "./style.css"
const msgs = [
    "안녕하세요. 오늘의 일정입니다.",
    "점심시간이 11시 30분으로 변경되었습니다.",
    "이제 곧 회의가 시작됩니다."
];

const InputMsg = ({ input, setInput, onCreate }) => {
    return (
        <div>
            <h1>일정 관리</h1>
            <div className="container">
                <input type="text" name="msg" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={onCreate}>등록</button>
                <button onClick={() => setInput('')}>취소</button>
            </div>
        </div>
    )
}
const Message = ({ msg, id, onRemove, onModify, setInput }) => {
    return (
        <div>
            <div className="wrapper" onClick={() => setInput(msg)}>{msg}
                <div className="control">
                    <button onClick={() => onRemove(id)}>삭제</button>
                    <button onClick={() => onModify(id)}>수정</button>
                </div>
            </div>
        </div>
    );
}

export default function MsgListLast() {
    //7-2 MeesageList2컴포넌트를 복사하여 수정하시오.
    const [input, setInput] = useState('');
    const [msgList, setMsgList] = useState([
        {
            id: 1,
            msg: msgs[0],
        },
        {
            id: 2,
            msg: msgs[1],
        },
        {
            id: 3,
            msg: msgs[2],
        }
    ]);

    const nextId = useRef(4);

    const onCreate = () => {
        const newMsg = {
            id: nextId.current,
            msg: input,
        };
        setMsgList([...msgList, newMsg]);
        nextId.current += 1;
    }

    const onRemove = (id) => {
        const filteredList = msgList.filter((msg1) => msg1.id !== id);
        setMsgList(filteredList);
    }

    const onModify = (id) => {
        setMsgList(
            msgList.map(msg1 => msg1.id === id ? {
                ...msg1,
                msg: input,
            } : msg1)
        );
    }
    return (
        <div>
            <InputMsg input={input} setInput={setInput} onCreate={onCreate} />
            {
                msgList.map(({ id, msg }) => (
                    <Message msg={msg} id={id} onRemove={onRemove} onModify={onModify} setInput={setInput} />
                ))
            }
            <MdHome />
        </div>
    )
}