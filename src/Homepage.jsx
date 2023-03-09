import BookList from "./BookList"
import { Link } from "react-router-dom"
export default function Homepage() {
    return (
        <div className="homepage">
            <h1>Welcome back to Elkins & Sons</h1>

            <p>
                Read more about us <Link to='/about-us'> here </Link>
            </p>

            <BookList />
        </div>
          
    )
}