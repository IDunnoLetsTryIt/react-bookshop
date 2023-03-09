import { useContext } from "react";
import { useEffect, useState } from "react";
import Context from "./Context";
import CurrencyContext from "./CurrencyContext";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const { currency, exRate } = useContext(CurrencyContext);

  //   const {Context: {currency, exRate}, dispatch} = useContext(Context);

  const loadBooks = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=" +
        page
    );
    const data = await response.json();

    setBooks(data);
  };

  //   useEffect(() => {
  //     loadBooks();
  //   }, []);
  useEffect(() => {
    loadBooks();
  }, [page]);

  return (
    <div className="latest-books">
      <div className="latest-books__header">
        <h3>Latest books</h3>
        <div className="latest-books__pagination">
          Page: {page}
          
          {page > 1 ? (
            <button
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Previous Page
            </button>
          ) : (
            ""
            )}
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next Page
          </button>
        </div>
      </div>

      <div className="latest-books__books">
        {books.map((book) => (
          <div key={book.id} className="latest-books__book">
            <div className="latest-books__image">
              <img src={book.image} alt={`${book.title} cover`} />
            </div>
            <div className="latest-books__info">
              <h4 className="latest-books__book-title">{book.title}</h4>
              <div className="latest-books__book-price">
                {currency} {(book.price * exRate).toFixed(2)}
              </div>
              <div
                className="latest-books__book-description"
                dangerouslySetInnerHTML={{ __html: book.description }} //object being passed in an attribute
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
