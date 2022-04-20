import React from 'react'
import js from '../img/js.png'
import react from '../img/react.png'
import redux from '../img/redux.png'
import sass from '../img/sass.png'
import git from '../img/git.png'
import github from '../img/github.png'
import postgresql from '../img/postgresql.png'
import node from '../img/node.png'
import html from '../img/html.png'
import CircleLogo from './CircleLogo'

import '../css/Technologies.css'

function Technologies() {
    return (
        <div className='technologies-container'>
            <div className='technologies-title'>
                <h2><CircleLogo/>Tecnologías</h2>
            </div>
            <div className='items-tech-container'>
                <div className='tech-item'>
                    <img src={js} alt=""/>
                    <h3>Javascript</h3>
                </div>
                <div className='tech-item'>
                    <img src={react} alt="" height='50px'/>     
                    <h3>React</h3>       
                </div>
                <div className='tech-item'>
                    <img src={redux} alt="" height='50px'/>
                    <h3>Redux</h3>
                </div>
                <div className='tech-item'>
                    <img src={sass} alt="" />
                    <h3>SASS</h3>
                </div>
                <div className='tech-item'>
                    <img src={git} alt="" />
                    <h3>GIT</h3>
                </div>
                <div className='tech-item'>
                    <img src={github} alt="" />
                    <h3>Github</h3>
                </div>
                <div className='tech-item'>
                    <img src={postgresql} alt="" />
                    <h3>PostgreSQL</h3>
                </div>
                <div className='tech-item'>
                    <img src={node} alt="" />
                    <h3>Node</h3>
                </div>
                <div className='tech-item'>
                    <img src={html} alt="" />
                    <h3>HTML</h3>
                </div>
            </div>
        </div>
    )
}

export default Technologies
