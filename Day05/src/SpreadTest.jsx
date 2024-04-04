export default function SpreadText() {
    const user = {
        id : 1,
        name : '박가이',
    }
    const userAdd = {
        ...user,
        email : 'abc@gmail.com',
    }
    console.log(userAdd);
    // document.write(userAdd.id);
    // document.write(userAdd.name);
    // document.write(userAdd.email);
    return (
        <>
        <h3>userAdd의 값은 {userAdd.id}, {userAdd.name}, {userAdd.email} 입니다.</h3>
        </>
    );
}