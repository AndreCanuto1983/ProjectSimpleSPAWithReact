import './App.css';
import { Header } from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';
import { MovieDetail } from './views/MovieDetail';

function App() { 

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>   
          <Route path="/about">
            <About />
          </Route>

          <Route path="/movie/:id">
            <MovieDetail />
          </Route>

          <Route path="/" exact="true">
            <Home />            
          </Route>         
        </Switch>       
        
      </Router>
    </div>
  );
}

export default App;
