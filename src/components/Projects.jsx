import React from 'react'
import home from '../img/home.png'
import detail from '../img/detail.png'
import create from '../img/create recipe.png'
import homebb from '../img/home bb.png'
import homebb2 from '../img/fondo bb2.png'
import homebb3 from '../img/home bb 3.png'
function Projects() {
    return (
        <div>
            <h1 >PROJECTS</h1>
            <h2>FOOD APP</h2>
            <img src={home} alt="imagen no encontrada" width='200px'/>
            <img src={detail} alt="imagen no encontrada" width='200px'/>
            <img src={create} alt="imagen no encontrada" width='200px'/>
            <h3> 
                Desarrollé una SPA (Single Page Application) utilizando React para el Front End y Redux como state management. 
                En los estilos se implementó CSS puro sin uso de librerías externas.
                La SPA consume datos de una API a través de un Back End desarrollado en Node utilizando Express, agregando nuevas 
                funcionalidades a la API original. En el proyecto se pueden encontrar filtros
                (comida, tipos de dieta, puntuacion de nivel de saludabe, nombre por orden alfabético) y un formulario para la creación 
                de nuevas recetas que se almacenan en una base de datos realizada con Sequelize y PostgreSQL.
            </h3>
            <h2>Breaking Bad App</h2>
            <img src={homebb} alt="imagen no encontrada"width='200px'/>
            <img src={homebb2} alt="imagen no encontrada"width='200px'/>
            <img src={homebb3} alt="imagen no encontrada"width='200px'/>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus adipisci non illum a illo in at
                perspiciatis porro? Voluptate illum quis consequatur? Voluptates sit totam aspernatur accusamus nisi aliquam
                aut Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati quae perferendis vitae rerum optio similique sit nesciunt
                Quam qui repudiandae aspernatur inventore numquam, ullam incidunt omnis sit porro eius.
            </h3>
        </div>
    )
}

export default Projects
