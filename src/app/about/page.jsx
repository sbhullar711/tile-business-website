'use client';
import { FaTruck, FaAward, FaUsers, FaCheckCircle, FaTools, FaPaintBrush, FaHome, FaLeaf } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bellerose</h1>
          <p className="text-xl text-gray-200">
            Your Trusted Partner in Building Materials Since 2023
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Established in 2023, <span className="font-bold text-black">Bellerose Tile & Building Material</span> has 
            quickly become a cornerstone for contractors, homeowners, and DIY enthusiasts in Bellerose, NY. 
            Our mission is simple: to provide top-quality building materials and exceptional service to help 
            you bring your projects to life.
          </p>
        </div>

        {/* Our Commitment Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Our Commitment</h2>
          <p className="text-center text-gray-600 mb-8">
            At Bellerose Tile & Building Material, we pride ourselves on:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Quality Products */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaAward className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-slate-900">Quality Products</h3>
              <p className="text-gray-600 text-center">
                Sourcing materials from trusted manufacturers to ensure durability and performance.
              </p>
            </div>

            {/* Exceptional Service */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-slate-900">Exceptional Service</h3>
              <p className="text-gray-600 text-center">
                Our knowledgeable staff is here to assist you every step of the way.
              </p>
            </div>

            {/* Free Delivery - Highlighted */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaTruck className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">FREE Delivery</h3>
              <p className="text-center text-white/95">
                We offer prompt delivery services to get your materials where you need them, when you need them.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  No Minimum Order!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Your One-Stop Destination</h2>
          <p className="text-lg text-center mb-8 text-blue-50">
            At Bellerose Tile & Building Material, we're your one-stop destination for premium construction essentials. 
            From high-quality tiles and outdoor pavers to plumbing supplies, power tools, paints, and gardening tools — 
            we offer everything you need to build, fix, and create.
          </p>
          
          {/* Product Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <FaHome className="text-3xl mb-2 mx-auto" />
              <p className="text-sm font-semibold">Tiles & Pavers</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <FaTools className="text-3xl mb-2 mx-auto" />
              <p className="text-sm font-semibold">Power Tools</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <FaPaintBrush className="text-3xl mb-2 mx-auto" />
              <p className="text-sm font-semibold">Paints</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <FaLeaf className="text-3xl mb-2 mx-auto" />
              <p className="text-sm font-semibold">Garden Tools</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-900">Why Choose Bellerose?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Locally Owned & Operated</h3>
                <p className="text-gray-600">We understand the unique needs of our Bellerose community</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Competitive Pricing</h3>
                <p className="text-gray-600">Quality materials at prices that work for your budget</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Expert Guidance</h3>
                <p className="text-gray-600">Our team helps you choose the right materials for your project</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Quick Turnaround</h3>
                <p className="text-gray-600">Most items in stock for immediate pickup or delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">Visit our showroom or contact us today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5551234567"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call Us Today
            </a>
            <a 
              href="/contact"
              className="bg-gray-200 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}