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
                    <h3>Mi pasión...</h3>
                    <p>Cillum labore quis incididunt consequat ad nulla do Lorem eu enim. Esse tempor esse irure quis sunt non do nostrud officia anim ea duis culpa. Magna nisi laborum do excepteur quis consectetur consequat dolor. Velit incididunt veniam cupidatat eiusmod non non qui ad qui tempor. Lorem laboris aliquip aute minim eu ipsum anim quis.</p>
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
