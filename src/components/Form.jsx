import React from 'react'
import linkedin from '../img/linkedin-logo.png'
import github from '../img/github-logo.png'
import email from '../img/email-icon.png'
import CircleLogo from './CircleLogo'
import '../css/Form.css'
function Form() {
    return (
        <div className='form-container'>
             <h1><CircleLogo/>Hablemos</h1>
                    <div className="btn-redes-form">
                        <div className='btn-item'>
                            <button className='linkedin-button-form'>
                                <a href='https://www.linkedin.com/in/sanchezzfacu/' target='_blank' rel='noreferrer'>
                                    <img src={linkedin} alt='' height='50px'/>
                                </a>
                            </button>
                            <a href='https://www.linkedin.com/in/sanchezzfacu/' target='_blank' rel='noreferrer'>
                                <h3>LinkedIn</h3>
                            </a>
                        </div>

                        <div className='btn-item'>
                            <button className='github-button-form'>
                                <a href='https://github.com/sanchezzfacu' target='_blank' rel='noreferrer'>
                                    <img src={github} alt='' height='50px'/>
                                </a>
                            </button>
                            <a href='https://github.com/sanchezzfacu' target='_blank' rel='noreferrer'>
                                <h3>Github</h3>
                            </a>
                        </div>

                        <div className='btn-item'>
                            <button className='email-button-form'>
                                <a href='mailto:sanchezfacundocristian@hotmail.com' target='_blank' rel='noreferrer'>
                                    <img src={email} alt='' height='50px'/>
                                </a>
                            </button>
                            <a href='mailto:sanchezfacundocristian@hotmail.com' target='_blank' rel='noreferrer'>
                                <h3>Email</h3>
                            </a>
                        </div>
                    </div>
                <form action="https://formsubmit.co/sanchezfacundocristian@hotmail.com" method="POST" >
                        <input 
                            name="name"
                            placeholder="Nombre"
                            required
                            />
                        <input 
                            name="email"
                            placeholder="Email"
                            type="email"
                            required
                            />
                        <textarea
                            name="mensaje"
                            placeholder="Escribe tu mensaje"
                            required
                            />
                    <button 
                        className='button type1'
                        type="submit">
                        Enviar</button>
                </form>
        </div>
    )
}

export default Form
    