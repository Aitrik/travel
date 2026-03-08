import { MapPin, Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function PopularTours() {
  const tours = [
    {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
      title: 'Strategic Sales',
      description: 'Dedicated sales professionals targeting key regional markets across India to drive high-value B2B bookings.',
      rating: '100%',
      reviews: 'Commitment',
      duration: 'B2B Sales',
      location: 'Pan-India Reach'
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      title: 'Targeted Marketing',
      description: 'Bespoke marketing campaigns designed to resonate with Indian travel preferences and high-net-worth segments.',
      rating: 'Global',
      reviews: 'Standards',
      duration: 'Marketing',
      location: 'Local Expertise'
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      title: 'Distribution Optimization',
      description: 'Optimizing your connectivity with top-tier Indian DMCs and wholesale networks for maximum visibility.',
      rating: 'Growth',
      reviews: 'Engine',
      duration: 'Distribution',
      location: 'Market Access'
    }
  ];

  return (
    <section id="solution" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              The Solution
            </motion.span>
            <div className="w-12 h-1 bg-gradient-to-l from-cyan-500 to-cyan-400 rounded-full"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-secondary mb-8"
          >
            SALES <span className="font-outline">REPRESENTATION.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed italic text-lg border-l-4 md:border-l-0 md:border-x-4 border-cyan-500/20 px-8"
          >
            "Connecting global hotels to India's top-tier travel networks through structured sales expertise."
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-lg border border-slate-300 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden bg-gray-200">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute bottom-4 left-4 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Featured
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{tour.location}</span>
                  <div className="ml-auto flex items-center gap-2">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-gray-900">{tour.rating}</span>
                    <span className="text-sm text-gray-500">({tour.reviews})</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">{tour.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">{tour.description}</p>

                <div className="flex items-center gap-2 pt-6 border-t border-gray-100">
                  <Clock className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{tour.duration}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-10 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
