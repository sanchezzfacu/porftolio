import React from 'react'
import DecorationCircle from './DecorationCircle'
import '../css/Presentation.css'

function Presentation() {
    return (
        <div className='presentation-container'>
            <h4 className='saludo'>Hola, mi nombre es</h4>
            <h1 className='big-font-presentation'>Facundo Sánchez.</h1>
            <h2 className='gradient-name big-font-presentation'>Frontend Developer.</h2>
            <h3 className='presentation-text'><p>Soy un Frontend Developer de Argentina. Un apasionado a desarrollar interfaces 
                de usuario.</p>
                <p>
                    Actualmente me encuentro en búsqueda de mi primer trabajo en IT y me encuentro en constante aprendizaje
                    para el día que llegue poder darlo todo.
                </p>
            </h3>
            <a href="https://drive.google.com/file/d/1E8Ru30CwXO_QkSNqR72INPdqBN2OyJA_/view" target='_blank' rel='noreferrer'>
                <button>
                    Ver Currículum
                </button>
            </a>
            <DecorationCircle/>
        </div>
    )
}

export default Presentation
