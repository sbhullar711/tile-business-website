import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '../context/CartContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bellerose Tiles and Building Material - Everything You Need | Tiles, Pavers, Tools',
  description: 'At Bellerose Tile & Building Material, we\'re your one-stop destination for premium construction essentials. From high-quality tiles and outdoor pavers to plumbing supplies, power tools, paints, and gardening tools.',
  keywords: 'tiles, pavers, cabinets, building materials, power tools, Bellerose, NY, construction supplies, home improvement',
  openGraph: {
    title: 'Bellerose Tiles and Building Material',
    description: 'Your one-stop destination for premium construction essentials in Bellerose, NY',
    url: 'https://bellerosetile.com',
    siteName: 'Bellerose Tile & Building Material',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bellerosetile.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}