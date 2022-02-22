import '../css/Home.css'
import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import Landing from './Landing'
import Form from './Form'

function Home() {
    return (        
        <div className="main">
            <Navbar/>
            <Landing/>
            <About/>
            <Projects/>
            <Form/>
        </div>
    )
}

export default Home
