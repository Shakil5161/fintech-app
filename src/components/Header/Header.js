import React from 'react';
import HeaderCard from './HeaderCard/HeaderCard';
import Navbar from './Navbar/Navbar';
import "./Header.css"

const Header = () => {
    return (
        <div className="bg-color header">
            <Navbar/>
            <HeaderCard/>
        </div>
    );
};

export default Header;