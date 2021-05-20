import React from 'react';
import { Link } from 'gatsby';


import { logo, navBar, navContainer, navItem } from '../styles/components/MainLayout.module.css';
import "@fontsource/bebas-neue"; // Defaults to weight 400.
import "@fontsource/open-sans"; // Defaults to weight 400 with all styles included.
import '@fontsource/dancing-script'; //400 500 600 700
import { Footer } from './Footer';


export const MainLayout = ({ pageTitle, children }) => {
    return (
        <>
            <nav className={navBar}>
                <Link to='/' className={logo}>Nicole Azurduy</Link>
                <ul className={navContainer}>
                    <li className={navItem}><Link to="/" >Inicio</Link></li>
                    <li className={navItem}><Link to="/about" >Sobre mi</Link></li>
                </ul>
            </nav>
            <main>
                <title>{pageTitle}</title>
                {children}
            </main>
            <Footer />
        </>
    )
}
