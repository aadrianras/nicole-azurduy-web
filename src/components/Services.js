import React from 'react';
import { servicesData } from '../data/servicesData';

import { container, leftContent, rightContent, title, text } from '../styles/components/Services.module.css'
import { ServiceResume } from './ServiceResume';


export const Services = () => {
    return (
        <div className={container}>
            <div className={leftContent}>
                <h2 className={title}>¿Qué es la Fisioterapia?</h2>
                <p className={text}>
                    La Fisioterapia es una disciplina del área de salud que tiene como objetivo diagnosticar, prevenir, tratar y/o rehabilitar diferentes tipos de dolencias, tanto agudas como crónicas, por medio de técnicas especializadas. 
                </p>
                <h2 className={title}>Servicios</h2>
                <p className={text}>
                Primero, realizo una evaluación del estado actual del paciente, posteriormente, planifico un plan de tratamiento basado en diversas técnicas fisioterapéuticas como ser: Crioterapia, Termoterapia, Electroterapia, Masoterapia y/o ejercicios terapéuticos que serán ejecutados de acuerdo a un cronograma de sesiones. Permitiendo así, la rehabilitación del paciente y logrando la reincorporación a sus actividades cotidianas.  
                </p>
            </div>
            <div className={rightContent}>
                {servicesData.map(({ service, description }) => (
                    <ServiceResume
                        key={service}
                        service={service}
                        description={description}
                    />
                ))}
            </div>
        </div>
    )
}
