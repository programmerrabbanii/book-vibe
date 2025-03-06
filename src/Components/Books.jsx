import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [book,setBooks]=useState([])
    useEffect(()=>{
        fetch("/vibe.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className='mt-10 '>
            <h3 className='text-center font-semiboald text-3xl pb-9'>Books {book.length}</h3>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {book.map(bookCard=> <Book key={bookCard.id} bookCard={bookCard}></Book>)}
            </div>
        </div>
    );
};

export default Books;