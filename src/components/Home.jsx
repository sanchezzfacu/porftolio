import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import Presentation from './Presentation'
import Form from './Form'
import Technologies from './Technologies'
import '../css/Home.css'

function Home() {
    return (        
        <div className="main">
            <Navbar/>    
            <Presentation/>
            <About/>
            <Technologies/>
            <Projects/>
            <Form/>
        </div>
    )
}

export default Home
