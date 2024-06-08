import React from "react";
import "../styles.css";
import Rooms from "../Rooms.js"
import { useParams } from "react-router-dom";

const Detail = (props) => {
    let room = Rooms.find(room => room.key === parseInt(useParams().id));

    return (
        <div className="container">
            <div className="box image">
                <img src={room.image} className="boximage" alt="Room" />
            </div>
            <div className="box">
                <div className="location">{room.location}에 위치</div>
                <div className="title">{room.name}</div>
                <hr />
                <div className="guest">최대인원 {room.totalGuest}명</div>
                <div className="rating">
                    평점: {room.rating}
                    <span className="visits">({room.numberOfRating})</span>
                </div>
                <div className="price">
                    {room.price} 원<span className="month">/ month</span>
                </div>
            </div>
        </div>
    );
}

export default Detail;
