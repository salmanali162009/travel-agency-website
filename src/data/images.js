// Centralized image registry.
// Replace any URL here and the change applies across the entire website.

const unsplash = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const pexels = (id, w = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const IMAGES = {
  // Hero
  hero: pexels(13256066, 2000),
  heroFallback: unsplash('photo-1518684079-3c830dcef090', 2000),

  // Spiritual — Makkah & Madinah
  kaaba: pexels(35269082, 1600),
  kaabaPilgrims: pexels(32822914, 1600),
  kaabaAerial: pexels(34246982, 1600),
  kaabaDay: pexels(35000011, 1600),
  madinah: pexels(33840568, 1600),
  madinahMajestic: pexels(30429165, 1600),
  madinahSunrise: pexels(29533623, 1600),
  madinahAlt: pexels(29102586, 1600),

  // International destinations
  dubai: unsplash('photo-1512453979798-5ea266f8880c', 1600),
  dubaiBurj: unsplash('photo-1518684079-3c830dcef090', 1600),
  dubaiNight: pexels(13256066, 1600),
  turkey: unsplash('photo-1524231757912-21f4fe3a7200', 1600),
  cappadocia: unsplash('photo-1641128324972-af3212f0f6bd', 1600),
  malaysia: unsplash('photo-1518509562904-e7ef99cdcc86', 1600),
  azerbaijan: pexels(19825792, 1600),
  azerbaijanSkyline: pexels(33971100, 1600),
  maldives: unsplash('photo-1514282401047-d79a71a590e8', 1600),
  thailand: unsplash('photo-1552465011-b4e21bf6e79a', 1600),
  switzerland: unsplash('photo-1530122037265-a5f1f91d3b99', 1600),
  italy: unsplash('photo-1523906834658-6e24ef2386f9', 1600),
  amalfi: unsplash('photo-1533709752211-118fcaf03312', 1600),
  london: unsplash('photo-1513635269975-59663e0ac1ad', 1600),

  // Domestic destinations (Pakistan)
  hunza: pexels(31839253, 1600),
  attabad: pexels(35302565, 1600),
  skardu: pexels(33837898, 1600),
  kachura: pexels(19442076, 1600),
  naran: unsplash('photo-1551632811-561732d1e306', 1600),
  swat: pexels(37385405, 1600),
  murree: unsplash('photo-1476610182048-b716b8518aae', 1600),
  kashmir: unsplash('photo-1519681393784-d120267933ba', 1600),
  mountains: unsplash('photo-1464822759023-fed622ff2c3b', 1600),

  // Supporting imagery
  beach: unsplash('photo-1506929562872-bb421503ef21', 1600),
  hotel: unsplash('photo-1566073771259-6a8506099945', 1600),
  airport: unsplash('photo-1436491865332-7a61a109cc05', 1600),
  luggage: unsplash('photo-1553913861-c0fddf2619ee', 1200),
  aboutDesktop: unsplash('photo-1467269204594-9661b134dd2b', 1600),
  ctaBackground: unsplash('photo-1507525428034-b723cf961d3e', 1800),
}

export const unsplashUrl = (id, width = 1400) => unsplash(id, width)
export const pexelsUrl = (id, width = 1400) => pexels(id, width)