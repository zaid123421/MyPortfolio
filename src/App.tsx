import { ScrollProvider } from './context/ScrollContext';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Volunteer } from './components/sections/Volunteer';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { BlobBackground } from './components/ui/BlobBackground';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <ScrollProvider>
        <BlobBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Volunteer />
          <Education />
          <Contact />
        </main>
        <Footer />
      </ScrollProvider>
    </LanguageProvider>
  );
}
