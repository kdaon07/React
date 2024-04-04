import Message from "./Message";

const msgLists = ["안녕하세요. 오늘의 일정입니다.",
    "점심시간이 11시 30분으로 변경되었습니다.",
    "이제 곧 회의가 시작됩니다."
];

function MessageList(props) {
    return (
        <div>
            <Message msg={"안녕하세요 소마고 2학년 리액트 수강학생입니다."} />
            {msgLists.map((item) => <Message msg={item} />)}
        </div>
    );
}

export default MessageList;