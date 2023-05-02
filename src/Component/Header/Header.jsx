import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            {/* <a href="">home</a><a href="">about</a><a href=""></a> */}
           
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to="/Friends">Friends</ActiveLink>
            <ActiveLink to="posts">Post</ActiveLink>
        </nav>
    );
};

export default Header;