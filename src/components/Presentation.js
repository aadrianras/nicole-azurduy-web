import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { container, nicolePortrait, presentationBox, presentationText, presentationImage } from '../styles/components/Presentation.module.css'

export const Presentation = () => {
    return (
        <div className={container}>
            <StaticImage
                src='../images/nicole.jpg'
                alt='Fisioterapeuta Nicole Azurduy'
                className={nicolePortrait}
                aspectRatio='constrained'
            />
            <div className={presentationBox}>
                <div className={presentationText}>
                    <h3>¿Mi pasión? ¡Es ayudar!</h3>
                    <p>Para mi cada paciente y su familia son especiales y tienen necesidades unicas. Por lo tanto, los planes de tratamiento son diseñados de manera personalizada, basado en diferentes técnicas profesionales que permiten obtener resultados en el menor plazo posible mientras se genera bienestar y calidad de vida.</p>
                </div>
                <StaticImage
                    src='../images/bodyParts.jpg'
                    alt=''
                    className={presentationImage}
                />
            </div>
        </div>
    )
}
