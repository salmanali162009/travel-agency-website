// Builds router state used to prefill the contact/quote form.
export const prefillFromPackage = (pkg) => ({
  travelType: pkg.typeLabel,
  destination: pkg.destination,
  packageName: pkg.title,
  message: `I'm interested in the ${pkg.title} (${pkg.duration}) package. Please share the details and a quotation.`,
})

export const prefillFromDestination = (dest) => ({
  travelType: dest.type === 'domestic' ? 'Domestic Tour' : 'International Tour',
  destination: dest.name,
  packageName: dest.name,
  message: `I'd like to know more about traveling to ${dest.name}. Please share options and a quotation.`,
})