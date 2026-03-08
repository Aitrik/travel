import { useState, useEffect } from 'react';
import { Menu, X, Search, MapPin, ChevronLeft, ChevronRight, Star, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Challenge', href: '#challenge' },
    { name: 'Solution', href: '#solution' },
    { name: 'Footprint', href: '#footprint' },
    { name: 'Trust', href: '#trust' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Search className="text-white w-5 h-5" />
          </div>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-secondary' : 'text-white'}`}>Travel Go</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-secondary' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="hidden lg:block">
          <button className="btn-primary">Partner With Us</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white bg-primary p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full">Contact Us</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const carouselData = [
  {
    title: "Connecting Global Hospitality to India's Ecosystem",
    description: "The Strongest Travel Agent Network. Bridging the gap between global hospitality standards and India's local agent ecosystem.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070",
    tag: "Hospitality Network",
    meta: { duration: "1M+", rating: "Market", location: "Pan-India" }
  },
  {
    title: "Strategic Sales Representation for Global Hotels",
    description: "Grow your market presence with dedicated sales professionals targeting key regional markets across India to drive high-value B2B bookings.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070",
    tag: "Strategic Growth",
    meta: { duration: "200+", rating: "Elite", location: "Global Reach" }
  },
  {
    title: "Data-Driven Results & Transparent Reporting",
    description: "Experience measurable growth with real-time performance dashboards and customized strategies for the unique Indian traveler segments.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2072",
    tag: "Market Insights",
    meta: { duration: "15yrs", rating: "Expert", location: "Analytics" }
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (currentSlide + 1) % carouselData.length;
      setCurrentSlide(next);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const paginate = (newDirection: number) => {
    const next = (currentSlide + newDirection + carouselData.length) % carouselData.length;
    setCurrentSlide(next);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={carouselData[currentSlide].image}
              alt={carouselData[currentSlide].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl flex flex-col items-center md:items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center md:items-start"
            >
              {/* Floating Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-light text-sm font-semibold mb-6 mx-auto md:mx-0"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                {carouselData[currentSlide].tag}
              </motion.div>

              <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-center md:text-left">
                {carouselData[currentSlide].title}
              </h1>

              <p className="text-lg md:text-xl mb-8 opacity-80 leading-relaxed max-w-2xl font-light text-center md:text-left mx-auto md:mx-0">
                {carouselData[currentSlide].description}
              </p>

              {/* Metadata Cluster */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-12">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{carouselData[currentSlide].meta.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <span className="text-sm font-medium">{carouselData[currentSlide].meta.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <MapPin className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-sm font-medium">{carouselData[currentSlide].meta.location}</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <button className="btn-primary flex items-center  justify-center gap-2 group">
                  Partner With Us
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-md hover:bg-white/20 transition-all group">

                  <span className="font-medium">Contact Us</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        <button
          onClick={() => paginate(-1)}
          className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-secondary transition-all group"
        >
          <ChevronLeft className="w-5 h-5 group-active:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-secondary transition-all group"
        >
          <ChevronRight className="w-5 h-5 group-active:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Modern Navigation Progress */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
            className="group relative p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`h-1 transition-all duration-500 rounded-full ${currentSlide === index ? 'w-12 bg-primary' : 'w-4 bg-white/30 group-hover:bg-white/60'
              }`} />
            <span className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold transition-opacity duration-300 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}>0{index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
