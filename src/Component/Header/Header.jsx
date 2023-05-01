import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            {/* <a href="">home</a><a href="">about</a><a href=""></a> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/Friends">Friends</Link>
            <Link to="posts">Post</Link>
        </nav>
    );
};

export default Header;