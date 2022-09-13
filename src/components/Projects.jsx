import React from 'react'
import homeFood from '../img/food-home.png'
import homebb from '../img/bb-home.png'
import homemysaccesorios from '../img/home-mysaccesorios.png'
import homeproyectofinal from '../img/home-proyectofinal.png'
import homeGamila from '../img/home-gamila.png'
import homeWeather from '../img/weather-home.png'
import homeCalculadora from '../img/calculadora-home.png'
import homeMovies from '../img/movies-home.png'
import CircleLogo from './CircleLogo'
import github from '../img/github-logo.png'
import '../css/Projects.css'
function Projects() {
    return (
        <div className='projects-container'>
        <h2 className='projects-title'><CircleLogo/>Proyectos</h2>
            <div className="project-normal-pos project">
                <div className="project-image">
                    <img src={homemysaccesorios} alt="" />
                </div>
                <div className='project-information'>
                    <h3 className='developed-text'>Proyecto desarrollado</h3>
                    
                    <h1>Ecommerce de accesorios</h1>

                    <h3 className='project-description'>Desarrollo de un ecommerce para un emprendimiento. Cuenta con todas las
                    funcionalidades de una tienda online típica.</h3>
                    
                    <div className="tecnologies">
                        <h5>React</h5>
                        <h5>Redux</h5>
                        <h5>CSS</h5>
                        <h5>Node</h5>
                        <h5>Sequelize</h5>
                        <h5>PostgreSQL</h5>
                    </div>
                    <div className="repository-btn">
                        <a href="https://github.com/sanchezzfacu/mys-accesorios" target='_blank' rel='noreferrer'>
                            <img src={github} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-reversed-pos project">
                <div className="project-image">
                    <img src={homeproyectofinal} alt="" />
                </div>
                <div className='project-information'>
                    <h3 className='developed-text'>Proyecto desarrollado</h3>
                    
                    <h1>Proyecto Final Carrera | Ecommerce</h1>

                    <h3 className='project-description'>Desarrollo de un ecommerce con un grupo de 6 personas usando metodología ágil (scrum).</h3>
                    
                    <div className="tecnologies">
                        <h5>React</h5>
                        <h5>Redux</h5>
                        <h5>CSS</h5>
                        <h5>Node</h5>
                        <h5>Sequelize</h5>
                        <h5>PostgreSQL</h5>
                        <h5>Git</h5>
                        <h5>SCRUM</h5>
                    </div>
                    <div className="repository-btn">
                        <a href="https://github.com/guidoabelleira/E-Commerce-PF10" target='_blank' rel='noreferrer'>
                            <img src={github} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-normal-pos project">
                <div className="project-image">
                    <img src={homeGamila} alt="" />
                </div>
                <div className='project-information'>
                    <h3 className='developed-text'>Proyecto desarrollado</h3>
                    
                    <h1>Landing Page | Empresa de Traslados</h1>

                    <h3 className='project-description'>Desarrollo freelance de una landing page para empresa dedicada al traslado
                     de pasajeros.</h3>
                    
                    <div className="tecnologies">
                        <h5>JavaScript</h5>
                        <h5>SASS</h5>
                        <h5>HTML</h5>
                    </div>
                    <div className="repository-btn">
                        <a href="https://github.com/sanchezzfacu/gamila-traslados" target='_blank' rel='noreferrer'>
                            <img src={github} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-reversed-pos project">
                <div className="project-image">
                    <img src={homebb} alt="" />
                </div>
                <div className='project-information'>
                    <h3 className='developed-text'>Proyecto desarrollado</h3>
                    
                    <h1>Breaking Bad App</h1>

                    <h3 className='project-description'>SPA de los personajes de Breaking Bad. Se hace uso de una
                    API donde se le agregan funcionalidades como filtrado y búsqueda.</h3>
                    
                    <div className="tecnologies">
                        <h5>React</h5>
                        <h5>Redux</h5>
                        <h5>CSS</h5>
                        <h5>Node</h5>
                        <h5>Sequelize</h5>
                        <h5>PostgreSQL</h5>
                    </div>
                    <div className="repository-btn">
                        <a href="https://github.com/sanchezzfacu/Breaking-Bad-App" target='_blank' rel='noreferrer'>
                            <img src={github} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-normal-pos project">
                <div className="project-image">
                    <img src={homeFood} alt="" />
                </div>
                <div className='project-information'>
                    <h3 className='developed-text'>Proyecto desarrollado</h3>
                    
                    <h1>Sitio Web de Recetas</h1>

                    <h3 className='project-description'>Desarrollo de una SPA que consume la API de spoonacular, a la cual se le
                    agregaron funcionalidades extras.</h3>
                    
                    <div className="tecnologies">
                        <h5>React</h5>
                        <h5>Redux</h5>
                        <h5>CSS</h5>
                        <h5>Node</h5>
                        <h5>Sequelize</h5>
                        <h5>PostgreSQL</h5>
                        <h5>API</h5>
                    </div>
                    <div className="repository-btn">
                        <a href="https://github.com/sanchezzfacu/Proyecto-individual-Foods" target='_blank' rel='noreferrer'>
                            <img src={github} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-reversed-pos project">
                <div className="project-image">
                    <img src={homeWeather} alt="" />
                </div>
                <div className='project-information'>
                    <h3 className='developed-text'>Proyecto desarrollado</h3>
                    
                    <h1>Aplicación del clima</h1>

                    <h3 className='project-description'>Aplicacion que consume una api del clima, donde se puede consultar
                    el clima de cualquier ciudad.</h3>
                    
                    <div className="tecnologies">
                        <h5>JavaScript</h5>
                        <h5>SASS</h5>
                        <h5>HTML</h5>
                        <h5>API</h5>
                    </div>
                    <div className="repository-btn">
                        <a href="https://github.com/sanchezzfacu/weather-VanillaJs" target='_blank' rel='noreferrer'>
                            <img src={github} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-normal-pos project">
                <div className="project-image">
                    <img src={homeCalculadora} alt="" />
                </div>
                <div className='project-information'>
                    <h3 className='developed-text'>Proyecto desarrollado</h3>
                    
                    <h1>Calculadora | Vanilla JavaScript</h1>

                    <h3 className='project-description'>Desarrollo de una calculadora usando JavaScript puro la cual permite 
                    relizar cualquier operación básica.</h3>
                    
                    <div className="tecnologies">
                        <h5>JavaScript</h5>
                        <h5>HTML</h5>
                        <h5>CSS</h5>
                    </div>
                    <div className="repository-btn">
                        <a href="https://github.com/sanchezzfacu/calculadora-vanillaJS" target='_blank' rel='noreferrer'>
                            <img src={github} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-reversed-pos project">
                <div className="project-image">
                    <img src={homeMovies} alt="" />
                </div>
                <div className='project-information'>
                    <h3 className='developed-text'>Proyecto desarrollado</h3>
                    
                    <h1>Buscador de Películas</h1>

                    <h3 className='project-description'>Aplicacion que consume la API de OMDB, a la cual se le agregaron 
                    funcionalidades extras completamente desde cero.</h3>
                    
                    <div className="tecnologies">
                        <h5>React</h5>
                        <h5>Redux</h5>
                        <h5>SASS</h5>
                        <h5>API</h5>
                    </div>
                    <div className="repository-btn">
                        <a href="https://github.com/sanchezzfacu/movies-app" target='_blank' rel='noreferrer'>
                            <img src={github} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
