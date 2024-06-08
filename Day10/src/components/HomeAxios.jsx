import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Rooms from "../Rooms.js";
import Router from '../Router';
import "../styles.css";

export default function HomeAxios() {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState(Rooms);

    return (
        <>
            <Router />
            <div id="wrapper">
                {rooms.map((props, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/card/${props.key}`}>
                                <div className="box image">
                                    <img src={props.image} className="boximage" alt="Room" />
                                </div>
                            </Link>
                            <div>{props.name}</div>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => {
                axios.get('https://mikki32sw.github.io/airanb/data.json')
                    .then((결과) => {
                        console.log(결과.data)
                        const copyRooms = [...Rooms, ...결과.data];

                        setRooms(copyRooms);
                    })
                    .catch(() => {
                        console.log("실패함");
                    })
            }}>더보기</button>

        </>
    )
}