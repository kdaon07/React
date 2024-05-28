import React from "react";
import "./styles.css";
import roomDetails from "./Rooms";
import Card from "./components/Card";

export default function CardList() {
    return (
        <div>
            <h2>Your result is here!</h2>
            {roomDetails.map((item) => (
                <Card key={item.key} {...item}/>
            ))}
        </div>
    );
}
