'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Responsive Background Images */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Mobile Image - Shows on small screens */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/hero-background-mobile.jpg" // Portrait/vertical image
            alt="Premium tiles and pavers"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        {/* Desktop Image - Shows on larger screens */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/hero-background.jpg" // Landscape/horizontal image
            alt="Premium tiles and pavers showroom"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
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

      {/* Rest of your sections stay the same */}
      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
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

      {/* Categories Section - Also update these if you want images */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tiles Card */}
            <Link href="/tiles" className="group cursor-pointer">
              <div className="relative h-96 bg-gray-300 rounded-lg overflow-hidden">
                {/* You can add images here too */}
                <Image
                  src="/images/tiles-category.jpg"  // Add this image
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
                  src="/images/pavers-category.jpg"  // Add this image
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