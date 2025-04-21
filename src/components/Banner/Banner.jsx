import React from 'react';
import bookimage from '../../assets/bannerbook.png'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-20 bg-gray-300 rounded-2xl w-11/12 mx-auto my-9'>
            <div>
                <h1 className='font-bold text-[56px]'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-success mt-12'><a href="../../ListedBook">View The List</a></button>
            </div>
            <div>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;