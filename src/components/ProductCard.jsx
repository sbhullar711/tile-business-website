'use client';
import { useCart } from '@/context/CartContext';
import { FaPlus, FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent Link navigation when clicking button
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const inCart = cart.find(item => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <Link href={`/products/${product.slug || product.id}`}>
        <div className="cursor-pointer">
          <div className="h-48 bg-gray-200 relative">
            <img 
              src={product.images?.[0] || product.image} 
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {inCart && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                In Cart ({inCart.quantity})
              </div>
            )}
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-black hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            
            <div className="space-y-1 text-sm text-gray-700 mb-3">
              <p>Size: {product.size}</p>
              <p>Type: {product.type}</p>
              {product.finish && <p>Finish: {product.finish}</p>}
              {product.thickness && <p>Thickness: {product.thickness}</p>}
            </div>
          </div>
        </div>
      </Link>
      
      <div className="px-4 pb-4 flex items-center justify-between">
        <span className="text-lg font-bold text-blue-600">{product.pricePerSqft || product.price}</span>
        
        <button
          onClick={handleAddToCart}
          className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
            added 
              ? 'bg-green-500 text-white' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {added ? (
            <>
              <FaCheck /> Added
            </>
          ) : (
            <>
              <FaPlus /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}