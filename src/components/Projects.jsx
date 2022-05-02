import React from 'react'
import homeFood from '../img/food-home.png'
import homebb from '../img/bb-home.png'
import homemysaccesorios from '../img/home-mysaccesorios.png'
import homeproyectofinal from '../img/home-proyectofinal.png'
import homeWeather from '../img/weather-home.png'
import homeCalculadora from '../img/calculadora-home.png'
import '../css/Projects.css'
import CircleLogo from './CircleLogo'
function Projects() {
    return (
        <div className='projects-container'>
            <h2 className='projects-title'><CircleLogo/>Proyectos</h2>
            <div className="individual-container">
                <div className='app-title'>
                    <h1>App de recetas</h1>
                </div>
                <div className="text-img-container">
                    <div className="app-text"> 
                        <h3 className='text-right'> 
                            Desarrollé una SPA utilizando <b>React</b> para el Front End y <b>Redux</b> como state management. 
                            En los estilos se implementó <b>CSS</b> puro sin uso de librerías externas.
                            La SPA consume datos de una API a través de un Back End desarrollado en <b>Node</b> utilizando <b>Express</b> que consume 
                            la <b>API</b> Spoonacular, agregando nuevas funcionalidades a la API original. En el proyecto se puede filtrar 
                            la información por(comida, tipos de dieta, nivel de salubridad, nombre por orden alfabético) y un formulario 
                            para la creación de nuevas recetas que se almacenan en una base de datos realizada con <b>Sequelize</b> y <b>PostgreSQL</b>.
                        </h3>
                        <a className='respositorio-link'  href='https://github.com/sanchezzfacu/Proyecto-individual-Foods' target='_blank' rel="noreferrer"><button className='btn-repositorio-left'>Ver repositorio</button></a>
                    </div>
                    <div className="app-img">
                        <img src={homeFood} alt="imagen no encontrada"/>
                    </div>
                </div>
            </div>
            
            <div className="individual-container">
                <div className='app-title'>
                    <h1>Ecommerce de accesorios de mujeres</h1>
                </div>
                <div className='align-right'>
                    <div className="app-img">
                        <img className='img-project' src={homemysaccesorios} alt="imagen no encontrada"/>
                    </div>
                    <div className="text-img-container">
                        <div className="app-text">                
                            <h3 className='text-left'>
                                Realicé un ecommerce para un emprendimiento usando las tecnologías aprendidas durante la carrera,
                                para la UI se usó <b>React</b>, <b>Redux</b> para el manejo de estado y los estilos fueron diseñados con <b>CSS</b> puro, para el backend se desarrolló un servidor en <b>ExpressJS</b>, con una
                                base de datos creada con <b>PostgreSQL</b> y <b>Sequelize</b>. El sitio web permite ver el stock disponible y mandar un mensaje personalizado al vendedor.
                                A su vez tambien cuenta con un panel de administrador donde se pueden crear/eliminar categorias, publicar nuevos productos a 
                                traves de un formulario controlado y manejo de stock donde se pueden eliminar productos o las cantidades vendidas.

                            </h3>
                            <a className='respositorio-link'  href='https://github.com/sanchezzfacu/mys-accesorios' target='_blank' rel="noreferrer"><button className='btn-repositorio'>Ver repositorio</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="individual-container">
                <div className='app-title'>
                    <h1>Proyecto final carrera | Ecommerce de mates</h1>
                </div>      
                <div className="text-img-container">
                    <div className="app-text">                
                        <h3 className='text-right'>
                            Para el proyecto final de la carrera realizamos un ecomerce completeamente funcional con mi equipo,
                            en el proyecto afianzamos los conceptos aprendidos en la carrera. Usamos <b>React</b> para la interfaz de usuario, <b>Redux</b> 
                            para el manejo de estado, <b>GIT</b> para versionado de codigo, estilos con <b>CSS modules</b>. Para el backend se desarrolló un
                            servidor en <b>ExpressJS</b> y una base de datos en <b>PostgreSQL</b> realizada con <b>Sequelize</b>. Posee una pasarela de pago con 
                            mercado pago, manejo de usuarios, creacion de cuenta con google, panel de administrador, carrito de compras, reviews a productos, entre otras funcionalidades.
                        </h3>
                        <a className='respositorio-link' href='https://github.com/guidoabelleira/E-Commerce-PF10' target='_blank' rel="noreferrer"><button className='btn-repositorio-left'>Ver repositorio</button></a>
                    </div>
                    <div className="app-img">
                        <img src={homeproyectofinal} alt="imagen no encontrada"/>
                    </div>
                </div>
            </div>
            
            <div className="individual-container">
                <div className="app-title">
                    <h1>Breaking bad app</h1>
                </div>
                <div className="align-right">
                    <div className="app-img">
                        <img src={homebb} alt="imagen no encontrada"/>
                    </div>
                    <div className="text-img-container">
                        <div className="app-text">                
                            <h3 className='text-left'>
                                SPA que permite ver un listado de los personajes de la serie Breaking Bad, interfaz desarrollada con <b>React</b>,
                                el manejo de estado se realiza con <b>Redux</b>, estilos realizados con <b>CSS</b> sin ninguna libreria externa. Para el backend
                                se empleó un server desarrolado en <b>ExpressJs</b> que consume la <b>API</b> de Breaking Bad, la base de datos a su vez se realizó con <b>PostgreSQL</b> y <b>Sequelize</b>.
                                La SPA nos permite crear personajes con su respectivo papel. Se puede usar la barra de búsqueda para buscar personajes,
                                también se pueden filtrar los personajes. 
                            </h3>
                            <a className='respositorio-link'  href='https://github.com/sanchezzfacu/Breaking-Bad-App' target='_blank' rel="noreferrer"><button className='btn-repositorio'>Ver repositorio</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="individual-container">
                <div className='app-title'>
                    <h1>Weather app VanillaJs</h1>
                </div>      
                <div className="text-img-container">
                    <div className="app-text">                
                        <h3 className='text-right'>
                            Desarrollé un sitio web donde se puede consultar el clima en distintas ciudades, te permite
                            ver la temperatura, la velocidad del viento y como está el cielo. Toda la lógica se implementó
                            en <b>javascript puro</b>, <b>HTML</b> para el esqueleto y <b>SASS</b> para los estilos. Toda la informacion
                            es traida a traves de llamados a la <b>API</b> de openweather.
                        </h3>
                        <a className='respositorio-link' href='https://github.com/sanchezzfacu/weather-VanillaJscd' target='_blank' rel="noreferrer"><button className='btn-repositorio-left'>Ver repositorio</button></a>
                    </div>
                    <div className="app-img">
                        <img src={homeWeather} alt="imagen no encontrada"/>
                    </div>
                </div>
            </div>

            <div className="individual-container">
                <div className="app-title">
                    <h1>Calculadora VanillaJs</h1>
                </div>
                <div className="align-right">
                    <div className="app-img">
                        <img src={homeCalculadora} alt="imagen no encontrada"/>
                    </div>
                    <div className="text-img-container">
                        <div className="app-text">                
                            <h3 className='text-left'>
                                Creé una calculadora desde 0 usando toda la lógica en <b>javascript puro</b>, <b>CSS puro</b>,
                                para los estilos y <b>HTML</b> para la estructura. Se puede realizar cualquier tipo de operación 
                                basica y te permite ver que operacion realizaste en la parte superior. 
                            </h3>
                            <a className='respositorio-link'  href='https://github.com/sanchezzfacu/Breaking-Bad-App' target='_blank' rel="noreferrer"><button className='btn-repositorio'>Ver repositorio</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
