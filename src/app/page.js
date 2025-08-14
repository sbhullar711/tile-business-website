'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

import Logo from '@/components/Logo';
import { tilesData, paversData } from '@/data/products';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of hero images - add your image paths here
  const heroImages = [
    {
      src: '/images/hero-background.jpg',
      alt: 'Premium tiles and pavers showroom'
    },
    {
      src: '/images/hero-2.jpg', // Add second image
      alt: 'Beautiful tile installation'
    },
    {
      src: '/images/hero-3.jpg', // Add third image
      alt: 'Outdoor paver patio'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Manual navigation
  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  // Featured products - pick 2 tiles and 2 pavers
  const featuredProducts = [
    tilesData[0],
    tilesData[1],
    paversData[0],
    paversData[1]
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Carousel - KEEPING YOUR ORIGINAL STYLE */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Carousel Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={85}
              sizes="100vw"
            />
          </div>
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
          aria-label="Previous image"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
          aria-label="Next image"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Content - YOUR ORIGINAL LOGO STYLE */}
        <div className="relative z-20 text-center text-white px-4">
          <div className="mb-8">
            <Logo variant="hero" />
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Transform your space with our quality collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tiles"
              className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Browse Tiles <FaArrowRight />
            </Link>
            <Link 
              href="/pavers"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Browse Pavers <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section - NEW */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">Featured Products</h2>
          <p className="text-center text-gray-600 mb-12">Check out our most popular items</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/tiles"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              View All Products <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of your sections stay EXACTLY THE SAME */}
      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-gray-600 text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected tiles and pavers that meet the highest standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-gray-600 text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                From modern to classic, find the perfect style for your project
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-gray-600 text-xl font-semibold mb-2">Expert Advice</h3>
              <p className="text-gray-600">
                Our team is here to help you make the right choice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tiles Card */}
            <Link href="/tiles" className="group cursor-pointer">
              <div className="relative h-96 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="/images/tiles-category.jpg"
                  alt="Tiles collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Tiles</h3>
                  <p className="mb-4">
                    Indoor and outdoor tiles for every style and budget
                  </p>
                  <span className="inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Collection <FaArrowRight />
                  </span>
                </div>
              </div>
            </Link>

            {/* Pavers Card */}
            <Link href="/pavers" className="group cursor-pointer">
              <div className="relative h-96 bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src="/images/pavers-category.jpg"
                  alt="Pavers collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Pavers</h3>
                  <p className="mb-4">
                    Durable pavers for driveways, patios, and walkways
                  </p>
                  <span className="inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Collection <FaArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Browse our collection and send us your inquiry today
          </p>
          <Link 
            href="/contact"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Send Inquiry <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

// Simplified Featured Product Card Component
// Simplified Featured Product Card Component
function FeaturedProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking button
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

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
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-black hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            
            <div className="space-y-1 text-sm text-gray-700 mb-3">
              <p>Size: {product.size}</p>
              <p>Type: {product.type}</p>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="px-4 pb-4 flex items-center justify-between">
        <span className="text-lg font-bold text-blue-600">
          {product.pricePerSqft || product.price}
        </span>
        
        <button
          onClick={handleAddToCart}
          className={`px-3 py-1.5 rounded text-sm font-semibold transition-all ${
            added 
              ? 'bg-green-500 text-white' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {added ? '✓ Added' : '+ Add'}
        </button>
      </div>
    </div>
  );
}