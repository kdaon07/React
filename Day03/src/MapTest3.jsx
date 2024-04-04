import React from "react";

function MapTest3() {
    const ages = [32, 33, 16, 40];
    const result = ages.filter((item)=>item > 18);
    const result2 = ages.filter((item)=>item != 32);

    return (
        <>
            <h2>filter 결과(18보다 큰 아이템)</h2>
            {
                result.map((item)=><li>{item}</li>)
            }
            <h2>filter 결과(32와 같지않은 아이템)</h2>
            {
                result2.map((item)=><li>{item}</li>)
            }
        </>
    );
}

export default MapTest3;