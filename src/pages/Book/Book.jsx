// import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  // const data = use(bookPromise);
  // console.log(data)
  //   console.log(book);
  const { bookId, bookName, author, image, rating, category, tags, yearOfPublishing } =
    book || {};
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm mx-auto border border-gray-600 py-4 shadow">
        <figure className="p-4 bg-gray-300 w-11/12 mx-auto rounded-2xl">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-start gap-3">
            {tags.map((tag, index) => (
              <button key={index} className="text-[#0085F6] bg-gray-300 px-2 py-1 rounded-xl">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title text-2xl">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className="text-base">By : {author}</p>
          <div className="border-t-1 border-dashed opacity-40"></div>
          <div className="card-actions justify-between">
            <div>{category}</div>
            <div className="flex gap-3 items-center">
              {rating}
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
