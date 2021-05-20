import React from 'react';

import { container, nicolePortrait, presentationBox, presentationText, presentationImage } from '../styles/components/Presentation.module.css'
import nicole from '../images/nicole.jpg';
import bodyPart from '../images/bodyParts.jpg';

export const Presentation = () => {
    return (
        <div className={container}>
            <img src={nicole} alt='Fisioterapeuta Nicole Azurduy' className={nicolePortrait} />
            <div className={presentationBox}>
                <div className={presentationText}>
                    <h3>Mi pasión...</h3>
                    <p>Cillum labore quis incididunt consequat ad nulla do Lorem eu enim. Esse tempor esse irure quis sunt non do nostrud officia anim ea duis culpa. Magna nisi laborum do excepteur quis consectetur consequat dolor. Velit incididunt veniam cupidatat eiusmod non non qui ad qui tempor. Lorem laboris aliquip aute minim eu ipsum anim quis.</p>
                </div>
                <img src={bodyPart} alt='' className={presentationImage} />
            </div>
        </div>
    )
}
