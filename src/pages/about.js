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
                    Tengo 24 años, nací en Coroico - La Paz, soy madre, esposa y mujer plena. Soy Fisioterapeuta y además, actualmente me encuentro cursando la carrera de Medicina.  Mi meta profesional es convertirme una reconocida Cirujana y Fisioterapeuta cardiorespiratoria.  
                    </p>
                    <p className={text}>
                    Me apasiona todo lo relacionado al cuerpo humano y la salud. Me considero una persona muy empatica con su entorno social y me gusta mucho ayudar a las personas que mas lo necesitan, sobre todo brindarles atención oportuna y de calidad sea cual sea su afección.
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