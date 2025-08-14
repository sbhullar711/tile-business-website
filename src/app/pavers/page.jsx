'use client';
import ProductCard from '@/components/ProductCard';
import { paversData } from '@/data/products';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function PaversPage() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Our Paver Collection</h1>
            <p className="text-gray-600">Durable pavers for driveways, patios, and walkways</p>
          </div>
          
          {cartCount > 0 && (
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <FaShoppingCart />
              View Cart ({cartCount})
            </Link>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paversData.map((paver) => (
            <ProductCard key={paver.id} product={paver} />
          ))}
        </div>

        {/* Bottom CTA */}
        {cartCount > 0 && (
          <div className="mt-12 text-center">
            <Link 
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2 text-lg"
            >
              <FaShoppingCart />
              Proceed to Inquiry ({cartCount} items)
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}