import React from 'react';
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaShoppingBag,
  FaHeadset,
  FaLeaf,
  FaArrowRight,
} from 'react-icons/fa';

const footerLinks = {
  shop: [
    { label: 'STEM Kits', href: '#', icon: FaShoppingBag },
    { label: 'Anime', href: '#', icon: FaShoppingBag },
    { label: 'Educational', href: '#', icon: FaShoppingBag },
    { label: 'Best Sellers', href: '#', icon: FaShoppingBag },
  ],
  support: [
    { label: 'Contact', href: '#', icon: FaHeadset },
    { label: 'FAQ', href: '#', icon: FaHeadset },
    { label: 'Shipping', href: '#', icon: FaHeadset },
    { label: 'Returns', href: '#', icon: FaHeadset },
  ],
  mission: [
    { label: 'About', href: '#', icon: FaLeaf },
    { label: 'Values', href: '#', icon: FaLeaf },
    { label: 'Sustainability', href: '#', icon: FaLeaf },
    { label: 'Wholesale', href: '#', icon: FaLeaf },
  ],
};

const socialLinks = [
  {
    name: 'YouTube',
    icon: FaYoutube,
    href: 'https://www.youtube.com/@Lingo_Toys',
    color: 'hover:text-red-500',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/lingo_toys?igsh=MTdvcTJyNXpyaWUyaQ%3D%3D&utm_source=qr',
    color: 'hover:text-pink-500',
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    href: 'https://www.tiktok.com/@lingo_toys?_r=1&_t=ZS-95YzpA6v9x2',
    color: 'hover:text-black dark:hover:text-white',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    href: 'https://www.facebook.com/share/18oZG4TdrF/?mibextid=wwXIfr',
    color: 'hover:text-blue-600',
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 w-full mt-20 border-t border-gray-200 dark:border-slate-700 shadow-lg dark:shadow-2xl">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                🎨
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                LingoToys
              </h2>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              Elevating the standard of play through design-led educational experiences. Your gateway to understanding.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 transition-all duration-300 ease-out hover:scale-110 hover:shadow-md ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shop Section */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                  >
                    <span className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:translate-x-1 transition-transform duration-300">
                      <FaArrowRight className="w-3 h-3" />
                    </span>
                    <span className="group-hover:underline underline-offset-4">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                  >
                    <span className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:translate-x-1 transition-transform duration-300">
                      <FaArrowRight className="w-3 h-3" />
                    </span>
                    <span className="group-hover:underline underline-offset-4">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission Section */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Mission
            </h3>
            <ul className="space-y-3">
              {footerLinks.mission.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                  >
                    <span className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:translate-x-1 transition-transform duration-300">
                      <FaArrowRight className="w-3 h-3" />
                    </span>
                    <span className="group-hover:underline underline-offset-4">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Get the latest on new products and exclusive offers.
            </p>
            <div className="flex gap-2 pt-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 dark:text-gray-400">
            
            <div className="text-center md:text-left">
              <p className="font-medium">© 2024 LingoToys. Built for Play.</p>
              <p className="text-gray-500 dark:text-gray-500 mt-1">
                Developed by <span className="font-semibold text-gray-700 dark:text-gray-300">Moiz Developers</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <a
                href="#privacy"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <a
                href="#terms"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <a
                href="#cookies"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
