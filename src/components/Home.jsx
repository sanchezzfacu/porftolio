import '../styles/Home.css'
import home from '../imagenes/home.png'
import detail from '../imagenes/detail.png'
import create from '../imagenes/create recipe.png'
import Form from './Form'

function Home() {
    return (        
        <div className="background">
            <nav>
                <h2>Facundo Sanchez</h2>
                    <a href="/about"><h3>About</h3></a>
                    <a href="/projects"><h3>Projects</h3></a>
                    <a href="/contact"><h3>Contact</h3></a>
            </nav>
            <div className="background__description">
                <div className="description">
                    <h1>FACUNDO SANCHEZ</h1>
                    <div className="text__description">
                        <h2>Soy un desarrollador Full Stack orientado al Front-End de Argentina </h2>
                    </div>
                        <a href="/contact"><button>Contactame</button></a>  
                </div>
            </div>
            <div className="about__section">
                <h1>ABOUT</h1>
            </div>
            <div className="projects__section">
                <h1>PROJECTS</h1>
            </div>
                <div className="title__app">
                    <h2>FOOD APP</h2>
                </div>
                <div className="description__color">
                    <div className="app__description">
                        <h3> 
                            Desarrollé una SPA (Single Page Application) utilizando React para el Front End y Redux como state management. 
                            En los estilos se implementó CSS puro sin uso de librerías externas.
                            La SPA consume datos de una API a través de un Back End desarrollado en Node utilizando Express, agregando nuevas 
                            funcionalidades a la API original. En el proyecto se pueden encontrar filtros
                            (comida, tipos de dieta, puntuacion de nivel de saludabe, nombre por orden alfabético) y un formulario para la creación 
                            de nuevas recetas que se almacenan en una base de datos realizada con Sequelize y PostgreSQL.
                        </h3>
                    </div>
                </div>
                <div className="img__food">
                    <img src={home} alt="" width="400px" height="250"/>
                    <img src={detail} alt="" width="400px" height="250"/>
                    <img src={create} alt="" width="400px" height="250"/>
                </div>
                <Form/>
        </div>
    )
}

export default Home
