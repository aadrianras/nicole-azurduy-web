import React from 'react';
import { Link } from 'gatsby';


import '../styles/MainLayout.module.sass';
import "@fontsource/bebas-neue"; // Defaults to weight 400.
import "@fontsource/open-sans"; // Defaults to weight 400 with all styles included.

export const MainLayout = ({ pageTitle, children }) => {
    return (
        <main>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )
}
