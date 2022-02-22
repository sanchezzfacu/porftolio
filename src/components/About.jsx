import React from 'react'
import cv from '../img/imagenAbout.jpg'


function About() {
    return (
        <div>
            <h1 className="about__title">QUIEN SOY?</h1>
            <img className="img__about" src={cv} alt="" height="400px" width="370"/>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit perspiciatis animi nemo voluptatem consequuntur
                unde fugiat ea alias rerum similique ullam sint vel, a, at ex blanditiis corrupti accusamus nobis 
                laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero cumque iure magnam, autem
                maxime! Harum molestias dicta tempore adipisci, cupiditate iure fugit eum ducimus, quasi quisquam alias.
                Animi, nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio labore nobis ipsum libero! 
                Itaque, nisi aliquid. Modi, repellendus cumque aut delectus itaque odio sunt corrupti sint neque maiores 
                nesciunt.
            </h2>
        </div>
    )
}

export default About
