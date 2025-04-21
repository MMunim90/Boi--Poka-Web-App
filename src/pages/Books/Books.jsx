import React, { Suspense} from "react";
import Book from "../Book/Book";

const Books = ({ books }) => {
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //     fetch("booksData.json")
  //     .then(res => res.json())
  //     .then(data => {
  //         setAllBooks(data)
  //     })
  // },[])

  // const bookPromise = fetch('./booksData.json').then(res => res.json())
  return (
    <div>
      <h1 className="text-4xl text-center p-6 font-bold">Books</h1>
      <Suspense fallback={<span>Please wait.....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
