import axios from 'axios'

export default function AxiosTest() {
    return (
        <button onClick={() => {
            axios.get('https://mikki32sw.github.io/airanb/data.json').then(
                (결과)=>{console.log(결과.data)}).catch(()=>{console.log("실패함")}
            )
        }}>버튼</button>
    );
}