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

// export const whatsappLink = (message = site.whatsappMessage) =>
 export const whatsappLink = () =>

  'https://api.whatsapp.com/send?phone=%2B923452929973&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3ODk3ODIxOTksInBob25lIjoiKzkyMzQ1MjkyOTk3MyIsImNvbnRleHQiOiJBZmhOcE50RlhzajB1Y00wU05qeDdzOFdjbVNvaE11OFhXNlZ4bGRlXzYwRFJNTzlzOGZXZXRIclIzZWMwN3FaWUp0VFFSZFpad1RBWjBsTmdiX0dxSXRMSjBIWkxiMFpPUlBJUzJqeG1GOHhlNmt5YkhXaERDVDdKUVQyQW96M1JrNWx2cnFwdWJMNGM2aWhtUktBNHF0amJRIiwic291cmNlIjoiRkJfUGFnZSIsImFwcCI6ImZhY2Vib29rIiwiZW50cnlfcG9pbnQiOiJwYWdlX2N0YSJ9.gLTMKHAfKicdM8uerB2GtPAgOTsUQCGE-9FQK2tvKfKB2zuMFv2eZW3Ab3S2tnG3d3bLflGMGQGHlybfJ7a6Cw&fbclid=IwcGRvZgVleHRuA2FlbQIxMABzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeJsZ-qmKnEgEHb-EIKaOhQORMZKXWiz37NJbV-o6Lc4x8rzDqpnFHxF1XfSY_aem_SaWdNcvkF8oqCbHjvocHHw'
  // `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`