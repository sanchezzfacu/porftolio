import React from 'react'
import '../css/Presentation.css'

function Presentation() {
    return (
        <div className='presentation-container'>
            <h4 className='saludo'>Hola, mi nombre es</h4>
            <h1 className='big-font-presentation'>Facundo Sánchez.</h1>
            <h2 className='gradient-name big-font-presentation'>Frontend Developer.</h2>
            <h3 className='presentation-text'>Soy un Front-End developer de Argentina. Me encanta todo lo relacionado con frontend.
                Actualmente me encuentro en búsqueda de mi primer experiencia IT y estoy preparado y super 
                motivado por conseguirlo.
            </h3>
            <a href="https://drive.google.com/file/d/1E8Ru30CwXO_QkSNqR72INPdqBN2OyJA_/view" target='_blank' rel='noreferrer'>
                <button>
                    Ver Currículum
                </button>
            </a>
        </div>
    )
}

export default Presentation
