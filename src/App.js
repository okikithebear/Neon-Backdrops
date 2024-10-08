
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import AboutSection from './components/About';
import Footer from './components/Footer';
// import Collections from './components/Collections';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import WorkGallery from './components/WorkGallery';

function App() {
  return (
    <div className="App">
      <div className='my-8'> <Header/></div>
      <div className='my-8'>    <Hero/></div>
      <div className='my-8'> <ProductCarousel/></div>
      <div className='my-8'>    <Gallery/></div>
      <AboutSection/>
      <WorkGallery/>
      <Footer/>

    </div>
  );
}

export default App;
