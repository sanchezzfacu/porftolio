import '../styles/Home.css'
import home from '../imagenes/home.png'
import detail from '../imagenes/detail.png'
import create from '../imagenes/create recipe.png'
import cv from '../imagenes/imagenAbout.jpg'

import Form from './Form'
import { useRef } from 'react'

function Home() {
    const refAbout = useRef(null)
    const executeScroll = () => refAbout.current.scrollIntoView()

    const refProjects = useRef(null)
    const executeScrollProject = () => refProjects.current.scrollIntoView()

    const refContact = useRef(null)
    const executeScrollContact = () => refContact.current.scrollIntoView()

    return (        
        <div className="background">
            <div className="nav_">
            <nav>
                <h1>FACUNDO SANCHEZ</h1>
                <ul>
                    <li><h3 onClick={executeScroll}>About</h3></li>
                    <li><h3 onClick={executeScrollProject}>Projects</h3></li>
                    <li><h3 onClick={executeScrollContact}>Contact</h3></li>
                </ul>
            </nav>
            </div>
            <div className="background__description">
                <div className="description">
                    <h1><h1>Hola, soy Facundo Sanchez</h1></h1>
                    <div className="text__description">
                        <h2>Soy un desarrollador Full Stack orientado al Front-End que espera con ansias arrancar su carrera en el mundo IT</h2>
                    </div>
                </div>
            </div>
            <div className="about__section" ref={refAbout}>
                <div className="section__title">
                    <h1>ABOUT</h1>
                </div>
                <div className="align__about">
                    <img className="img__about" src={cv} alt="" height="400px" width="370"/>
                    <div className="text__about">
                        <h2>Me considero una persona adicta al conocimiento que Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi nemo voluptatem consequuntur unde fugiat ea alias rerum similique ullam sint vel, a, at ex blanditiis corrupti accusamus nobis laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero cumque iure magnam, autem maxime! Harum molestias dicta tempore adipisci, cupiditate iure fugit eum ducimus, quasi quisquam alias. Animi, nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio labore nobis ipsum libero! Itaque, nisi aliquid. Modi, repellendus cumque aut delectus itaque odio sunt corrupti sint neque maiores nesciunt!</h2>
                    </div>
                </div>
            </div>
            <div className="projects__section" ref={refProjects}>
                <div className="section__title">
                    <h1>PROJECTS</h1>
                </div>    
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
                <Form ref={executeScrollContact}/>
                <footer>
                    <div className="footer">
                        <h3>Creado por Facundo Sanchez</h3>
                    </div>
                </footer>
        </div>
    )
}

export default Home
