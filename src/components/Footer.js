import React from 'react';
import { container, madeIn, holos } from '../styles/components/Footer.module.css';

export const Footer = () => {
    return (
        <footer className={container}>
            <p className={madeIn}>
                Elaborado por
                <a
                    href='https://holos73.media'
                    target='_blank'
                    rel="noreferrer"
                    className={holos}                >
                    Holos 73 ©
                </a>
            </p>
        </footer>
    )
}
