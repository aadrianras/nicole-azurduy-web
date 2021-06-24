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
                    <h3>Mi pasión es ayudar...</h3>
                    <p>Para mi, cada paciente y su familia son diferentes y tienen necesidades unicas. Mi meta es diseñar un plan de tratamiento individual basado en diferentes técnicas profesionales que permitan obtener los resultados optimos en cada paciente.</p>
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
