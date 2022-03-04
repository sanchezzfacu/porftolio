import React from 'react'
import { useRef } from 'react'

function Navbar() {
    const refAbout = useRef(null)// eslint-disable-next-line
    const executeScroll = () => refAbout.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

    const refProjects = useRef(null)// eslint-disable-next-line
    const executeScrollProject = () => refProjects.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

    const refContact = useRef(null)// eslint-disable-next-line
    const executeScrollContact = () => refContact.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    return (
        <div>
            <nav>
                <div className='logo-container'>
                    <div className='logo-hijo'></div>
                </div>
                <ul>
                    <li><h3 onClick={executeScroll}>About</h3></li>
                    <li><h3 onClick={executeScrollProject}>Projects</h3></li>
                    <li><h3 onClick={executeScrollContact}>Contact</h3></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
