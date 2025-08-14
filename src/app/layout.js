import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '../context/CartContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tile Business - Quality Tiles & Pavers',
  description: 'Browse our selection of premium tiles and pavers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <div className="pt-16"> {/* Add padding for fixed navbar */}
            {children}
          </div>
          <Footer />

        </CartProvider>
      </body>
    </html>
  )
}