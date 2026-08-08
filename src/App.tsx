import AuroraBackground from './components/AuroraBackground';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Offers from './components/Offers';
import Accessories from './components/Accessories';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AuroraBackground />
      <Splash />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Offers />
        <Accessories />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
