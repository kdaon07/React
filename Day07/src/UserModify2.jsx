import { useRef, useState } from "react";
import "./style.css";

const UserInput = ({ onChange, name, email, onCreate }) => {
    return (
        <div>
            <input name="name" onChange={onChange} value={name} placeholder="이름을 입력" />
            <input name="email" onChange={onChange} value={email} placeholder="이메일을 입력" />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

const UserList = ({ users, email, onRemove, onToggle, onModify }) => {
    return (
        <div>
            <table>
                <tr>
                    <th>연번</th>
                    <th onClick={() => onToggle(user.id, user)}>이름</th>
                    <th>이메일</th>
                    <th></th>
                    <th></th>
                </tr>
                {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button onClick={() => onRemove(user.id)}>삭제</button></td>
                    <td><button onClick={() => onModify(user.id)}>수정</button></td>
                </tr>
            ))}
            </table>
        </div>
    );
};

const User = ({ user, onRemove, onToggle, onModify }) => {
    const { id, name, email } = user;
    return (
        <div>
            <b style={{ cursor: 'pointer', color: user.selected ? 'blue' : 'black' }} onClick={() => onToggle(id, user)}>{name}</b>
            <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button>
            <button onClick={() => onModify(id, user)}>수정</button>
        </div>
    );
};


export default function UserModify() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
    });
    const [users, setUsers] = useState([
        {
            id: 1,
            name: '강민지',
            email: 'strongminji@gmail.com',
            seleted: false,
        },
        {
            id: 2,
            name: '정소울',
            email: 'soulright@bssm.hs.kr',
            seleted: false,
        },
        {
            id: 3,
            name: '이승현',
            email: 'victorynow@example.com',
            seleted: false,
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

    const onRemove = (id) => {
        const rmUser = users.filter((user) => user.id !== id)
        setUsers(rmUser);
    }

    const onToggle = (id, user) => {
        setUsers(
            users.map(user => user.id === id ? {
                ...user,
                selected: !user.selected
            }
                : user
            )
        )
        setInputs({
            name: user.name,
            email: user.email,
        })
    }
    const onModify = (id) => {
        setUsers(
            users.map(user => user.id === id ? {
                ...user,
                name: inputs.name,
                email: inputs.email,
            }
                : user
            )
        )
        setInputs({
            name: '',
            email: '',
        })
    }

    return (
        <div>
            <UserInput onChange={onChange} name={name} email={email} onCreate={onCreate} />
            <UserList users={users} email={email} onModify={onModify} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );

}
