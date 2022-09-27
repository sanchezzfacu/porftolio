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
                        Soy un apasionado a la tecnología que disfruta el adquirir nuevos conocimientos y experiencias. 
                         Soy una persona a la que le motivan los desafios ya que me fuerzan a mejorar y a aprender 
                         nuevas cosas.
                    </p>
                    <p>
                        Me motiva ser parte de un grupo de personas en el que todos tiramos para el mismo lado para conseguir metas 
                        y objetivos en el corto y largo plazo. 
                    </p>
                    <p>
                        Cuento con buena capacidad de analisis y soy un apasionado a todo lo relacionado
                        a crear interfaces de usuarios, es por eso que me encuentro en constante aprendizaje de nuevas 
                        herramientas que me permitan seguir creciendo como desarrollador frontend. 
                    </p>
                    <p>
                        Ya dije que me apasiona crear interfaces de usuario? 😁
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
