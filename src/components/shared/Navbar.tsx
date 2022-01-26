import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="_header-container">
            <h1 className='_header-h1'>
                Curd Practice
            </h1>
            <nav className="_header-nav">
                <ul className="_header-ul">
                    <li className="_header-li">
                        <Link className="_header-links" to="/">Create</Link>
                    </li>
                    <li className="_header-li">
                        <Link className="_header-links" to="/manage">Manage</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

