import './App.css';
import Nav from './Nav';
import About from './About';
import Ship from './Ship';
import Rocket from './RocketDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='App'>
                <Nav />
                {/* <About></About> */}
                {/* <Ship></Ship> */}
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/ships' exact component={Ship} />
                    <Route path='/ships/:id' component={Rocket} />
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);

export default App;
