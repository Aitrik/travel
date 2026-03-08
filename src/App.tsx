import { useState, useEffect } from 'react';
import TourCategories from './components/TourCategories';
import PopularTours from './components/PopularTours';
import Opportunity from './components/Opportunity';
import Journey from './components/Journey';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';
import Gallery from './components/Gallery';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import { Hero, Navbar } from './components/Header';
import Loader from './components/Loader';
import { AnimatePresence } from 'motion/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#eff6ff] to-[#f0f9ff]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div key="content">
            <Navbar />
            <Hero />
            <TourCategories />
            <PopularTours />
            <Opportunity />
            <Journey />
            <Offers />
            <Testimonials />
            <Articles />
            <Gallery />
            <Subscribe />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
