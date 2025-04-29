import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import '@/styles/animations.css';

const Index = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
