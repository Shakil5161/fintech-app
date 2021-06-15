import React from 'react';
import Wallet from './Wallet/Wallet';
import Navbar from './Navbar/Navbar';
import "./Header.css"


const Header = () => {
    return (
        <div className="bg-color header">
            <Navbar/>
            <Wallet/>
        </div>
    );
};

export default Header;