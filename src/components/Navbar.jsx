'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useState } from 'react';

export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/tiles" className="text-black font-medium hover:text-blue-600 transition-colors">
              Tiles
            </Link>
            <Link href="/pavers" className="text-black font-medium hover:text-blue-600 transition-colors">
              Pavers
            </Link>
            <Link href="/cabinets" className="text-black font-medium hover:text-blue-600 transition-colors">
              Cabinets
            </Link>
            <Link href="/about" className="text-black font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link 
              href="/contact" 
              className="relative text-black font-medium hover:text-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <FaShoppingCart />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link 
              href="/contact" 
              className="relative inline-flex items-center gap-2 text-black"
            >
              <FaShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col space-y-4 py-4">
              <Link 
                href="/" 
                className="text-black font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/tiles" 
                className="text-black font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tiles
              </Link>
              <Link 
                href="/pavers" 
                className="text-black font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pavers
              </Link>
              <Link 
                href="/cabinets" 
                className="text-black font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cabinets
              </Link>
              <Link 
                href="/about" 
                className="text-black font-medium px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}