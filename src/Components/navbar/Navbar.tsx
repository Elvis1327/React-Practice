import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';

import { menuItems } from './utiliries';
import './navbar.css';
import Button from '../Button';

const Navbar = () => {

    const [ toggle, setToggle ] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }
    console.log(toggle)
    return (
        <nav className="Navbar-Items">
            <h1 className="navbar-logo">
                <FaApple className="fa-apple" />
            </h1>
            <div className="menu-icon" onClick={handleClick}>
                {toggle ? <GiCancel  /> : <AiOutlineMenu />}
            </div>
            <ul className={toggle ? 'nav-menu active': 'nav-menu'}>
                {menuItems.map((res, index) => (
                    <li key={index}>
                        <a href={res.url} className={res.cName}>
                            {res.title} 
                        </a>
                    </li>
                ))}
            </ul>
            <Button>Sign Up</Button>
        </nav>
    );
};

export default Navbar;
