import Header from "./components/Header";
import { Link } from "react-router-dom";
function Router() {
    return (
        <nav>
            <Header />
            <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/card">Card</Link>
                <Link to="/cardList">CardList</Link>
                <Link to="/about">about</Link>
            </div>
        </nav>
    )
}
export default Router;