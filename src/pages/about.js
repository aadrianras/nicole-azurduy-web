import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { MainLayout } from '../components/MainLayout';
import { container, left, right, nicolePortrait, title, text } from '../styles/components/About.module.css';


const AboutPage = () => {
    return (
        <MainLayout>
            <div className={container}>
                <div className={left}>
                    <h2 className={title}>Sobre mi...</h2>
                    <p className={text}>
                        Consectetur eu excepteur veniam aliquip. Culpa non voluptate laboris non consectetur consectetur tempor ea amet sunt cillum aliqua dolore consequat. Quis ullamco minim qui qui. Laboris in deserunt dolore exercitation consectetur et et ullamco laboris aliqua commodo nostrud ullamco elit.
                    </p>
                    <p className={text}>
                        Irure occaecat minim cillum non. Minim deserunt ea aliquip dolore quis aliquip labore cupidatat commodo et esse exercitation consectetur. Magna officia id voluptate aliquip pariatur occaecat nostrud ut minim veniam dolor. Et do aliquip ullamco eiusmod dolore nostrud tempor in pariatur quis. Minim dolore velit dolor nisi ea ut adipisicing minim fugiat ex nulla voluptate. Elit sit duis aute aute Lorem commodo excepteur. Ullamco excepteur proident consequat sunt dolore do laboris ipsum ad irure laboris amet ut commodo.
                    </p>
                </div>
                <div className={right}>
                    <StaticImage
                        src='../images/nicole2.jpg'
                        alt='Fisioterapeuta Nicole Azurduy'
                        className={nicolePortrait}
                        aspectRatio='constrained'
                        width={350}
                    />
                </div>

            </div>
        </MainLayout>
    )
}


export default AboutPage;