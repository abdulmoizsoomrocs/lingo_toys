import React from 'react';

const footerLinks = {
  shop: [
    { label: 'STEM Kits', href: '#' },
    { label: 'Anime', href: '#' },
    { label: 'Educational', href: '#' },
    { label: 'Best Sellers', href: '#' },
  ],
  support: [
    { label: 'Contact', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Returns', href: '#' },
  ],
  mission: [
    { label: 'About', href: '#' },
    { label: 'Values', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Wholesale', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:bg-gray-800 w-full rounded-t-[3rem] mt-20 border-t-4 border-purple-400">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="space-y-6">
          <span className="text-xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 block font-headline">
            🎨 LingoToys
          </span>
          <p className="text-secondary dark:text-yellow-500 font-body text-sm leading-relaxed">
            Elevating the standard of play through design-led educational experiences. Our toys aren't
            just objects; they're gateways to understanding.
          </p>
          <div className="flex gap-4">
            <button className="material-symbols-outlined cursor-pointer hover:text-tertiary transition-colors text-on-surface">
              social_leaderboard
            </button>
            <button className="material-symbols-outlined cursor-pointer hover:text-tertiary transition-colors text-on-surface">
              photo_camera
            </button>
            <button className="material-symbols-outlined cursor-pointer hover:text-tertiary transition-colors text-on-surface">
              video_library
            </button>
          </div>
        </div>

        {/* Shop Links */}
        <div className="space-y-6">
          <h4 className="font-black text-on-surface font-headline">Shop</h4>
          <ul className="space-y-3 font-body text-sm">
            {footerLinks.shop.map((link, index) => (
              <li key={index}>
                <a
                  className="text-on-surface dark:text-gray-300 hover:text-secondary hover:underline decoration-2 underline-offset-4 transition-all duration-300"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div className="space-y-6">
          <h4 className="font-black text-on-surface font-headline">Support</h4>
          <ul className="space-y-3 font-body text-sm">
            {footerLinks.support.map((link, index) => (
              <li key={index}>
                <a
                  className="text-on-surface dark:text-gray-300 hover:text-secondary hover:underline decoration-2 underline-offset-4 transition-all duration-300"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mission Links */}
        <div className="space-y-6">
          <h4 className="font-black text-on-surface font-headline">Mission</h4>
          <ul className="space-y-3 font-body text-sm">
            {footerLinks.mission.map((link, index) => (
              <li key={index}>
                <a
                  className="text-on-surface dark:text-gray-300 hover:text-secondary hover:underline decoration-2 underline-offset-4 transition-all duration-300"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

 {/* Bottom Footer */}
<div className="px-12 py-8 border-t border-outline-variant/10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

  <div className="text-xs text-on-surface-variant font-medium text-center md:text-left">
    © 2024 LingoToys. Built for Play. <br />
    <span className="font-bold text-secondary">
      Developed by Moiz Developers
    </span>
  </div>

  <div className="flex gap-8 text-xs font-medium text-on-surface-variant">
    <a className="hover:text-secondary transition-colors" href="#privacy">
      Privacy Policy
    </a>
    <a className="hover:text-secondary transition-colors" href="#terms">
      Terms of Service
    </a>
    <a className="hover:text-secondary transition-colors" href="#cookies">
      Cookie Settings
    </a>
  </div>

</div>
    </footer>
  );
}
