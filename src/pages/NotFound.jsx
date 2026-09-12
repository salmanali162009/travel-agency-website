import { usePageMeta } from '../utils/seo.js'
import Button from '../components/Button.jsx'

export default function NotFound() {
  usePageMeta('Page Not Found | Golden Trip Tours & Travels', 'The page you are looking for could not be found.')

  return (
    <section className="wrap flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-7xl font-medium text-gold-600 sm:text-8xl">404</p>
      <h1 className="mt-4 font-display text-3xl text-charcoal-900">Page Not Found</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal-500">
        The page you are looking for may have been moved or is no longer available.
      </p>
      <Button to="/" size="lg" className="mt-8" arrow>
        Back To Home
      </Button>
    </section>
  )
}