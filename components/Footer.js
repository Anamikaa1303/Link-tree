import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-white">BitLink</h1>
          <p className="text-gray-400 text-sm">Shorten and share links easily</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
          <a href="/" className="hover:text-white transition">Templates</a>
          <a href="/" className="hover:text-white transition">Marketplace</a>
          <a href="/" className="hover:text-white transition">Discover</a>
          <a href="/" className="hover:text-white transition">Pricing</a>
          <a href="/" className="hover:text-white transition">Learn</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BitLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
