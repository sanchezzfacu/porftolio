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
                        <a className='respositorio-link'  href='https://github.com/sanchezzfacu/Proyecto-individual-Foods' target='_blank' rel="noreferrer"><button className='btn-repositorio-left'>Ver código</button></a>
                    </div>
                    <div className="app-img">
                        <img src={homeFood} alt="imagen no encontrada"/>
                    </div>
                </div>
            </div>
            
            <div className="individual-container">
                <div className='app-title'>
                    <h2>Ecommerce de accesorios de mujeres</h2>
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
                            <a className='respositorio-link'  href='https://github.com/sanchezzfacu/mys-accesorios' target='_blank' rel="noreferrer"><button className='btn-repositorio'>Ver código</button></a>
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
                            Para el proyecto final de la carrera realizamos un ecomerce completeamente funcional con mi equipo,
                            en el proyecto afianzamos los conceptos aprendidos en la carrera. Usamos <b>React</b> para la interfaz de usuario, <b>Redux</b>
                            para el manejo de estado, <b>GIT</b> para versionado de codigo, estilos con <b>CSS modules</b>. Para el backend se desarrolló un
                            servidor en <b>ExpressJS</b> y una base de datos en <b>PostgreSQL</b> realizada con <b>Sequelize</b>. Posee una pasarela de pago con 
                            mercado pago, manejo de usuarios, creacion de cuenta con google, carrito de compras, reviews a productos, entre otros.
                        </h3>
                        <a className='respositorio-link' href='https://github.com/guidoabelleira/E-Commerce-PF10' target='_blank' rel="noreferrer"><button className='btn-repositorio-left'>Ver código</button></a>
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
                            <a className='respositorio-link'  href='https://github.com/sanchezzfacu/Breaking-Bad-App' target='_blank' rel="noreferrer"><button className='btn-repositorio'>Ver código</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
