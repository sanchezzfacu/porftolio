import '../styles/Home.css'
import home from '../imagenes/home.png'
import detail from '../imagenes/detail.png'
import create from '../imagenes/create recipe.png'
import linkedin from '../imagenes/in.png'
import github from '../imagenes/github.png'
import cv from '../imagenes/imagenAbout.jpg'
import homebb from '../imagenes/home bb.png'
import homebb2 from '../imagenes/fondo bb2.png'
import homebb3 from '../imagenes/home bb 3.png'
import cvDownload from '../Facundo Sanchez-frontend developer.pdf'

import { useRef } from 'react'

function Home() {
    const refAbout = useRef(null)
    const executeScroll = () => refAbout.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

    const refProjects = useRef(null)
    const executeScrollProject = () => refProjects.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

    const refContact = useRef(null)
    const executeScrollContact = () => refContact.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

    return (        
        <div className="main">
            <nav>
                <h1>FACUNDO SANCHEZ</h1>
                <ul>
                    <li><h3 onClick={executeScroll}>About</h3></li>
                    <li><h3 onClick={executeScrollProject}>Projects</h3></li>
                    <li><h3 onClick={executeScrollContact}>Contact</h3></li>
                </ul>
            </nav>
            <div className="background">
                <div className="background__description">
                    <div className="description">
                        <div className='description-title'>
                            <h1><h1>Hola, soy Facundo Sánchez</h1></h1>
                        </div>
                        <div className="text__description">
                            <h2>Soy un Front-End developer que busca iniciarse en el mundo IT</h2>
                        </div>
                        <a href='/' target='_blank' download={cvDownload}><button className='btn-cv'> Descargar CV</button></a>
                    </div>
                </div>
            </div>
            <div className="about__container" ref={refAbout}>
                <h1 className="about__title">QUIEN SOY?</h1>
                <div className="img__description">
                        <img className="img__about" src={cv} alt="" height="400px" width="370"/>
                    <div className="about__text">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit perspiciatis animi nemo voluptatem consequuntur
                            unde fugiat ea alias rerum similique ullam sint vel, a, at ex blanditiis corrupti accusamus nobis 
                            laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero cumque iure magnam, autem
                            maxime! Harum molestias dicta tempore adipisci, cupiditate iure fugit eum ducimus, quasi quisquam alias.
                            Animi, nihil?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure optio labore nobis ipsum libero! 
                            Itaque, nisi aliquid. Modi, repellendus cumque aut delectus itaque odio sunt corrupti sint neque maiores 
                            nesciunt.</h2>
                    </div>                    
                </div>
            </div>         
                <div className="projects__section">
                    <h1 ref={refProjects}>PROJECTS</h1>
                </div>
                <div className="title__app">
                    <h2>FOOD APP</h2>
                </div>
                <div className="img__food">
                    <img className="img_projects" src={home} alt="" width="400px" height="250"/>
                    <img className="img_projects" src={detail} alt="" width="400px" height="250"/>
                    <img className="img_projects" src={create} alt="" width="400px" height="250"/>
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

                <div className="title__app">
                    <h2>Breaking Bad App</h2>
                </div>    
                <div className="img__food">
                    <img className="img_projects" src={homebb} alt="" width="400px" height="250"/>
                    <img className="img_projects" src={homebb2} alt="" width="400px" height="250"/>
                    <img className="img_projects" src={homebb3} alt="" width="400px" height="250"/>
                </div> 
                <div className="description__color">
                    <div className="app__description">
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus adipisci non illum a illo in at
                            perspiciatis porro? Voluptate illum quis consequatur? Voluptates sit totam aspernatur accusamus nisi aliquam
                            aut Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati quae perferendis vitae rerum optio similique sit nesciunt
                            Quam qui repudiandae aspernatur inventore numquam, ullam incidunt omnis sit porro eius.
                        </h3>
                    </div>
                </div>  
            <div className="contact__section" ref={refContact}>
                <div className="section__title" >
                    <h1>CONTACT</h1>
                </div>    
                <form action="https://formsubmit.co/sanchezfacundocristian@hotmail.com" method="POST" >
                    <div className="redes">
                        <div className="linkedin">
                        <a href="https://www.linkedin.com/in/sanchezzfacu/" target="_BLANK" rel="noopener noreferrer"><img className="img__" src={linkedin} alt="" height="50px"></img></a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/sanchezzfacu" target="_BLANK" rel="noopener noreferrer"><img className="img__" src={github} alt="" height="50px"/></a>
                        </div>
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
                    <div className="btn">
                    <button 
                        type="submit">
                        Enviar</button>
                    </div>
                </form>
            </div>
            <footer>
                <div className="footer">
                    <h3>Creado por Facundo Sanchez</h3>
                </div>
            </footer>
        </div>
    )
}

export default Home
