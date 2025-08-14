'use client';
import Link from 'next/link';
import { FaArrowLeft, FaHardHat, FaClock } from 'react-icons/fa';

export default function CabinetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <FaClock />
            COMING SOON
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Cabinet Collection
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're currently curating an exceptional selection of premium cabinets for your kitchen and bathroom needs.
          </p>
          
          {/* Construction Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
              <FaHardHat className="text-white text-6xl" />
            </div>
          </div>
          
          {/* Features Coming */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-slate-900">Kitchen Cabinets</h3>
                  <p className="text-sm text-gray-600">Modern and traditional styles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-slate-900">Bathroom Vanities</h3>
                  <p className="text-sm text-gray-600">Elegant storage solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-slate-900">Custom Options</h3>
                  <p className="text-sm text-gray-600">Tailored to your space</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-slate-900">Premium Materials</h3>
                  <p className="text-sm text-gray-600">Built to last</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Get Notified When We Launch!</h3>
            <p className="mb-6">
              Contact us to be the first to know when our cabinet collection arrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:(516) 344-1708" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Us: (516) 344-1708
              </a>
              <Link 
                href="/" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <FaArrowLeft /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}