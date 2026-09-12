import {
  FaKaaba,
  FaPlaneDeparture,
  FaPassport,
  FaMountain,
} from 'react-icons/fa6'
import {
  MdOutlineMosque,
  MdOutlineHotel,
} from 'react-icons/md'
import {
  IoGlobeOutline,
  IoCompassOutline,
} from 'react-icons/io5'

export const services = [
  {
    id: 'umrah',
    title: 'Umrah Packages',
    description:
      'Carefully planned Umrah packages with accommodation, transport and complete on-ground support for a comfortable journey.',
    icon: FaKaaba,
    link: '/umrah',
    cta: 'Explore Umrah',
  },
  {
    id: 'hajj',
    title: 'Hajj Packages',
    description:
      'Structured Hajj packages covering accommodation, transportation, flight arrangements and travel support throughout.',
    icon: MdOutlineMosque,
    link: '/hajj',
    cta: 'Explore Hajj',
  },
  {
    id: 'international',
    title: 'International Tours',
    description:
      'Handpicked experiences across Dubai, Turkey, Maldives, Europe and beyond — designed around how you love to travel.',
    icon: IoGlobeOutline,
    link: '/international-tours',
    cta: 'Explore Tours',
  },
  {
    id: 'domestic',
    title: 'Domestic Tours',
    description:
      'Journey through Hunza, Skardu, Naran and more — the very best of Pakistan layered with comfort and care.',
    icon: FaMountain,
    link: '/domestic-tours',
    cta: 'Explore Tours',
  },
  {
    id: 'visa',
    title: 'Visa Assistance',
    description:
      'Visa assistance and application guidance for tourist, visit and business travel to simplify your paperwork.',
    icon: FaPassport,
    link: '/visa-services',
    cta: 'Visa Assistance',
  },
  {
    id: 'flights',
    title: 'Flight Booking',
    description:
      'Convenient flight booking assistance with an eye on schedule, connections and the most suitable routing for you.',
    icon: FaPlaneDeparture,
    link: '/contact',
    cta: 'Book Flights',
  },
  {
    id: 'hotels',
    title: 'Hotel Booking',
    description:
      'Handpicked accommodation matching your comfort and budget — from city stays to resort getaways.',
    icon: MdOutlineHotel,
    link: '/contact',
    cta: 'Book Hotels',
  },
  {
    id: 'customized',
    title: 'Customized Tours',
    description:
      'Build an itinerary around your dates, interests and pace with a team that plans around your requirements.',
    icon: IoCompassOutline,
    link: '/contact',
    cta: 'Plan My Trip',
  },
]