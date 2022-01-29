import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CrudCreate, CrudManage, Navbar } from '../pages';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<CrudCreate />} />
                    <Route path="/:id" element={<CrudCreate />} />
                    <Route path="/manage" element={<CrudManage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

