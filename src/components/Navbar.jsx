'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            Tile Business
          </Link>

          {/* Navigation Links */}
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
          <div className="md:hidden">
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
          </div>
        </div>
      </div>
    </nav>
  );
}