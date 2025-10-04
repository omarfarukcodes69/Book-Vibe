import React from 'react';
import BookImg from'../../assets/BannarBook.png'

const Bannar = () => {
    return (
        <div className='flex justify-between items-center gap-5 w-[80%] bg-[#f3f3f3] mx-auto my-10 p-10 rounded-md '>
            <aside>
                <h1 className='text-4xl font-bold'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-green-400 my-5 text-white text-md '>View The List</button>
            </aside>
            <aside><img src={BookImg} alt="" /></aside>
        </div>
    );
};

export default Bannar;