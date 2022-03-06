import React from 'react'
import homeFood from '../img/home.png'
import homebb from '../img/home bb.png'
import '../css/Projects.css'
import CircleLogo from './CircleLogo'
function Projects() {
    return (
        <div className='projects-container'>
            <div className='projects-title'>
            <h1><CircleLogo/>Proyectos</h1>
            </div>
            <div className="food-container">
                <div className='app-title'>
                <h2>Recipe app</h2>
                </div>
                <div className="text-img-container">
                    <div className="app-text"> 
                        <h3> 
                            Desarrollé una SPA (Single Page Application) utilizando React para el Front End y Redux como state management. 
                            En los estilos se implementó CSS puro sin uso de librerías externas.
                            La SPA consume datos de una API a través de un Back End desarrollado en Node utilizando Express, agregando nuevas 
                            funcionalidades a la API original. En el proyecto se pueden encontrar filtros
                            (comida, tipos de dieta, puntuacion de nivel de saludabe, nombre por orden alfabético) y un formulario para la creación 
                            de nuevas recetas que se almacenan en una base de datos realizada con Sequelize y PostgreSQL.
                        </h3>
                    </div>
                    <div className="app-img">
                        <img src={homeFood} alt="imagen no encontrada" />
                    </div>
                </div>
            </div>

            <div className="bb-container">
                <div className="app-title">
                    <h2>Breaking Bad App</h2>
                </div>
                <div className="text-img-container">
                    <div className="app-text">                
                        <h3>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus adipisci non illum a illo in at
                            perspiciatis porro? Voluptate illum quis consequatur? Voluptates sit totam aspernatur accusamus nisi aliquam
                            aut Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati quae perferendis vitae rerum optio similique sit nesciunt
                            Quam qui repudiandae aspernatur inventore numquam, ullam incidunt omnis sit porro eius.
                        </h3>
                    </div>
                    <div className="app-img">
                        <img src={homebb} alt="imagen no encontrada"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
