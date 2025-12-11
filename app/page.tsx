import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <div className="bg-dark text-white min-h-screen selection:bg-saffron selection:text-black">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}