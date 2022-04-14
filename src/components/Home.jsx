import About from './About'
import Projects from './Projects'
import Presentation from './Presentation'
import Form from './Form'
import '../css/Home.css'

function Home() {
    return (        
        <div className="main">
            <Presentation/>
            <About/>
            <Projects/>
            <Form/>
        </div>
    )
}

export default Home
