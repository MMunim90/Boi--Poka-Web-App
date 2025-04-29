import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet';

const Home = () => {
    const books = useLoaderData();
    // console.log(books)
    return (
        <div>
            <Helmet>
                <title>Boi Poka | Home</title>
            </Helmet>
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;