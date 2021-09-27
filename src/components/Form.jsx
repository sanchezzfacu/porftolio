
function Form() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="contact__section">
            <h1>CONTACT</h1>
            <form onSubmit={handleSubmit}>
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
                <button 
                    type="submit"
                >Enviar</button>
            </form>
        </div>
    )
}

export default Form
