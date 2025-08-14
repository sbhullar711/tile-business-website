'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCheck, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { tilesData, paversData } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  // Find product by slug
  const allProducts = [...tilesData, ...paversData];
  const product = allProducts.find(p => p.slug === params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <Link 
          href={product.category === 'Tiles' ? '/tiles' : '/pavers'}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-6"
        >
          <FaArrowLeft /> Back to {product.category}
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
              <div className="relative h-96">
                <Image
                  src={product.images?.[currentImageIndex] || product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4 text-black">{product.name}</h1>
            
            {/* Price Section */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Price per Box</p>
                  <p className="text-2xl font-bold text-blue-600">{product.pricePerBox}</p>
                  <p className="text-xs text-gray-500">{product.sqftPerBox}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Price per Sq.Ft</p>
                  <p className="text-2xl font-bold text-gray-800">{product.pricePerSqft}</p>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
              <h2 className="text-lg font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-600">Size:</span>
                  <span className="ml-2 font-medium">{product.size}</span>
                </div>
                <div>
                  <span className="text-gray-600">Color:</span>
                  <span className="ml-2 font-medium">{product.color}</span>
                </div>
                <div>
                  <span className="text-gray-600">Material:</span>
                  <span className="ml-2 font-medium">{product.material}</span>
                </div>
                <div>
                  <span className="text-gray-600">Finish:</span>
                  <span className="ml-2 font-medium">{product.finish}</span>
                </div>
                <div>
                  <span className="text-gray-600">Thickness:</span>
                  <span className="ml-2 font-medium">{product.thickness}</span>
                </div>
                <div>
                  <span className="text-gray-600">Per Box:</span>
                  <span className="ml-2 font-medium">{product.piecesPerBox}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
              <h2 className="text-lg font-semibold mb-3">Description</h2>
              <p className="text-gray-700">{product.description}</p>
              
              {product.features && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <FaCheck className="text-green-500 text-sm" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-6 mb-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Quantity (Boxes)</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded border hover:bg-gray-100 flex items-center justify-center"
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center border rounded px-2 py-2"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded border hover:bg-gray-100 flex items-center justify-center"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Total: {quantity} {quantity === 1 ? 'box' : 'boxes'}</p>
                  <p className="font-semibold">{(quantity * parseFloat(product.sqftPerBox)).toFixed(0)} sq ft</p>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}