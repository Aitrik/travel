import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-2 row-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-1 row-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-1 row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-1 row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-1 row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      span: 'col-span-1 row-span-1'
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
              Operations & Impact
            </motion.span>
            <div className="w-12 h-1 bg-gradient-to-l from-cyan-500 to-cyan-400 rounded-full"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-secondary mb-8"
          >
            OUR PRESENCE <span className="font-outline">IN ACTION.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed italic text-lg border-l-4 md:border-l-0 md:border-x-4 border-cyan-500/20 px-8"
          >
            "A visual testament to our global outreach and the strategic value we deliver to our partners."
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative overflow-hidden rounded-2xl group cursor-pointer shadow-md`}
            >
              <img
                src={image.url}
                alt={`Gallery ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
