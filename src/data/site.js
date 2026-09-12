// Central configuration file for Golden Trip Tours & Travels.
// Update business contact details in ONE place and the whole site follows.

export const site = {
  businessName: 'Golden Trip Tours & Travels',
  shortName: 'Golden Trip',
  tagline: 'Tours & Travels',

  // Replace with the real business contact details
  phone: '021 3450 0749',
  phoneRaw: '+922134500749', // used for tel: links
  whatsapp: '02134500749', // digits only, no "+" or spaces (used for wa.me links)
  email: 'info@yourdomain.com',
  location: 'Office No.01 Ground Floor Plot No.37 Sheet No.5, Abbasi Market, Model Colony Lasi Para, Karachi, 75100, Pakistan',

  social: {
    facebook: '#',
    instagram: '#',
  },

  whatsappMessage:
    'Hello Golden Trip Tours & Travels, I would like to know more about your travel packages.',
}

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`