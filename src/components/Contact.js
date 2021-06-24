import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { container, whatsappButton, buttonIcon } from '../styles/components/Contact.module.css';



export const Contact = () => {
    return (
        <div className={container}>
            <h4>Si deseas coordinar una cita o realizarme cualquier tipo de consulta</h4>
            <p>No dudes en escribirme un mensaje, te responderé con mucho gusto.</p>
            <a
                href='https://wa.me/+59178916557'
                className={whatsappButton}
                rel="noreferrer"
                target='_blank'
            >
                <FontAwesomeIcon
                    icon={faWhatsapp}
                    className={buttonIcon}
                />
                Enviame un mensaje
            </a>
        </div>
    )
}
