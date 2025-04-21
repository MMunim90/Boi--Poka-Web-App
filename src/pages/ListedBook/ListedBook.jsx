import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getStoredWishBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();
//   console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);

    const storedWishBookData = getStoredWishBook();
    const convertedWishBooks = storedWishBookData.map((id) => parseInt(id));
    const myWishList = data.filter((book) =>
      convertedWishBooks.includes(book.bookId)
    );
    setWishList(myWishList);
  }, []);

  const handleReadSort = (type) => {
    setSort(type);
    if(type === "Pages"){
        const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setReadList(sortedByPage);
    }
    if(type === "Ratings"){
        const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
        setReadList(sortedByRatings);
    }
    if(type === "Year"){
        const sortedByYear = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        setReadList(sortedByYear);
    }
  }

  const handleWishSort = (type) => {
    setSort(type);
    if(type === "Pages"){
        const sortedByPage = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
        setWishList(sortedByPage);
    }
    if(type === "Ratings"){
        const sortedByRatings = [...wishList].sort((a, b) => a.rating - b.rating);
        setWishList(sortedByRatings);
    }
    if(type === "Year"){
        const sortedByYear = [...wishList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        setWishList(sortedByYear);
    }
  }
  return (
    <div>
      <div className="place-self-center">
      <div className="dropdown dropdown-bottom dropdown-center">
        <div tabIndex={0} role="button" className="btn m-1">
        Sort By {sort ? sort : "⬇️"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => {handleReadSort("Pages"); handleWishSort("Pages");}}>Pages</a>
          </li>
          <li>
            <a onClick={() => {handleReadSort("Ratings"); handleWishSort("Ratings");}}>Ratings</a>
          </li>
          <li>
            <a onClick={() => {handleReadSort("Year"); handleWishSort("Year");}}>Published Year</a>
          </li>
        </ul>
      </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>
            <b>Book I Read : </b> {readList.length}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {readList.map((marked) => (
              <Book key={marked.bookId} book={marked}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>
            <b>My Wish List : </b> {wishList.length}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {wishList.map((wished) => (
              <Book key={wished.bookId} book={wished}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
