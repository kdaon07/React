import { useEffect, useState } from "react";

export default function UseEffect2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("=====================");
        console.log("컴포넌트 마운티드");
    }, []);

    useEffect(() => {
        if (count >= 0 && count <= 10) {
            console.log(`변경후 인원수 : ${count}`);
        }
        return () => {
            if (count >= 0 && count <= 10) {
                console.log(`변경전 인원수 : ${count}`);
                console.log("=====================");
            }
        }
    }, [count]);

    const Modal = () => {
        useEffect(() => {
            return () => {
                if (count >= 0 && count <= 10) {
                    console.log("=====================");
                    console.log("UseEffect가 실행됨");
                    console.log("is Full : " + (count === 10));
                }
            };
        })

        return (
            <div>
                <p>총 {count}명 수용했습니다.</p>
                <button type="button" onClick={() => setCount(count + 1)}>입장</button>
                <button type="button" onClick={() => setCount(count - 1)}>퇴장</button>
            </div>
        );
    }
    return (
        <Modal />
    );

}