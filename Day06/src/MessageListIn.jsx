import React, { useState } from "react";

const msgs = [
  "안녕하세요. 오늘의 일정입니다.",
  "점심시간이 11시 30분으로 변경되었습니다.",
  "이제 곧 회의가 시작됩니다."
];
let targetId = 0;

export default function MessageListCRUD() {
  const [msgLists, setMsgLists] = useState(msgs);
  const [input, setInput] = useState("");

  const onInsert = () => {
    if (input.trim() !== "") {
      setMsgLists([...msgLists, input]);
      setInput("");
    }
  };

  const onDelete = (idx) => {
    const updatedMsgLists = msgLists.filter((msg, index) => index !== idx);
    setMsgLists(updatedMsgLists);
    setInput("");
  };

  const onModify = () => {
    if (targetId !== null && input.trim() !== "") {
      const updatedMsgLists = [...msgLists];
      updatedMsgLists[targetId] = input;
      setMsgLists(updatedMsgLists);
      setInput("");
      targetId = null;
    }
  };

  const Message = ({ msg, idx }) => {
    return (
      <div className="wrapper">
        {msg}
        <div className="control">
          <span onClick={() => {
            setInput(msgLists[idx]);
            targetId = idx;
          }}>🖋</span>&nbsp;&nbsp;&nbsp;
          <span onClick={() => onDelete(idx)}>🗑</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      {msgLists.map((item, index) => (
        <Message key={index} msg={item} idx={index} />
      ))}
      <div className="container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={onInsert}>등록</button>
        <button onClick={onModify}>수정</button>
        <button onClick={() => setInput("")}>취소</button>
      </div>
    </div>
  );
}
