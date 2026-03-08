import { Shield, Heart, Plane, Users, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Opportunity() {
  const challenges = [
    {
      title: 'Market Fragmentation',
      description: 'India consists of thousands of independent travel agents across 20+ states, making direct reach nearly impossible.',
      icon: Users,
      color: "text-cyan-600", bg: "bg-cyan-50"
    },
    {
      title: 'Cultural Nuances',
      description: 'Varying payment cycles, traveler preferences, and localized booking patterns require specialized knowledge.',
      icon: Heart,
      color: "text-amber-600", bg: "bg-amber-50"
    },
    {
      title: 'Distribution Complexity',
      description: 'Connecting global inventories to traditional Tier 2 and Tier 3 city agents remains a technological hurdle.',
      icon: Plane,
      color: "text-emerald-600", bg: "bg-emerald-50"
    },
    {
      title: 'High Expectations',
      description: 'Indian partners demand rapid responses and high-touch relationship management for luxury bookings.',
      icon: Shield,
      color: "text-purple-600", bg: "bg-purple-50"
    }
  ];

  return (
    <section id="opportunity" className="py-24 bg-transparent overflow-hidden text-secondary">
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
              The Challenge
            </motion.span>
            <div className="w-12 h-1 bg-gradient-to-l from-cyan-500 to-cyan-400 rounded-full"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-secondary mb-8 uppercase"
          >
            WHY HOTELS <span className="font-outline">STRUGGLE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed italic text-lg border-l-4 md:border-l-0 md:border-x-4 border-cyan-500/20 px-8"
          >
            "India is a complex ecosystem where digital reach often fails without local relationship management."
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <img
                src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=500&auto=format&fit=crop&q=60"
                alt="Business 1"
                className="w-full h-64 object-cover rounded-[2rem] shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=400"
                alt="Business 2"
                className="w-full h-48 object-cover rounded-[2rem] shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 pt-12"
            >
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=400"
                alt="Business 3"
                className="w-full h-48 object-cover rounded-[2rem] shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400"
                alt="Business 4"
                className="w-full h-64 object-cover rounded-[2rem] shadow-xl"
              />
            </motion.div>
          </div>

          <div className="lg:pr-12">
            <div className="space-y-8 mb-10">
              {challenges.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex gap-6 group"
                >
                  <div className={`flex-shrink-0 w-16 h-16 ${feature.bg} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-secondary">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="px-10 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg">
              View Our Solution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
