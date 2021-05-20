import React from 'react';
import { Link } from 'gatsby';


import { logo, navBar, navContainer, navItem } from '../styles/components/MainLayout.module.css';
import "@fontsource/bebas-neue"; // Defaults to weight 400.
import "@fontsource/open-sans"; // Defaults to weight 400 with all styles included.
import '@fontsource/dancing-script'; //400 500 600 700


export const MainLayout = ({ pageTitle, children }) => {
    return (
        <main>
            <title>{pageTitle}</title>
            <nav className={navBar}>
                <Link to='/' className={logo}>Nicole Azurduy</Link>
                <ul className={navContainer}>
                    <li className={navItem}><Link to="/" >Inicio</Link></li>
                    <li className={navItem}><Link to="/about" >Sobre mi</Link></li>
                </ul>
            </nav>
            {children}
        </main>
    )
}
