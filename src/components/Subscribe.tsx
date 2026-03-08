import { Send, Plane } from 'lucide-react';

export default function Subscribe() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-cyan-400 to-blue-500"></div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-transparent">
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="rgb(6 182 212)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 L50 90 L100 95 L150 85 L200 95 L250 90 L300 95 L350 90 L400 95 L450 85 L500 95 L550 90 L600 95 L650 85 L700 95 L750 90 L800 95 L850 85 L900 95 L950 90 L1000 95 L1050 85 L1100 95 L1150 90 L1200 95 L1250 85 L1300 95 L1350 90 L1400 95 L1440 90 L1440 200 L0 200 Z" fill="white" opacity="0.9" />
        </svg>
      </div>

      <div className="absolute top-20 right-20 opacity-20">
        <Plane className="w-32 h-32 text-white rotate-45" />
      </div>

      <div className="absolute bottom-40 left-20 opacity-20">
        <Plane className="w-24 h-24 text-white -rotate-12" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-12 h-1 bg-white/50 rounded"></div>
          <Plane className="w-6 h-6 text-white" />
          <div className="w-12 h-1 bg-white/50 rounded"></div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Build Your India<br />Market Presence?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-12">
          <input
            type="email"
            placeholder="Enter your professional email"
            className="flex-1 px-6 py-4 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm text-white placeholder-white/70 outline-none focus:bg-white/20 transition"
          />
          <button className="px-8 py-4 bg-white text-cyan-500 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
            <span>Schedule Strategy Call</span>
            <Send className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Traveler"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden -mt-2">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Traveler"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Traveler"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
