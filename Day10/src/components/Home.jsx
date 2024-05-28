import React from "react";
import { Link } from "react-router-dom";
import Rooms from "../Rooms.js";
import Router from '../Router';
import "../styles.css";

const Home = () => {
    return (
        <>
            <Router />
            <div id="wrapper">
                {
                    Rooms.map((props, index) => {
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
                    })
                }
            </div>
        </>
    )
}

export default Home;
