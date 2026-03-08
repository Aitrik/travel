import { motion } from 'motion/react';

export default function Offers() {
  const offers = [
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      discount: '25% OFF',
      title: 'Market Entry Strategy',
      label: 'Early Partner'
    },
    {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
      discount: '15% OFF',
      title: 'Regional Sales Blitz',
      label: 'Expansion'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      discount: 'FREE',
      title: 'Distribution Consultation',
      label: 'Limited'
    }
  ];

  return (
    <section className="py-16 bg-transparent overflow-hidden text-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              Strategic Partnerships
            </motion.span>
            <div className="w-12 h-1 bg-gradient-to-l from-cyan-500 to-cyan-400 rounded-full"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-secondary mb-8"
          >
            GROWTH <span className="font-outline">PROGRAMS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed italic text-lg border-l-4 md:border-l-0 md:border-x-4 border-cyan-500/20 px-8"
          >
            "Tailored market entry and expansion initiatives designed for high-performance hospitality brands."
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer shadow-lg active:scale-[0.98] transition-transform"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute top-6 left-6">
                <div className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  {offer.label}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="text-5xl font-bold mb-2 text-primary">{offer.discount}</div>
                <h3 className="text-2xl font-bold leading-tight">{offer.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
