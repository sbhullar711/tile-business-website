'use client';
import Logo from './Logo';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Logo variant="footer" />
            <p className="text-gray-400 mt-4">
              Your trusted partner for premium tiles, pavers, and cabinets since 2023.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/btbsupply/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={24} />
              </a>
              {/* Add Facebook if you have it */}
              {/* <a 
                href="https://www.facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook size={24} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/tiles" className="block text-gray-400 hover:text-white transition-colors">
                Tiles Collection
              </Link>
              <Link href="/pavers" className="block text-gray-400 hover:text-white transition-colors">
                Pavers Collection
              </Link>
              <Link href="/cabinets" className="block text-gray-400 hover:text-white transition-colors">
                Cabinets Collection
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3 text-gray-400">
                <FaClock className="mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <div>
                    <span className="text-white">Mon - Fri:</span> 7:00 AM - 6:00 PM
                  </div>
                  <div>
                    <span className="text-white">Saturday:</span> 7:00 AM - 5:00 PM
                  </div>
                  <div>
                    <span className="text-white">Sunday:</span> 9:00 AM - 5:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="flex-shrink-0" />
                <span>(516) 344-1708</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="flex-shrink-0" />
                <span>supplybtb@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="flex-shrink-0 mt-1" />
                <span>248-27 Jericho Turnpike, Bellerose, NY 11426</span>
              </div>
              {/* Instagram Link in Contact Section Too */}
              <div className="flex items-center gap-3 text-gray-400">
                <FaInstagram className="flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/btbsupply/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @btbsupply
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bellerose Tiles and Building Material. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}