import React from 'react'
import js from '../img/js.png'
import typescript from "../img/typescript.png"
import react from '../img/react.png'
import reactQuery from "../img/react-query.png"
import redux from '../img/redux.png'
import sass from '../img/sass.png'
import tailwind from "../img/tailwind.png"
import git from '../img/git.png'
import github from '../img/github.png'
import postgresql from '../img/postgresql.png'
import node from '../img/node.png'
import html from '../img/html.png'
import sequelize from '../img/sequelize.png'
import css from '../img/css.png'
import CircleLogo from './CircleLogo'

import '../css/Technologies.css'

function Technologies() {
    return (
        <div className='technologies-container'>
            <h2 className='technologies-title'><CircleLogo/>Tecnologías</h2>
            
            <div className='items-tech-container'>
                <div className='tech-item'>
                    <img src={js} alt=""/>
                    <h3>Javascript</h3>
                </div>
                <div className='tech-item'>
                    <img src={typescript} alt=""/>
                    <h3>Typescript</h3>
                </div>
                <div className='tech-item'>
                    <img src={react} alt=""/>     
                    <h3>React</h3>       
                </div>
                <div className='tech-item'>
                    <img src={reactQuery} alt=""/>     
                    <h3>React Query</h3>       
                </div>
                <div className='tech-item'>
                    <img src={redux} alt=""/>
                    <h3>Redux</h3>
                </div>
                <div className='tech-item'>
                    <img src={html} alt="" />
                    <h3>HTML</h3>
                </div>
                <div className='tech-item'>
                    <img src={css} alt="" />
                    <h3>CSS</h3>
                </div>
                <div className='tech-item'>
                    <img src={sass} alt="" />
                    <h3>SASS</h3>
                </div>
                <div className='tech-item'>
                    <img src={tailwind} alt="" />
                    <h3>Tailwind</h3>
                </div>
                <div className='tech-item'>
                    <img src={git} alt="" />
                    <h3>Git</h3>
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
                    <img src={sequelize} alt="" />
                    <h3>Sequelize</h3>
                </div>
            </div>
        </div>
    )
}

export default Technologies
