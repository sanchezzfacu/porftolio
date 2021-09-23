import { Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
