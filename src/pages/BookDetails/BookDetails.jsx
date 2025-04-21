import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB, addToStoredWishDB } from "../../utility/addToDB";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const allBooksDetail = useLoaderData();
  const singleBookDetail = allBooksDetail.find(
    (book) => book.bookId === bookId
  );
  // console.log(singleBookDetail)
  // console.log(typeof id, allBooksDetail)
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBookDetail || {};

  const handleMarkAsRead = id => {
    // store with id
    // Where to Store
    // Array or Collection
    // if book already exist then show a alert
    // if book not exist then push in the collection or array

    addToStoredDB(id)
    MySwal.fire({
        title: "Nice!",
        text: "Book was added in Mark as Read section",
        icon: "success"
      });
  }

  const handleAddToWishlist = id => {

    addToStoredWishDB(id)
    MySwal.fire({
        title: "Great!",
        text: "Book was added in the Wish List",
        icon: "success"
      });
  }

  return (
    <div className="w-2/3 mx-auto flex gap-20">
      <img className="w-[425px] p-20 bg-gray-400 rounded-2xl" src={image} alt="" />
      <div className="space-y-2">
        <h1 className="font-bold text-5xl mb-6">{bookName}</h1>
        <p className="text-[20px] opacity-50">By : {author}</p>
        <div className="flex w-full flex-col">
          <div className="divider"></div>
          <div>
            {category}
          </div>
          <div className="divider"></div>
        </div>

        <p><b>Review : </b>{review}</p>
        <div className="flex justify-start gap-3 items-center">Tags : 
            {tags.map((tag, index) => (
              <button key={index} className="text-[#0085F6] bg-gray-300 px-2 py-1 rounded-xl">
                #{tag}
              </button>
            ))}
          </div>

          <div className="divider"></div>

          <div className="space-y-2">
            <div><p className="inline opacity-50">Number of Pages :</p>  <b>{totalPages}</b></div>
            <div><p className="inline opacity-50">Publisher :</p>  <b>{publisher}</b></div>
            <div><p className="inline opacity-50">Year of Publishing :</p>  <b>{yearOfPublishing}</b></div>
            <div><p className="inline opacity-50">Rating :</p>  <b>{rating}</b></div>
          </div>

        <button onClick={() => handleMarkAsRead(id)} className="btn border border-white m-2">Mark as Read</button>
        <button onClick={() => handleAddToWishlist(id)} className="btn btn-info m-2">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
