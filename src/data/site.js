// Central configuration file for Golden Trip Tours & Travels.
// Update business contact details in ONE place and the whole site follows.

export const site = {
  businessName: 'Golden Trip Tours & Travels',
  shortName: 'Golden Trip',
  tagline: 'Tours & Travels',

  // Replace with the real business contact details
  phone: '0345 2929973',
  phoneRaw: '+92 345 2929973', // used for tel: links
  whatsapp: '+92 345 2929973', // digits only, no "+" or spaces (used for wa.me links)
  email: 'info@yourdomain.com',
  location: 'Office No.01 Ground Floor Plot No.37 Sheet No.5, Abbasi Market, Model Colony Lasi Para, Karachi, 75100, Pakistan',

  social: {
    facebook: 'https://www.facebook.com/goldentriptours/',
    instagram: 'https://www.instagram.com/goldentriptt?fbclid=IwY2xjawUZe11wZG9mBWV4dG4DYWVtAjEwAHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6NQay-8pgkH9YagArjQd6t9RIDehvq0IAXG4Mxzdd8jTNKUcfG4WSu-0UPfA_aem_h1pjDir8cewjOfqbTJFDKQ',
  },

  whatsappMessage:
    'Hello Golden Trip Tours & Travels, I would like to know more about your travel packages.',
}

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`