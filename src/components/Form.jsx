import React from 'react'
function Form() {
    return (
        <div>
             <h1>CONTACT</h1>
                <form action="https://formsubmit.co/sanchezfacundocristian@hotmail.com" method="POST" >
                {/* <a href="https://www.linkedin.com/in/sanchezzfacu/" target="_BLANK" rel="noopener noreferrer"><img className="img__" src={linkedin} alt="" height="50px"></img></a>
                <a href="https://github.com/sanchezzfacu" target="_BLANK" rel="noopener noreferrer"><img className="img__" src={github} alt="" height="50px"/></a> */}
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
                        type="submit">
                        Enviar</button>
                </form>
        </div>
    )
}

export default Form
