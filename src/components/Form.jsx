import React from 'react'
import CircleLogo from './CircleLogo'
import '../css/Form.css'
function Form() {
    return (
        <div className='form-container'>
             <h1><CircleLogo/>Hablemos</h1>
             
                <form action="https://formsubmit.co/sanchezfacundocristian@hotmail.com" method="POST" >
                    <div className="btn-redes-form">
                        <a href='https://www.linkedin.com/in/sanchezzfacu/' target='_blank' rel="noreferrer"><button>Linkedin</button></a>
                        <a href='https://github.com/sanchezzfacu' target='_blank' rel="noreferrer"><button>Github</button></a>
                    </div>
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
                    <input
                        placeholder="Asunto"
                        name="asunto"
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
