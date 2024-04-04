import React from "react";

function MapTest2() {
    const items = [
        {id: 1, name: '빵'},
        {id: 2, name: '우유'},
        {id: 3, name: '달걀'}
    ];
    
    function checkAdult(age) {
        return age >= 18;
    }

    const ages = [32, 33, 16, 40];
    const result = ages.filter(checkAdult);

    
    return (
        <>
            <h1>식료품 리스트</h1>
            <ul>
                {items.map((item) => <li>{item.name}</li>)}
            </ul>
            <h1>filter결과</h1>
            <ul>
                {result.map((item) => <li>{item}</li>)}
            </ul>
        </>
    );
}

export default MapTest2