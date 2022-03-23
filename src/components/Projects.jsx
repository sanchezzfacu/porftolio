import React from 'react'
import homeFood from '../img/food-home.png'
import homebb from '../img/bb-home.png'
import homemysaccesorios from '../img/home-mysaccesorios.png'
import homeproyectofinal from '../img/home-proyectofinal.png'
import '../css/Projects.css'
import CircleLogo from './CircleLogo'
function Projects() {
    return (
        <div className='projects-container'>
            <h2 className='projects-title'><CircleLogo/>Proyectos</h2>
            <div className="individual-container">
                <div className='app-title'>
                    <h2>App de recetas</h2>
                </div>
                <div className="text-img-container">
                    <div className="app-text"> 
                        <h3 className='text-right'> 
                            Desarrollé una SPA utilizando <b>React</b> para el Front End y <b>Redux</b> como state management. 
                            En los estilos se implementó <b>CSS</b> puro sin uso de librerías externas.
                            La SPA consume datos de una API a través de un Back End desarrollado en <b>Node</b> utilizando <b>Express</b>, agregando nuevas 
                            funcionalidades a la API original. En el proyecto se puede filtrar la información por
                            (comida, tipos de dieta, nivel de salubridad, nombre por orden alfabético) y un formulario para la creación 
                            de nuevas recetas que se almacenan en una base de datos realizada con <b>Sequelize</b> y <b>PostgreSQL</b>.
                        </h3>
                        <a href='https://github.com/sanchezzfacu/Proyecto-individual-Foods' target='_blank' rel="noreferrer"><button className='btn-repositorio-left'>Ver código</button></a>
                    </div>
                    <div className="app-img">
                        <img src={homeFood} alt="imagen no encontrada"/>
                    </div>
                </div>
            </div>
            
            <div className="individual-container">
                <div className='app-title'>
                    <h2>Ecommerce de accesorios de belleza</h2>
                </div>
                <div className='align-right'>
                    <div className="app-img">
                        <img className='img-project' src={homemysaccesorios} alt="imagen no encontrada"/>
                    </div>
                    <div className="text-img-container">
                        <div className="app-text">                
                            <h3 className='text-left'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus adipisci non illum a illo in at
                                perspiciatis porro? Voluptate illum quis consequatur? Voluptates sit totam aspernatur accusamus nisi aliquam
                                aut Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati quae perferendis vitae rerum optio similique sit nesciunt
                                Quam qui repudiandae aspernatur inventore numquam, ullam incidunt omnis sit porro eius.
                            </h3>
                            <a href='https://github.com/sanchezzfacu/mys-accesorios' target='_blank' rel="noreferrer"><button className='btn-repositorio'>Ver código</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="individual-container">
                <div className='app-title'>
                    <h2>Proyecto final carrera | Ecommerce de mates</h2>
                </div>
                <div className="text-img-container">
                    <div className="app-text">                
                        <h3 className='text-right'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus adipisci non illum a illo in at
                            perspiciatis porro? Voluptate illum quis consequatur? Voluptates sit totam aspernatur accusamus nisi aliquam
                            aut Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati quae perferendis vitae rerum optio similique sit nesciunt
                            Quam qui repudiandae aspernatur inventore numquam, ullam incidunt omnis sit porro eius.
                        </h3>
                        <a href='https://github.com/guidoabelleira/E-Commerce-PF10' target='_blank' rel="noreferrer"><button className='btn-repositorio-left'>Ver código</button></a>
                    </div>
                    <div className="app-img">
                        <img src={homeproyectofinal} alt="imagen no encontrada"/>
                    </div>
                </div>
            </div>
            
            <div className="individual-container">
                <div className="app-title">
                    <h2>Breaking Bad App</h2>
                </div>
                <div className="align-right">
                    <div className="app-img">
                        <img src={homebb} alt="imagen no encontrada"/>
                    </div>
                    <div className="text-img-container">
                        <div className="app-text">                
                            <h3 className='text-left'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus adipisci non illum a illo in at
                                perspiciatis porro? Voluptate illum quis consequatur? Voluptates sit totam aspernatur accusamus nisi aliquam
                                aut Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati quae perferendis vitae rerum optio similique sit nesciunt
                                Quam qui repudiandae aspernatur inventore numquam, ullam incidunt omnis sit porro eius.
                            </h3>
                            <a href='https://github.com/sanchezzfacu/Breaking-Bad-App' target='_blank' rel="noreferrer"><button className='btn-repositorio'>Ver código</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
