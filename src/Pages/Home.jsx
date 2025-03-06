import React from 'react';
import Bannar from '../Components/Bannar';
import Books from '../Components/Books';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Bannar></Bannar>
            <Books></Books>
        </div>
    );
};

export default Home;