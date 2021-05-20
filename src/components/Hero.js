import React from 'react';

import { container, content, logo, career } from '../styles/components/Hero.module.css';

export const Hero = () => {
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={logo}>Nicole Azurduy</h1>
                <p className={career}>Fisioterapeuta</p>
            </div>
        </div>
    )
}
