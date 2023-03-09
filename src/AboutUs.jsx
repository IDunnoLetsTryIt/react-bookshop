import BookList from "./BookList";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <div className="about-us">
      <h1>About us</h1>

      <p>
        Go back to the <Link to='./homepage'>homepage</Link>
      </p>
      <BookList/>
    </div>
  );
}
