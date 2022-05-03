import React from 'react'
// import { useRef } from 'react'
import Circle from './Circle'
import '../css/Navbar.css'
import ScrollIntoView from 'react-scroll-into-view'
import menu from '../img/menu.png'
function Navbar() {
    return (
        <div className='navbar-container'>
            <nav className='nav'>
                <input type="checkbox" id="check"/>
                <div className='circle'>
                    <Circle />
                </div>
                <label htmlFor="check" className="checkbtn">
                    <img className='menu-btn' src={menu} alt="" height='35px'/>
                </label>
                <ul>                    
                    <ScrollIntoView selector='.about-container' smooth={true}>
                        <label htmlFor="check">
                            <li><h3>Acerca de mi</h3></li>
                        </label>
                    </ScrollIntoView>

                    <ScrollIntoView selector='.technologies-container' smooth={true}>
                        <label htmlFor="check">
                            <li><h3>Tecnologías</h3></li>
                        </label>
                    </ScrollIntoView>

                    <ScrollIntoView selector='.projects-container' scrollOptions={{block:'nearest'}} smooth={true} >
                        <label htmlFor="check">
                            <li><h3>Proyectos</h3></li>
                        </label>
                    </ScrollIntoView>

                    <ScrollIntoView selector='.form-container' smooth={true}>
                        <label htmlFor="check">
                            <li><h3>Contáctame</h3></li>
                        </label>
                    </ScrollIntoView>                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
