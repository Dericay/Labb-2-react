import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import './NavStyle.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/CV" element={<CV/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
