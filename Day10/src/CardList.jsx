import "./styles.css"
import roomDetails from "./Rooms"
import Card from "./components/Card"
export default function CardList() {
    return (
        <div>
            <h2>Your result is here!</h2>
            {roomDetails.map((item) =>
                <Card key={item.key} image={item.image} location={item.location} name={item.name} totalGuest={item.totalGuest} rating={item.rating} numberOfRating={item.numberOfRating} price={item.price}/>
            )}
        </div>
    )
}