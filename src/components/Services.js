import React from 'react';
import { servicesData } from '../data/servicesData';

import { container, leftContent, rightContent } from '../styles/components/Services.module.css'
import { ServiceResume } from './ServiceResume';


export const Services = () => {
    return (
        <div className={container}>
            <div className={leftContent}>
                <h2>Servicios</h2>
                <p>Deserunt nisi nisi enim id. Proident pariatur do quis sit. Do in cillum consectetur qui aliqua laborum. Duis aliquip amet sit nulla non ut ad.
                </p>
                <p>
                    Lorem aliquip velit pariatur veniam non exercitation nostrud nulla laboris irure. Pariatur do officia ex nostrud fugiat laborum anim. Occaecat sunt veniam et cupidatat et velit consequat in sit et adipisicing velit aute. Duis cillum proident occaecat id exercitation id tempor aliquip elit.
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
