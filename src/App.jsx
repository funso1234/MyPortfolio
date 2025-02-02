import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contacts.jsx';
import About from './components/About.jsx';
import ContactInfo from "./components/ContactInfo.jsx";
const App = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-gray-100">
            <Navigation />
            <Hero />
            <About/>
            <Skills />
            <Projects />
            <ContactInfo/>
            <Contact />
        </div>
    );
};

export default App;