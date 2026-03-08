import { Plane, Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-cyan-500" />
              <span className="text-xl font-bold text-white">Travel</span>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Your trusted companion for unforgettable journeys around the world. We create memories that last a lifetime.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-500 transition">Asia</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition">Europe</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition">America</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition">Africa</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition">Oceania</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition">Tour Packages</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition">Travel Guide</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to get special offers and travel updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded text-sm outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-4 py-2 bg-cyan-500 rounded hover:bg-cyan-600 transition">
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-6">
              <p className="text-xs mb-2">We Accept</p>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                  VISA
                </div>
                <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                  MC
                </div>
                <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                  PP
                </div>
                <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                  GPay
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2024 Travel. All rights reserved. Crafted with passion for travelers.</p>
        </div>
      </div>
    </footer>
  );
}
