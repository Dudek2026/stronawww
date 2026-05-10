export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  aspect: "square" | "portrait" | "landscape" | "tall";
  category: "auto" | "studio" | "detail" | "wynik";
};

export const heroImage = {
  src: "/images/IMG_6798a.jpg",
  alt: "Porsche Cayenne w studiu DUDEK Car Studio po detailingu",
};

export const studioImages = [
  {
    src: "/images/02.jpg",
    alt: "Dodge Charger w studiu detailingowym z heksagonalnym oświetleniem LED",
  },
  {
    src: "/images/10.jpg",
    alt: "Mercedes GLA 200 w studiu DUDEK Car Studio",
  },
  {
    src: "/images/03.jpg",
    alt: "BMW serii 5 z boku — wnętrze studia detailingowego",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g-01",
    src: "/images/02.jpg",
    alt: "Czarny Dodge Charger po polerce — refleks heksagonalnego LED na lakierze",
    aspect: "portrait",
    category: "auto",
  },
  {
    id: "g-02",
    src: "/images/01.jpg",
    alt: "Detal alufelgi po pełnej dekontaminacji",
    aspect: "portrait",
    category: "detail",
  },
  {
    id: "g-03",
    src: "/images/10.jpg",
    alt: "Mercedes GLA 200 w studiu — finalna sesja po detailingu",
    aspect: "portrait",
    category: "auto",
  },
  {
    id: "g-04",
    src: "/images/IMG_7254.JPEG",
    alt: "Felga BMW przed i po renowacji",
    aspect: "tall",
    category: "wynik",
  },
  {
    id: "g-05",
    src: "/images/03.jpg",
    alt: "BMW serii 5 w studiu po pełnym detailingu",
    aspect: "portrait",
    category: "auto",
  },
  {
    id: "g-06",
    src: "/images/IMG_7259.JPEG",
    alt: "Element wnętrza — efekt po czyszczeniu i kondycjonowaniu",
    aspect: "tall",
    category: "wynik",
  },
  {
    id: "g-07",
    src: "/images/05.jpg",
    alt: "Skuter wodny Sea-Doo Spark — przed i po renowacji",
    aspect: "tall",
    category: "wynik",
  },
  {
    id: "g-08",
    src: "/images/04.jpg",
    alt: "Detal lakieru — efekt powłoki ceramicznej",
    aspect: "portrait",
    category: "detail",
  },
  {
    id: "g-09",
    src: "/images/IMG_6798a.jpg",
    alt: "Porsche Cayenne — refleks oświetlenia studyjnego na lakierze",
    aspect: "landscape",
    category: "auto",
  },
  {
    id: "g-10",
    src: "/images/06.jpg",
    alt: "Praca detailingowa — dbałość o detal",
    aspect: "portrait",
    category: "detail",
  },
  {
    id: "g-11",
    src: "/images/13.jpg",
    alt: "Auto klienta DUDEK Car Studio",
    aspect: "portrait",
    category: "auto",
  },
  {
    id: "g-12",
    src: "/images/07.jpg",
    alt: "Studio DUDEK Car Studio — efekt finalny detailingu",
    aspect: "portrait",
    category: "auto",
  },
];

export const pillars = [
  "Indywidualne podejście do każdego auta",
  "Profesjonalne kosmetyki i sprzęt",
  "Dokładność i dbałość o detale",
  "Jakość na najwyższym poziomie",
];
