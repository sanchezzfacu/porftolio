import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import DecorationCircle from './DecorationCircle'
import '../css/Presentation.css'

function Presentation() {
    const greeting = useRef()
    const name = useRef()
    const gradient = useRef()
    const presentation = useRef()
    const btnCv = useRef()
    
    useEffect(() => {
        gsap.from(greeting.current, 3, {
            opacity: 0,
            x: -20
        })
        gsap.from(name.current, 3, {
            opacity: 0,
            x: -20
        })
        gsap.from(gradient.current, 3, {
            opacity: 0,
            x: -20
        })
        gsap.from(presentation.current, 3, {
            opacity: 0,
            x: -20
        })
        gsap.from(btnCv.current, 3, {
            opacity: 0,
            x: -20
        })
    })

    return (
        <div className='presentation-container'>
            <div className="presentation-content">
                <h4 className='greeting' ref={greeting}>Hola, mi nombre es</h4>
                <h1 className='big-font-name' ref={name}>Facundo Sánchez.</h1>
                <h2 className='gradient-text big-font-presentation' ref={gradient}>Frontend Developer.</h2>
                <h3 className='presentation-text' ref={presentation}>
                    <p>
                        Soy un Frontend Developer de Argentina apasionado a desarrollar interfaces de usuario.
                    </p>

                    <p>
                        Actualmente me encuentro en búsqueda de mi primer trabajo en IT y me encuentro en constante aprendizaje
                        para poder alcanzar ese objetivo.
                    </p>
                </h3>
                <a ref={btnCv} href="https://drive.google.com/file/d/1E8Ru30CwXO_QkSNqR72INPdqBN2OyJA_/view" target='_blank' rel='noreferrer'>
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
