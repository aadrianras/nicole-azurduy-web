import React from 'react';
import { servicesData } from '../data/servicesData';

import { container, leftContent, rightContent, title, text } from '../styles/components/Services.module.css'
import { ServiceResume } from './ServiceResume';


export const Services = () => {
    return (
        <div className={container}>
            <div className={leftContent}>
                <h2 className={title}>Servicios</h2>
                <p className={text}>
                    La Fisioterapia es una disciplina del área de salud que tiene como objetivo diagnosticar, prevenir, tratar y/o rehabilitar diferentes tipos de dolencias, tanto agudas como crónicas, por medio de técnicas especializadas. 
                </p>
                <p className={text}>
                    En este sentido, utilizo las diversas técnicas existentes como ser, ejercicios  terapéuticos y/o agentes físicos como la crioterapia, termoterapia, electricidad, tracciones o masoterapia, para la rehabilitación del paciente logrando la reincorporación a sus actividades cotidianas.  
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
