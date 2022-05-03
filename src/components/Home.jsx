import Bounce from 'react-reveal/Bounce';
import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import Presentation from './Presentation'
import Form from './Form'
import Technologies from './Technologies'
import '../css/Home.css'

function Home() {

    return (        
        <div>
            <Navbar/>    
            <Presentation/>
            <Bounce left duration={500} >
                <About/>
                <Technologies/>
            </Bounce>
            <Projects/>
            <Bounce left duration={500}>
                <Form/>
            </Bounce>
        </div>
    )
}

export default Home
