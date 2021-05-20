import { Link } from "gatsby";
import React from "react";
import { container, content, logo, career, backButton } from '../styles/components/Hero.module.css';

const NotFoundPage = () => {
  return (
    <>
      <div className={container}>
        <div className={content}>
          <h1 className={logo}>Ooops... Esta página es incorrecta</h1>
          <p className={career}>Parece que te equivocaste de URL, vuelve al inicio por favor</p>
          <Link to='/' className={backButton}>Volver al inicio</Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
