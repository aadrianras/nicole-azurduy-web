import React from 'react';

import { serviceResumeBox } from '../styles/components/Services.module.css'

export const ServiceResume = ({ service, description }) => {
    return (
        <div className={serviceResumeBox}>
            <h2>{service}</h2>
            <p>{description}</p>
        </div>
    )
}
