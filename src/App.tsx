import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Methodology from './components/Methodology';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <Hero />
      <Methodology />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

