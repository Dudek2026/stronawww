// Wszystkie ceny są cenami "od" — punkt startowy.
// Finalna wycena zależy od stanu auta, jego rozmiaru i zakresu prac.

export type PriceRow = { label: string; price: string };

export type PriceGroup = {
  id: string;
  number: string;
  title: string;
  description?: string;
  rows: PriceRow[];
};

export type PriceMatrix = {
  id: string;
  number: string;
  title: string;
  description?: string;
  carSizes: string[];
  tiers: {
    label: string;
    sublabel?: string;
    prices: string[];
  }[];
};

// Pakiet podstawowy + usługi punktowe
export const priceGroups: PriceGroup[] = [
  {
    id: "podstawowy",
    number: "01",
    title: "Pakiet podstawowy",
    description:
      "Mycie detailingowe zewnątrz i wewnątrz: oprysk wstępny TFR, oprysk na owady, mycie metodą dwóch wiader, mycie felg, opon i nadkoli, odkurzenie i czyszczenie wnętrza, mycie szyb zewnątrz i wewnątrz, dressing na opony i plastiki zewnętrzne, wosk.",
    rows: [{ label: "Cały pakiet", price: "od 250 zł" }],
  },
  {
    id: "wnetrze",
    number: "02",
    title: "Wnętrze pojazdu",
    rows: [
      { label: "Czyszczenie i impregnacja skór", price: "od 300 zł" },
      { label: "Pranie tapicerki materiałowej", price: "od 300 zł" },
      { label: "Czyszczenie pasów bezpieczeństwa", price: "od 50 zł / szt." },
    ],
  },
  {
    id: "felgi-zabezpieczenia",
    number: "03",
    title: "Felgi i zabezpieczenia",
    rows: [
      { label: "Czyszczenie i zabezpieczenie felg (komplet)", price: "od 250 zł" },
      { label: "Zabezpieczenie szyb (niewidzialna wycieraczka)", price: "od 150 zł" },
      { label: "Zabezpieczenie karoserii woskiem", price: "od 150 zł" },
    ],
  },
];

// Macierze cenowe — auto małe / średnie / duże
const carSizes = [
  "Auto małe (HATCHBACK)",
  "Auto średnie (SEDAN, KOMBI)",
  "Auto duże (SUV)",
];

export const priceMatrices: PriceMatrix[] = [
  {
    id: "korekta-lakieru",
    number: "04",
    title: "Korekta lakieru",
    description:
      "W cenie: mycie karoserii, dekontaminacja, detronizacja lakieru oraz polerowanie.",
    carSizes,
    tiers: [
      {
        label: "One step",
        sublabel: "1 etap",
        prices: ["od 700 zł", "od 800 zł", "od 900 zł"],
      },
      {
        label: "Korekta 2-etapowa",
        prices: ["od 1 200 zł", "od 1 300 zł", "od 1 400 zł"],
      },
      {
        label: "Korekta 3-etapowa",
        prices: ["od 1 700 zł", "od 1 800 zł", "od 1 900 zł"],
      },
    ],
  },
  {
    id: "powloki-ceramiczne",
    number: "05",
    title: "Powłoki ceramiczne",
    description:
      "W cenie: mycie karoserii, dekontaminacja, detronizacja lakieru oraz korekta ONE STEP. Korekta wieloetapowa — cena wyższa, indywidualna wycena.",
    carSizes,
    tiers: [
      {
        label: "Powłoka 1-roczna",
        prices: ["od 1 300 zł", "od 1 500 zł", "od 1 700 zł"],
      },
      {
        label: "Powłoka 3-letnia",
        prices: ["od 1 900 zł", "od 2 100 zł", "od 2 300 zł"],
      },
      {
        label: "Powłoka 5-letnia",
        prices: ["od 2 500 zł", "od 2 700 zł", "od 2 900 zł"],
      },
    ],
  },
];

export const doorToDoor = {
  title: "Door to Door",
  tagline: "Twój czas jest cenny — my to rozumiemy.",
  promiseShort: "Nie masz czasu? Załatwimy to za Ciebie.",
  promiseLong:
    "Odbieramy auto z Twojego adresu, wykonujemy pełny detailing w studiu, a następnie odwozimy je gotowe pod wskazany adres. Zero dojazdu, zero przerw w Twoim dniu.",
  range: "Do 20 km",
  surcharge: "+ 50 zł",
  rangeNote: "Poza promieniem 20 km — wycena indywidualna.",
  steps: [
    {
      number: "01",
      title: "Odbieramy",
      body: "Zjawiamy się pod wskazanym adresem o ustalonej godzinie. Przejmujemy auto z pełną dokumentacją stanu.",
    },
    {
      number: "02",
      title: "Myjemy i detailingujemy",
      body: "W zamkniętym studio wykonujemy umówiony zakres prac — od mycia po powłoki ceramiczne.",
    },
    {
      number: "03",
      title: "Odwozimy",
      body: "Odstawiamy auto pod ten sam (lub inny ustalony) adres w uzgodnionym terminie. Gotowe.",
    },
  ],
  benefits: [
    { label: "Oszczędzasz czas", body: "Bez dojazdów, bez kolejek, bez oczekiwania w studiu." },
    { label: "Bezpiecznie i profesjonalnie", body: "Wykwalifikowany kierowca, ubezpieczone przewozy." },
    { label: "Wygodnie i komfortowo", body: "Auto wraca dokładnie tam, gdzie chcesz." },
  ],
};

export const pricingNote =
  "Wszystkie ceny są cenami startowymi (od). Finalna wycena zależy od stanu pojazdu, jego rozmiaru, zakresu prac oraz wybranych dodatków. Zapraszamy na bezpłatną konsultację i wycenę indywidualną.";
