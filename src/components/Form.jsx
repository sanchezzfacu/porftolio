import linkedin from '../imagenes/in.png'
import github from '../imagenes/github.png'
function Form() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="contact__section">
            <div className="section__title">
                <h1>CONTACT</h1>
            </div>    
            <form onSubmit={handleSubmit}>
                <div className="redes">
                    <div className="linkedin">
                    <a href="https://www.linkedin.com/in/sanchezzfacu/" target="_BLANK" rel="noopener noreferrer"><img className="img__" src={linkedin} alt="" height="50px"></img></a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/sanchezzfacu" target="_BLANK" rel="noopener noreferrer"><img className="img__" src={github} alt="" height="50px"/></a>
                    </div>
                </div>
                <input 
                    placeholder="Nombre"
                    required
                />
                <input 
                    placeholder="Email"
                    type="email"
                    required
                />
                <input
                    placeholder="Asunto"
                />
                <textarea
                    placeholder="Escribe tu mensaje"
                    required
                />
                <div className="btn">
                <button 
                    type="submit"
                >Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form
