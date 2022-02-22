import './App.css';
import { Route, Redirect, Switch } from "react-router-dom";
// components
import MainPage from './components/MainPage';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Notfound from "./components/Notfound"

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route path="/notfound" component={Notfound} />
                <Route exact path="/" component={MainPage} />
                <Redirect to="/notfound" />
            </Switch>

        </div>
    );
}

export default App;
