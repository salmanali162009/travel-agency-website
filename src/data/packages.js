import { IMAGES } from './images.js'

export const packages = [
  // ─── Umrah ────────────────────────────────────────────────
  {
    id: 'umrah',
    slug: 'umrah',
    title: 'Umrah',
    type: 'umrah',
    typeLabel: 'Umrah Package',
    destination: 'Makkah & Madinah',
    duration: '10 Days',
    nights: '9 Nights',
    image: IMAGES.kaabaPilgrims,
    tagline: 'A refined Umrah experience with premium accommodation, organized transport and dedicated support.',
    short:
      'A complete Umrah journey — flights, hotels close to the Haram, transport and visa assistance planned end to end.',
    overview:
      'The Umrah package is crafted for a smooth, comfortable pilgrimage. Enjoy well-located hotel accommodation in Makkah and Madinah, organized transport between the holy cities and a dedicated support team from arrival to departure — so the entire journey feels calm, comfortable and stress-free.',
    highlights: [
      'Premium hotel accommodation beside the Haram',
      'Return flights',
      'Private & scheduled transportation',
      'Visa assistance and application guidance',
      'Dedicated support before and during the trip',
    ],
    accommodation:
      'Stay in premium hotels near Masjid al-Haram in Makkah and Masjid an-Nabawi in Madinah. Final hotel selection depends on availability and your preferences at the time of booking.',
    transportation:
      'Private airport transfers plus organized transport between Makkah and Madinah, with flexible scheduling for prayers and Ziyarats.',
    flights:
      'Return flight arrangements with attention to comfortable timings, from your preferred departure city.',
    visa: 'Complete visa assistance and application guidance included, aligned with Saudi Arabia’s visa regulations at the time of travel.',
    importantInfo:
      'Package inclusions vary with season and availability. Contact us with your preferred dates so we can confirm hotels, flights and provide an accurate quotation.',
    featured: true,
    popular: true,
  },

  // ─── Hajj ─────────────────────────────────────────────────
  {
    id: 'hajj',
    slug: 'hajj',
    title: 'Hajj',
    type: 'hajj',
    typeLabel: 'Hajj Package',
    destination: 'Makkah & Madinah',
    duration: 'Approx. 25 Days',
    nights: '24 Nights',
    image: IMAGES.kaaba,
    tagline: 'Added comfort and closer accommodation for a more settled Hajj experience.',
    short:
      'Premium stays, closer hotels and richer support designed to make the Hajj days calmer and more comfortable.',
    overview:
      'For pilgrims who value greater comfort during the physically demanding days of Hajj, this package offers closer hotel categories, improved transport arrangements and attentive on-ground support from arrival to departure.',
    highlights: [
      'Premium accommodation close to the Haram',
      'Comfortable transportation throughout',
      'Flight arrangements',
      'Visa assistance and application guidance',
      'Dedicated support team before and during Hajj',
    ],
    accommodation:
      'Premium hotel categories closer to Masjid al-Haram where available during the season, for shorter walking distances.',
    transportation:
      'Organized and well-timed transport for the Hajj sites and inter-city movement, with assistance from our ground team.',
    flights:
      'Flight arrangements with attention to comfortable scheduling for the pilgrimage season.',
    visa: 'Hajj visa guidance in accordance with the official Hajj procedures announced each season.',
    importantInfo:
      'Availability, pricing and inclusions change each Hajj season. Please contact us with your requirements for current information and an accurate quotation.',
    featured: false,
  },

  // ─── International ────────────────────────────────────────
  {
    id: 'dubai-escape',
    slug: 'dubai-escape',
    title: 'Dubai Escape',
    type: 'international',
    typeLabel: 'International Package',
    destination: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    nights: '4 Nights',
    image: IMAGES.dubaiNight,
    tagline: 'Iconic skyline, desert sunsets and world-class stays in a 5-day Dubai getaway.',
    short:
      'A short, polished escape covering the city’s icons, desert adventure and relaxed leisure time.',
    overview:
      'A five-day introduction to Dubai in style — Burj Khalifa views, a desert safari with golden-hour dunes, modern city sightseeing and downtime at a handpicked hotel. Ideal for a long weekend or a relaxed family break.',
    highlights: [
      'Hotel accommodation with breakfast',
      'Burj Khalifa and Downtown sightseeing',
      'Desert safari experience',
      'Abra and traditional souk tour',
      'Airport transfers',
      'Flight booking assistance',
    ],
    accommodation:
      'Well-located city hotels in Downtown or Marina area, with options from 4 to 5 star based on your preference.',
    transportation:
      'Airport transfers plus organized sightseeing transportation for all included tours.',
    flights:
      'Return flight assistance from your nearest departure airport.',
    visa: 'Visa assistance available for eligible nationalities (UAE visa on arrival or pre-approved visa depending on passport). Our team guides you on the correct option.',
    importantInfo:
      'UAE visa and entry rules are set by the authorities and depend on your nationality. We confirm the applicable requirements at the time of booking.',
    featured: true,
    popular: true,
  },
  {
    id: 'turkey-journey',
    slug: 'turkey-journey',
    title: 'Turkey Journey',
    type: 'international',
    typeLabel: 'International Package',
    destination: 'Istanbul & Cappadocia',
    duration: '8 Days / 7 Nights',
    nights: '7 Nights',
    image: IMAGES.turkey,
    tagline: 'From Istanbul’s skyline to Cappadocia’s valleys — an eight-day journey through Turkey.',
    short:
      'Istanbul city breaks, Bosphorus cruises and Cappadocia’s fairy chimneys, carefully sequenced.',
    overview:
      'Begin in Istanbul with its mosques, bazaars and Bosphorus views, then fly to the surreal valleys of Cappadocia for hot-air balloon mornings and cave-town exploration. Comfortable hotels and organized transfers keep the journey effortless.',
    highlights: [
      'Hotel accommodation throughout',
      'Istanbul guided city tour',
      'Bosphorus cruise',
      'Cappadocia tour incl. open-air museum',
      'Optional hot-air balloon experience',
      'Domestic flight Istanbul – Cappadocia',
      'Airport transfers',
    ],
    accommodation:
      'Boutique and city hotels — Sultanahmet for Istanbul, cave-style hotels for Cappadocia. Upgrades available.',
    transportation:
      'Private transfers, guided tours with transport, and the domestic flight between cities.',
    flights:
      'Return international flight assistance plus the included domestic flight to Cappadocia.',
    visa: 'Visa guidance for Turkey (e-visa for eligible nationalities). We help with the application steps.',
    importantInfo:
      'Hot-air balloon flights are weather-dependent and subject to operator availability. Tourism rules and entry requirements can change — confirmed at booking.',
    featured: true,
  },
  {
    id: 'malaysia-experience',
    slug: 'malaysia-experience',
    title: 'Malaysia Experience',
    type: 'international',
    typeLabel: 'International Package',
    destination: 'Kuala Lumpur & Genting',
    duration: '6 Days / 5 Nights',
    nights: '5 Nights',
    image: IMAGES.malaysia,
    tagline: 'Twin Towers, highland escapes and vibrant local culture in a 6-day Malaysian break.',
    short:
      'A whisk through Kuala Lumpur’s landmarks with a cool escape into the Cameron or Genting highlands.',
    overview:
      'A balanced Malaysian itinerary pairing the energy of Kuala Lumpur — Petronas Towers, Batu Caves, central markets — with the cool greenery of the highlands, wrapped in warm hospitality and excellent food.',
    highlights: [
      'Hotel accommodation with breakfast',
      'Kuala Lumpur city tour',
      'Petronas Towers and Batu Caves visits',
      'Highlands day excursion',
      'Airport transfers',
      'Flight booking assistance',
    ],
    accommodation:
      'City-center hotels in KL and a comfortable hill-resort stay in the highlands.',
    transportation:
      'Airport transfers and private transport for all sightseeing excursions.',
    flights:
      'Return flight assistance from your nearest city.',
    visa: 'E-visa guidance for eligible nationalities where applicable.',
    importantInfo:
      'Malaysia entry requirements vary by nationality — we confirm the current rules at the time of booking.',
    featured: false,
  },
  {
    id: 'maldives-getaway',
    slug: 'maldives-getaway',
    title: 'Maldives Getaway',
    type: 'international',
    typeLabel: 'International Package',
    destination: 'Maldives',
    duration: '5 Days / 4 Nights',
    nights: '4 Nights',
    image: IMAGES.maldives,
    tagline: 'Overwater villas, turquoise lagoons and absolute stillness in the Maldives.',
    short:
      'A dreamy island break with resort stays, private transfers and unhurried lagoon time.',
    overview:
      'A short escape to island time — fly to Malé, transfer to a handpicked resort, and step into a world of overwater villas, reef snorkeling and sunsets that stretch on forever. Perfect for honeymoons and anniversaries.',
    highlights: [
      'Resort accommodation (half board options)',
      'Speedboat or seaplane transfers',
      'Reef snorkeling and water activities',
      'Honeymoon arrangements on request',
      'Flight booking assistance',
    ],
    accommodation:
      'Resorts on private islands, ranging from stylish 4-star to signature 5-star overwater villas.',
    transportation:
      'Shared or private speedboat / seaplane transfers arranged from Malé, depending on resort location.',
    flights:
      'Return flight assistance from your departure city.',
    visa: 'On-arrival visa for most nationalities — we confirm your eligibility and requirements.',
    importantInfo:
      'Resort and transfer type depend on availability. Best seasons vary; we advise on timing with your dates.',
    featured: true,
    popular: true,
  },
  {
    id: 'azerbaijan-adventure',
    slug: 'azerbaijan-adventure',
    title: 'Azerbaijan Adventure',
    type: 'international',
    typeLabel: 'International Package',
    destination: 'Baku, Azerbaijan',
    duration: '6 Days / 5 Nights',
    nights: '5 Nights',
    image: IMAGES.azerbaijan,
    tagline: 'Flame Towers, the Old City and Caspian evenings in Baku’s fire-lit capital.',
    short:
      'A relaxed 6-day stay in Baku with city heritage walks and modern Caspian-front experiences.',
    overview:
      'Scattered across cobbled alleys of the Old City and the glittering promenade of the Caspian, Baku surprises at every turn. This itinerary pairs heritage sites — Maiden Tower, Palace of the Shirvanshahs — with contemporary districts and Flame Tower views.',
    highlights: [
      'Hotel accommodation with breakfast',
      'Old City heritage tour',
      'Flame Towers & Boulevard visit',
      'Absheron day excursion',
      'Airport transfers',
      'Flight booking assistance',
    ],
    accommodation:
      'Well-located hotels in central Baku near the promenade, with modern comforts.',
    transportation:
      'Airport transfers plus private transport for the day excursions.',
    flights:
      'Return flight assistance.',
    visa: 'Visa guidance for Azerbaijan, including the ASAN visa/e-visa process for eligible nationalities.',
    importantInfo:
      'Entry requirements depend on your nationality — e-visa processing confirmed at the time of booking.',
    featured: false,
  },

  // ─── Domestic ─────────────────────────────────────────────
  {
    id: 'hunza-adventure',
    slug: 'hunza-adventure',
    title: 'Hunza Adventure',
    type: 'domestic',
    typeLabel: 'Domestic Package',
    destination: 'Hunza Valley, Gilgit-Baltistan',
    duration: '6 Days / 5 Nights',
    nights: '5 Nights',
    image: IMAGES.hunza,
    tagline: 'Karakoram views, Attabad blues and the timeless hospitality of Hunza.',
    short:
      'A 6-day journey through the Karakoram — forts, lakes and glaciers with comfortable valley stays.',
    overview:
      'Tracing the Karakoram Highway, this journey takes you from Islamabad to the heart of Hunza — Baltit and Altit forts, the turquoise waters of Attabad Lake, eagles’ nests over Passu Cones and the easy warmth of local hospitality.',
    highlights: [
      'Transport (road journey with stops)',
      'Hotel stays in Hunza & Karimabad',
      'Baltit & Altit Fort visits',
      'Attabad Lake tour',
      'Eagle’s Nest & Passu viewpoint',
      'Meals as per itinerary',
    ],
    accommodation:
      'Comfortable hotels and guesthouses with valley views in Karimabad and along the Hunza stretch.',
    transportation:
      'Air-conditioned road transport from Islamabad with scenic stops, plus private local transfers.',
    flights:
      'Optional domestic flights to/from Gilgit when available — we can arrange with your preference.',
    visa: 'Not required for domestic travel within Pakistan.',
    importantInfo:
      'Road conditions and weather in northern Pakistan affect travel. We confirm the route and safety situation closer to your travel dates.',
    featured: true,
  },
  {
    id: 'skardu-journey',
    slug: 'skardu-journey',
    title: 'Skardu Journey',
    type: 'domestic',
    typeLabel: 'Domestic Package',
    destination: 'Skardu, Gilgit-Baltistan',
    duration: '7 Days / 6 Nights',
    nights: '6 Nights',
    image: IMAGES.skardu,
    tagline: 'Gateway to K2 — alpine lakes, vast landscapes and high-altitude serenity.',
    short:
      'Explore Skardu’s lakes and valleys — Shangrila, Kachura and the breathtaking terrain around K2’s gateway.',
    overview:
      'Skardu rewards the traveler with landscapes that feel larger than life. This package includes the famous Shangrila resort, Upper and Lower Kachura lakes, gentle excursions into the valleys, and evenings under some of the clearest skies in the world.',
    highlights: [
      'Transport including local sightseeing',
      'Hotel stays in Skardu',
      'Shangrila & Kachura lakes',
      'Valley excursions (Deosai / Khaplu options)',
      'Meals as per itinerary',
    ],
    accommodation:
      'Comfortable hotels in Skardu with lakeside options where available.',
    transportation:
      'Road transport from Islamabad or domestic flight option to Skardu, plus 4x4 for valley excursions.',
    flights:
      'Domestic flight assistance (Islamabad–Skardu) subject to availability, or road journey.',
    visa: 'Not required on domestic routes.',
    importantInfo:
      'Deosai sightings and flight schedules depend on weather and season. We advise the best window for your travel.',
    featured: false,
  },
  {
    id: 'naran-retreat',
    slug: 'naran-retreat',
    title: 'Naran Retreat',
    type: 'domestic',
    typeLabel: 'Domestic Package',
    destination: 'Naran & Kaghan, KPK',
    duration: '4 Days / 3 Nights',
    nights: '3 Nights',
    image: IMAGES.naran,
    tagline: 'Saif-ul-Malook, green meadows and river-side mornings in the Kaghan Valley.',
    short:
      'A refreshing 4-day mountain retreat with lakes, meadows and cozy valley stays.',
    overview:
      'A quick escape to the lakes and meadows of the Kaghan Valley — an afternoon drive up to Saif-ul-Malook, mornings by the Kunhar river, and easy walks through pine and meadow country.',
    highlights: [
      'Transport from Islamabad',
      'Hotel stay in Naran',
      'Saif-ul-Malook Lake visit',
      'Local sightseeing (Lulusar / Shogran options)',
      'Breakfast and dinner at the hotel',
    ],
    accommodation:
      'Cozy hotels and lodges in Naran with river or valley views.',
    transportation:
      'Air-conditioned road transport from Islamabad and local transfers where needed.',
    flights: 'Not applicable for this package (road journey).',
    visa: 'Not required.',
    importantInfo:
      'Naran roads are seasonal — we schedule this journey in the open season and keep an eye on weather forecasts.',
    featured: false,
  },
  {
    id: 'swat-escape',
    slug: 'swat-escape',
    title: 'Swat Valley Escape',
    type: 'domestic',
    typeLabel: 'Domestic Package',
    destination: 'Swat & Kalam, KPK',
    duration: '4 Days / 3 Nights',
    nights: '3 Nights',
    image: IMAGES.swat,
    tagline: 'Green valleys, glacial lakes and the Switzerland of the East.',
    short:
      'A scenic 4-day loop through Swat’s valleys with time in Malam Jabba and Kalam.',
    overview:
      'This package explores Swat’s lush valleys — the hill resort of Malam Jabba, the bazaars of Mingora, and the high lakes around Kalam — balancing drive time with unhurried sightseeing.',
    highlights: [
      'Transport from Islamabad',
      'Hotel stays in Swat / Kalam',
      'Malam Jabba & Kalam visits',
      'Local lake excursions (Mahodand option)',
      'Breakfast and dinner included',
    ],
    accommodation:
      'Comfortable hotels in Saidu Sharif, Malam Jabba or Kalam as per itinerary.',
    transportation:
      'Road transport with local 4x4 for the higher lake excursion.',
    flights: 'Not applicable (road journey).',
    visa: 'Not required.',
    importantInfo:
      'Higher-altitude drives such as Mahodand depend on road and weather conditions — confirmed before travel.',
    featured: false,
  },
  {
    id: 'murree-weekend',
    slug: 'murree-weekend',
    title: 'Murree Weekend',
    type: 'domestic',
    typeLabel: 'Domestic Package',
    destination: 'Murree & Galiyat',
    duration: '2 Days / 1 Night',
    nights: '1 Night',
    image: IMAGES.murree,
    tagline: 'Pine-clad hills and weekend air, minutes from Islamabad.',
    short:
      'A short, easy weekend among Murree’s pines — best for families who want a quick breath of fresh air.',
    overview:
      'A compact weekend plan for the pine-covered hills around Murree — Mall Road strolls, viewpoints like Kashmir Point, and a stop in one of the nearby Galiyat for quieter forests and open-air feel.',
    highlights: [
      'Transport from Islamabad',
      'Hotel stay in Murree / Galiyat',
      'Mall Road & Kashmir Point',
      'Optional Patriata chair lift',
      'Breakfast included',
    ],
    accommodation:
      'Cozy hill hotels in Murree or one of the calmer Galiyat (Nathiagali / Changla Gali).',
    transportation:
      'Road transport for the entire trip from Islamabad.',
    flights: 'Not applicable.',
    visa: 'Not required.',
    importantInfo:
      'Murree weekends are popular — early booking gives the best hotel options.',
    featured: false,
  },
  {
    id: 'kashmir-escape',
    slug: 'kashmir-escape',
    title: 'Kashmir Escape',
    type: 'domestic',
    typeLabel: 'Domestic Package',
    destination: 'Azad Kashmir',
    duration: '4 Days / 3 Nights',
    nights: '3 Nights',
    image: IMAGES.kashmir,
    tagline: 'Misty valleys, orchards and flowing rivers in Pakistan’s paradise.',
    short:
      'A gentle 4-day journey through Azad Kashmir’s hill towns and river valleys.',
    overview:
      'From Muzaffarabad’s confluence views to the green meadows of the Neelum Valley, this itinerary keeps the pace gentle and the scenery grand — ideal for families and nature lovers.',
    highlights: [
      'Transport from Islamabad',
      'Hotel stays in Muzaffarabad / Neelum',
      'Muzafarabad city & confluence viewing',
      'Neelum Valley sightseeing',
      'Breakfast and dinner included',
    ],
    accommodation:
      'Comfortable valley hotels and riverside lodges.',
    transportation:
      'Protected road transport with local transfers.',
    flights: 'Not applicable.',
    visa: 'Not required.',
    importantInfo:
      'Certain Neelum Valley stretches require a local permit — we assist with the process during planning.',
    featured: false,
  },
]

export const getPackageById = (id) => packages.find((p) => p.id === id)

export const packagesByType = (type) => packages.filter((p) => p.type === type)

export const featuredPackages = packages.filter((p) => p.featured)