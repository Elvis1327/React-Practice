import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CrudControl, CrudCreate } from '../components/crud';
import { Navbar } from '../components/shared';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<CrudCreate />} />
                    <Route path="/:id" element={<CrudCreate />} />
                    <Route path="/manage" element={<CrudControl />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

