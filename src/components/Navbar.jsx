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
                        <li><h3>About</h3></li>
                    </ScrollIntoView>

                    <ScrollIntoView selector='.technologies-container' smooth={true}>
                        <li><h3>Technologies</h3></li>
                    </ScrollIntoView>

                    <ScrollIntoView selector='.projects-container' smooth={true} >
                        <li><h3>Projects</h3></li>
                    </ScrollIntoView>

                    <ScrollIntoView selector='.form-container' smooth={true}>
                        <li><h3>Contact</h3></li>
                    </ScrollIntoView>                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
