import React from 'react'
import cv from '../img/imagenAbout.jpg'
import '../css/About.css'
import CircleLogo from './CircleLogo'
document.title = 'Facundo Sanchez | Frontend Developer'

function About() {
    return (
        <div className='about-container'>
            <h1 className='about-title' ><CircleLogo/>Acerca de mi</h1>
            <div className='img-text-container'>
                <h2 className='text-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit perspiciatis animi nemo voluptatem consequuntur
                    unde fugiat ea alias rerum similique ullam sint vel, a, at ex blanditiis corrupti accusamus nobis 
                    laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero cumque iure magnam, autem
                    maxime! Harum molestias dicta tempore adipisci, cupiditate iure fugit eum ducimus, quasi quisquam alias.
                    Animi, nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio labore nobis ipsum libero! 
                    Itaque, nisi aliquid. Modi, repellendus cumque aut delectus itaque odio sunt corrupti sint neque maiores 
                    nesciunt.
                    <div className='github-linkedin-btn'>
                        <a href='https://www.linkedin.com/in/sanchezzfacu/' target='_blank' rel="noreferrer"><button>Linkedin</button></a>
                        <a href='https://github.com/sanchezzfacu' target='_blank' rel="noreferrer"><button>Github</button></a>
                    </div>
                </h2>
                <img className='img-about' src={cv} alt="imagen no encontada"/>
            </div>
        </div>
    )
}

export default About
