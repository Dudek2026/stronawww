export type ServiceCategory = "lakier" | "wnetrze" | "ochrona" | "dodatkowe";

export type Service = {
  id: string;
  number: string;
  title: string;
  category: ServiceCategory;
  short: string;
  long: string;
  comingSoon?: boolean;
};

export const categories: { id: ServiceCategory; label: string; description: string }[] = [
  {
    id: "lakier",
    label: "Lakier",
    description: "Korekta, ochrona i pielęgnacja powłoki lakierniczej.",
  },
  {
    id: "wnetrze",
    label: "Wnętrze",
    description: "Pełna detalizacja kabiny — od tapicerki po skóry.",
  },
  {
    id: "ochrona",
    label: "Ochrona",
    description: "Bariery, które chronią auto na lata.",
  },
  {
    id: "dodatkowe",
    label: "Dodatkowe",
    description: "Usługi uzupełniające pełen detailing.",
  },
];

export const services: Service[] = [
  {
    id: "polerowanie",
    number: "01",
    title: "Polerowanie lakieru",
    category: "lakier",
    short: "Mechaniczna korekta lakieru — usuwanie rys i hologramów.",
    long:
      "Wieloetapowa korekta lakieru przy użyciu maszyn polerskich i past dobranych do twardości powłoki. Przywracamy głębię koloru, eliminujemy hologramy i mikrorysy.",
  },
  {
    id: "powloka-ceramiczna",
    number: "02",
    title: "Powłoka ceramiczna",
    category: "lakier",
    short: "Długotrwała ochrona ceramiczna z efektem hydrofobowym.",
    long:
      "Profesjonalna aplikacja powłok ceramicznych — ochrona przed UV, zabrudzeniami chemicznymi i zaciekami. Mocny efekt hydrofobowy, połysk i odporność na detergenty.",
  },
  {
    id: "glinkowanie",
    number: "03",
    title: "Glinkowanie lakieru",
    category: "lakier",
    short: "Dekontaminacja lakieru przed korektą.",
    long:
      "Mechaniczne usuwanie wtopionych zanieczyszczeń niewidocznych dla oka. Etap przygotowawczy przed polerowaniem lub aplikacją powłok.",
  },
  {
    id: "woskowanie",
    number: "04",
    title: "Woskowanie ręczne",
    category: "lakier",
    short: "Klasyczna ochrona z naturalnym, ciepłym połyskiem.",
    long:
      "Ręczna aplikacja wosku premium. Krótszy okres ochrony niż ceramika, ale charakterystyczny, głęboki refleks pożądany przez purystów.",
  },
  {
    id: "osady-metaliczne",
    number: "05",
    title: "Usuwanie osadów metalicznych",
    category: "lakier",
    short: "Smoła, nalot drogowy, pył z klocków hamulcowych.",
    long:
      "Chemiczne i ręczne usuwanie zanieczyszczeń metalicznych, smoły asfaltowej i pyłu z klocków hamulcowych z lakieru i felg.",
  },
  {
    id: "detailing-wnetrza",
    number: "06",
    title: "Detailing wnętrza",
    category: "wnetrze",
    short: "Kompleksowe odświeżenie kabiny.",
    long:
      "Wielogodzinny detailing wnętrza — odkurzanie z pęczniejącymi środkami, czyszczenie plastików, szczelin, sufitu, nawiewów i pasów.",
  },
  {
    id: "pranie-tapicerki",
    number: "07",
    title: "Pranie tapicerki",
    category: "wnetrze",
    short: "Ekstrakcyjne pranie tapicerki materiałowej.",
    long:
      "Pranie ekstrakcyjne foteli, podsufitki, dywaników i bagażnika. Usuwanie plam, zapachów i osadów.",
  },
  {
    id: "skora",
    number: "08",
    title: "Czyszczenie i impregnacja skór",
    category: "wnetrze",
    short: "Renowacja, czyszczenie i ochrona skóry.",
    long:
      "Delikatne czyszczenie skóry z osadów i potu, kondycjonowanie i impregnacja zachowująca elastyczność oraz naturalny zapach materiału.",
  },
  {
    id: "ozonowanie",
    number: "09",
    title: "Ozonowanie wnętrza",
    category: "wnetrze",
    short: "Neutralizacja zapachów i bakterii.",
    long:
      "Ozonowanie usuwa zapachy papierosów, zwierząt, pleśni i bakterie — w tym z układu klimatyzacji.",
  },
  {
    id: "folia",
    number: "10",
    title: "Zabezpieczenie folią",
    category: "ochrona",
    short: "Bezbarwna folia ochronna na elementy lakieru.",
    long:
      "Aplikacja folii ochronnej PPF na newralgiczne strefy lakieru — zderzaki, progi, lusterka, krawędzie maski.",
  },
  {
    id: "szyby",
    number: "11",
    title: "Zabezpieczenie szyb",
    category: "ochrona",
    short: "Powłoka hydrofobowa na szyby — wycena indywidualna.",
    long:
      "Aplikacja powłoki hydrofobowej na szyby zewnętrzne. Skutecznie odprowadza wodę, poprawia widoczność w deszczu, redukuje osady.",
  },
  {
    id: "mycie-detailingowe",
    number: "12",
    title: "Mycie detailingowe ręczne",
    category: "dodatkowe",
    short: "Bezpieczne mycie metodą dwóch wiader.",
    long:
      "Ręczne mycie z wykorzystaniem techniki dwóch wiader, dedykowanych szamponów i mikrofibr — bez ryzyka zarysowań.",
  },
  {
    id: "reflektory",
    number: "13",
    title: "Renowacja reflektorów",
    category: "dodatkowe",
    short: "Polerowanie i zabezpieczenie matowych reflektorów.",
    long:
      "Wieloetapowe szlifowanie i polerowanie reflektorów + zabezpieczenie powłoką UV. Odzyskana przejrzystość i bezpieczeństwo jazdy.",
  },
  {
    id: "komora-silnika",
    number: "14",
    title: "Mycie komory silnika",
    category: "dodatkowe",
    short: "Bezpieczne czyszczenie komory.",
    long:
      "Detalowane mycie komory silnika z odpowiednim zabezpieczeniem elementów elektrycznych i wykończeniem dressingiem.",
  },
  {
    id: "ppf",
    number: "15",
    title: "Folia PPF",
    category: "ochrona",
    short: "Pełna ochrona lakieru folią PPF.",
    long:
      "Folia samoregenerująca chroniąca lakier przed odpryskami, mikrorysami i degradacją UV. Usługa dostępna wkrótce.",
    comingSoon: true,
  },
];
