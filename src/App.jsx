import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Umrah = lazy(() => import('./pages/Umrah.jsx'))
const Hajj = lazy(() => import('./pages/Hajj.jsx'))
const InternationalTours = lazy(() => import('./pages/InternationalTours.jsx'))
const DomesticTours = lazy(() => import('./pages/DomesticTours.jsx'))
const VisaServices = lazy(() => import('./pages/VisaServices.jsx'))
const Packages = lazy(() => import('./pages/Packages.jsx'))
const PackageDetails = lazy(() => import('./pages/PackageDetails.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function Loader() {
  return (
    <div className="grid min-h-screen place-items-center bg-cream-100">
      <span className="h-12 w-12 animate-spin border-2 border-brand-900/15 border-t-gold-500" aria-label="Loading" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/umrah" element={<Umrah />} />
            <Route path="/hajj" element={<Hajj />} />
            <Route path="/international-tours" element={<InternationalTours />} />
            <Route path="/domestic-tours" element={<DomesticTours />} />
            <Route path="/visa-services" element={<VisaServices />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:slug" element={<PackageDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}