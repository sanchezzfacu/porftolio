import React from 'react'
import DecorationCircle from './DecorationCircle'
import '../css/Presentation.css'

function Presentation() {
    return (
        <div className='presentation-container'>
            <div className="presentation-content">
                <h4 className='greeting'>Hola, mi nombre es</h4>
                <h1 className='big-font-name'>Facundo Sánchez.</h1>
                <h2 className='gradient-text big-font-presentation'>Frontend Developer.</h2>
                <h3 className='presentation-text'>
                    <p>
                        Soy un Frontend Developer de Argentina apasionado a desarrollar interfaces de usuario.
                    </p>
                    
                    <p>
                        Actualmente me encuentro en búsqueda de mi primer trabajo en IT y me encuentro en constante aprendizaje
                        para poder alcanzar ese objetivo.
                    </p>
                </h3>
                <a href="https://drive.google.com/file/d/1E8Ru30CwXO_QkSNqR72INPdqBN2OyJA_/view" target='_blank' rel='noreferrer'>
                    <button>
                        VER CURRICULUM
                    </button>
                </a>
                <DecorationCircle/>
            </div>
        </div>
    )
}

export default Presentation
