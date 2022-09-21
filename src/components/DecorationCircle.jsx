import '../css/DecorationCircle.css'
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';


function DecorationCircle() {
    const firstCircle = useRef()
    const secondCircle = useRef()
    const thirdCircle = useRef()
    const fourthCircle = useRef()
    const fifthCircle = useRef()
    const sixthCircle = useRef()
    const seventhCircle = useRef()

    useEffect(() => {
        gsap.from(firstCircle.current, 4, {
            opacity: 0,
        })
        gsap.from(secondCircle.current, 5, {
            x: -30,
            opacity: 0
        })
        gsap.from(thirdCircle.current, 2, {
            opacity: 0
        })
        gsap.from(fourthCircle.current, 3, {
            opacity: 0
        })
        gsap.from(fifthCircle.current, 1, {
            opacity: 0
        })
        gsap.from(sixthCircle.current, 5, {
            opacity: 0
        })
        gsap.from(seventhCircle.current, 5, {
            opacity: 0
        })
    })

    return (
        <div className='circle-decoration-container'>
            <div className='first-circle-decoration circle' ref={firstCircle}></div>
            <div className='second-circle-decoration circle' ref={secondCircle}></div>
            <div className='third-circle-decoration circle' ref={thirdCircle}></div>
            <div className='fourth-circle-decoration circle' ref={fourthCircle}></div>
            <div className='sixth-circle-decoration circle' ref={fifthCircle}></div>
            <div className='seventh-circle-decoration circle' ref={sixthCircle}></div>
            <div className='eighth-circle-decoration circle' ref={seventhCircle}></div>
        </div>
    )
}

export default DecorationCircle
