export const contact = {
  brand: "DUDEK Car Studio",
  tagline: "Twoje Auto. Nasza Pasja.",
  shortDescription:
    "Profesjonalne studio detailingu samochodowego. Korekta lakieru, powłoki ceramiczne, detailing premium.",
  phone: "661 310 206",
  phoneE164: "+48661310206",
  email: "dudekcarstudio@gmail.com",
  address: {
    street: "Gąsiorów 3a",
    city: "Kościelec",
    postal: "62-604",
    region: "wielkopolskie",
    country: "PL",
  },
  geo: {
    // Approximate — Kościelec, Gąsiorów (gmina Kościelec, powiat kolski)
    lat: 52.1875,
    lng: 18.6306,
  },
  hours: [
    { day: "Poniedziałek", value: "08:00 – 17:00", iso: "Mo 08:00-17:00" },
    { day: "Wtorek", value: "08:00 – 17:00", iso: "Tu 08:00-17:00" },
    { day: "Środa", value: "08:00 – 17:00", iso: "We 08:00-17:00" },
    { day: "Czwartek", value: "08:00 – 17:00", iso: "Th 08:00-17:00" },
    { day: "Piątek", value: "08:00 – 17:00", iso: "Fr 08:00-17:00" },
    { day: "Sobota", value: "10:00 – 14:00", iso: "Sa 10:00-14:00" },
    { day: "Niedziela", value: "Zamknięte", iso: "Su closed" },
  ],
  social: {
    facebook:
      "https://www.facebook.com/people/DUDEK-Car-Studio/61578423271809/",
    instagram: "https://www.instagram.com/dudek_car_studio",
    googleProfile:
      "https://www.google.com/maps/search/?api=1&query=DUDEK+Car+Studio+Ko%C5%9Bcielec",
  },
  rating: {
    value: 4.8,
    count: 21,
    source: "Google",
  },
} as const;

export type Contact = typeof contact;
