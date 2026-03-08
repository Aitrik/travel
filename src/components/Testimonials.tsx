import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Adventure Traveler',
      rating: 5,
      text: 'Amazing experience! The tour was well organized and our guide was incredibly knowledgeable. I would definitely recommend this to anyone looking for an authentic travel experience.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Michael Chen',
      role: 'Travel Enthusiast',
      rating: 5,
      text: 'Best vacation ever! Everything was perfect from start to finish. The attention to detail and personalized service made our trip unforgettable. Can\'t wait to book another adventure!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Emma Wilson',
      role: 'Solo Traveler',
      rating: 5,
      text: 'Exceeded all expectations! As a solo traveler, I felt safe and welcomed throughout the entire journey. The group was amazing and I made friends for life. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <section id="trust" className="py-16 bg-transparent overflow-hidden text-secondary">
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
              Trust & Verification
            </motion.span>
            <div className="w-12 h-1 bg-gradient-to-l from-cyan-500 to-cyan-400 rounded-full"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-secondary mb-8"
          >
            MEASURABLE <span className="font-outline">RESULTS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed italic text-lg border-l-4 md:border-l-0 md:border-x-4 border-cyan-500/20 px-8"
          >
            "Transparency is the foundation of our representation. We don't just speak results; we report them."
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-300 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`}
                  />
                ))}
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed font-light italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/10 p-0.5"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-secondary">{testimonial.name}</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100 hover:bg-slate-50 transition-all active:scale-95 group">
            <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-primary" />
          </button>
          <button className="w-12 h-12 bg-primary rounded-full shadow-md flex items-center justify-center hover:bg-primary/90 transition-all active:scale-95 text-white">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
