import { Route, Routes } from "react-router-dom";
// components
import MainPage from './components/MainPage';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Notfound from "./components/Notfound"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='*' element={<Notfound />} />
                
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/notfound" element={<Notfound />} />
                <Route path="/" element={<MainPage />} />
            </Routes>

        </div>
    );
}

export default App;
