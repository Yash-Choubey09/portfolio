import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Research from './pages/Research';
import Leadership from './pages/Leadership';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';
import Resume from './pages/Resume';

function Placeholder({ name }) { return <div className="page"><h1>{name}</h1><p>Under Construction.</p></div> }

function App() {
    return (
        <>
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:slug" element={<Placeholder name="Project Detail" />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/publications" element={<Research />} />
                    <Route path="/leadership" element={<Leadership />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Placeholder name="Privacy Policy" />} />
                    <Route path="/terms" element={<Placeholder name="Terms & Conditions" />} />
                    <Route path="*" element={<Placeholder name="404 Not Found" />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App;
