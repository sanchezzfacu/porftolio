import React from 'react'
import cv from '../img/about-img1-without-bg.png'
import '../css/About.css'
import CircleLogo from './CircleLogo'
import github from '../img/github-logo.png'
import linkedin  from '../img/linkedin-logo.png'
document.title = 'Facundo Sanchez | Frontend Developer'

function About() {

    return (
        <div className='about-container'>
            <h1 className='about-title' ><CircleLogo/>Acerca de mi</h1>
            <div className='img-text-container'>
                <h2 className='text-about'>
                    <p>
                        Soy una persona apasionada a la tecnología que disfruta el aprender nuevas
                        herramientas. Me considero una persona autónoma a la que le encantan los desafios a corto y largo plazo.
                    </p>
                    <p>
                    Disfruto el trabajar con un grupo de personas en el que todos tiramos para el mismo lado. Cuento con buena 
                    capacidad de analisis y me apasiona todo lo relacionado a crear interfaces de usuarios es por eso que me encuentro 
                    en constante aprendizaje de nuevas herramientas que me permitan seguir creciendo como desarrollador frontend. 
                    </p>
                    <div className='github-linkedin-btn'>
                        <a href='https://www.linkedin.com/in/sanchezzfacu/' target='_blank' rel="noreferrer"><img src={linkedin} alt="" height='40px' /></a>
                        <a href='https://github.com/sanchezzfacu' target='_blank' rel="noreferrer"><img src={github} alt="" height='40px' /></a>
                    </div>
                </h2>
                <div className='img-about-container'>
                    <img className='img-about' src={cv} alt="imagen no encontada"/>
                </div>
            </div>
        </div>
    )
}

export default About
