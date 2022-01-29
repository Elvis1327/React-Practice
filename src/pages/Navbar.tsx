import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="_navbar-container">
            <h1 className="_navbar-h1">
                Crud App
            </h1>
            <nav className="_navbar-nav">
                <ul className="_navbar-ul">
                    <li className='_navbar-li'>
                        <Link to="/" className="_navbar-links"> Create </Link>
                    </li>
                    <li className='_navbar-li'>
                        <Link to="/manage" className="_navbar-links">Manage</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
