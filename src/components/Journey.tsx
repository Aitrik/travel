import { Users, MapPin, Globe, Star, Info } from 'lucide-react';
import { motion } from 'motion/react';

const PulsePoint = ({ top, left, label }: { top: string; left: string; label?: string }) => (
  <div className="absolute" style={{ top, left }}>
    <div className="relative group cursor-pointer">
      <div className="w-4 h-4">
        <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="relative w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)] border-2 border-white"></div>
      </div>
      {label && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="bg-secondary text-white px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-medium shadow-lg border border-white/10">
            {label}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default function Journey() {
  const stats = [
    { icon: Users, label: 'Professionals', value: '200+', color: 'bg-cyan-50 text-cyan-600' },
    { icon: MapPin, label: 'Strategic Offices', value: '9', color: 'bg-blue-50 text-blue-600' },
    { icon: Globe, label: 'Countries', value: '5', color: 'bg-indigo-50 text-indigo-600' },
    { icon: Star, label: 'Hotel Partners', value: '1000+', color: 'bg-amber-50 text-amber-600' },
  ];

  const offices = [
    { id: 'delhi', name: 'New Delhi (HQ)', country: 'India', x: '68%', y: '45%' },
    { id: 'mumbai', name: 'Mumbai', country: 'India', x: '66%', y: '52%' },
    { id: 'bangalore', name: 'Bangalore', country: 'India', x: '67%', y: '58%' },
    { id: 'dubai', name: 'Dubai', country: 'UAE', x: '60%', y: '48%' },
    { id: 'london', name: 'London', country: 'UK', x: '47%', y: '28%' },
    { id: 'singapore', name: 'Singapore', country: 'Singapore', x: '75%', y: '65%' },
    { id: 'new-york', name: 'New York', country: 'USA', x: '25%', y: '35%' },
    { id: 'san-francisco', name: 'San Francisco', country: 'USA', x: '12%', y: '38%' },
    { id: 'chennai', name: 'Chennai', country: 'India', x: '69%', y: '59%' },
  ];

  return (
    <section id="footprint" className="py-16 bg-slate-50/30 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-[10px]"
            >
              Global Presence
            </motion.span>
            <div className="w-12 h-1 bg-gradient-to-l from-cyan-500 to-cyan-400 rounded-full"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-secondary mb-8"
          >
            OPERATING <span className="font-outline">WORLDWIDE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed italic text-lg border-l-4 md:border-l-0 md:border-x-4 border-cyan-500/20 px-8"
          >
            "Our neural network spans 5 continents, optimizing results while the competition sleeps."
          </motion.p>
        </div>

        {/* Map Section */}
        <div className="relative rounded-[3rem] overflow-hidden aspect-video bg-secondary group border-4 border-white shadow-2xl mb-8">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover grayscale opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"
            alt="World Map Network"
          />
          <div className="absolute inset-0">
            {offices.map((office) => (
              <PulsePoint
                key={office.id}
                top={office.y}
                left={office.x}
                label={office.name}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 border border-slate-300 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden active:scale-95"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform`}>
                <stat.icon className="w-8 h-8" />
              </div>

              <div className="text-5xl font-black text-secondary mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
