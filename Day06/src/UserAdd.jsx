import { useRef, useState } from "react";
import "./style.css";

const User = ({ user, onRemove }) => {
    const {id, name, email } = user;
    return (
        <div>
            {name} <span>{email}</span> <button>삭제</button>
        </div>
    );
};


export default function UserAdd() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
    });
    const [users, setUsers] = useState([
        {
            id: 1,
            name: '강민지',
            email: 'strongminji@gmail.com'
        },
        {
            id: 2,
            name: '정소울',
            email: 'soulright@bssm.hs.kr'
        },
        {
            id: 3,
            name: '이승현',
            email: 'victorynow@example.com'
        }
    ]);


    const { name, email } = inputs;
    const nextId = useRef(4);

    const onChange = (e) => { //input에 반영될 내용 수정
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    };

    const onCreate = () => {
        const user1 = {
            id: nextId.current,
            name,
            email,
        };
        setUsers([...users, user1])
        nextId.current += 1;
    }

    return (
        <div>
            <input name="name" onChange={onChange} value={name} placeholder="이름을 입력" />
            <input name="email" onChange={onChange} value={email} placeholder="이메일을 입력" />
            <button onClick={onCreate}>등록</button>
            {
                users.map((user) => { return <User user={user}/> })//    map을 사용하여 user리스트 출력  
            }
        </div>
    );

}
