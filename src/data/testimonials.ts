export type Testimonial = {
  id: string;
  author: string;
  rating: 5;
  age: string;
  body: string;
};

// Tylko opinie 5★ z Google. Negatywna opinia 1★ pominięta zgodnie z instrukcją.
// Wykorzystujemy te z merytoryczną treścią — krótkie "polecam" pomijamy.
export const testimonials: Testimonial[] = [
  {
    id: "malutki420",
    author: "Malutki420",
    rating: 5,
    age: "2 tygodnie temu",
    body:
      "Jeśli ktoś się zastanawia — nie ma nad czym. Warto każdej złotówki. Pełen profesjonalizm na każdym etapie: od kontaktu, przez doradztwo, aż po realizację. Widać ogromną dbałość o detale i doświadczenie. Na pewno wrócę i będę polecać dalej!",
  },
  {
    id: "thenelson",
    author: "The Nelson",
    rating: 5,
    age: "2 tygodnie temu",
    body:
      "Auto odebrane i szczerze mówiąc — wygląda lepiej niż w dniu, w którym wyjechało z salonu. Niesamowita robota, lakier odzyskał głębię, a każdy detal dopracowany.",
  },
  {
    id: "ziolkowski",
    author: "Tomasz Ziółkowski",
    rating: 5,
    age: "miesiąc temu",
    body:
      "Pełna profeska. Auto wygląda jak nowe, wszystko zrobione bardzo dokładnie i z dbałością o szczegóły. Mega podejście do klienta i szybka realizacja. Zdecydowanie polecam każdemu, kto chce zadbać o swoje auto.",
  },
  {
    id: "ciesielski",
    author: "Łukasz Ciesielski",
    rating: 5,
    age: "miesiąc temu",
    body:
      "Super studio, przyjeżdżają, zabierają samochód i wraca jak z fabryki. Środek czysty i odświeżony, a powłoki na lakier robią robotę. Polecam każdemu.",
  },
  {
    id: "palusinski",
    author: "Jacek Palusiński",
    rating: 5,
    age: "miesiąc temu",
    body:
      "Świetna robota, zespół w pełni profesjonalny, z bardzo dobrym podejściem do klienta. Wszystkie usługi wykonywane z dokładnością i pełną starannością.",
  },
  {
    id: "mistrzu",
    author: "Mistrzu",
    rating: 5,
    age: "miesiąc temu",
    body:
      "Miałem przyjemność odwiedzić DUDEK Car Studio podczas otwarcia i muszę powiedzieć, że to miejsce robi niesamowite wrażenie. Już od progu czuć pasję do detailingu.",
  },
  {
    id: "rzepka",
    author: "Oliwier Rzepka",
    rating: 5,
    age: "miesiąc temu",
    body:
      "Świetna robota. Auto po czyszczeniu wnętrza i polerce wygląda jak z salonu.",
  },
  {
    id: "zarywny",
    author: "Mateusz Zarywny",
    rating: 5,
    age: "miesiąc temu",
    body:
      "Jestem bardzo zadowolony. Pięknie umyty samochód oraz wnętrze. Zasłużone 5 gwiazdek. Polecam.",
  },
  {
    id: "konecka",
    author: "Maria Konecka",
    rating: 5,
    age: "miesiąc temu",
    body: "Pięknie umyte auto, gorąco polecam.",
  },
  {
    id: "wiktor",
    author: "Wiktor",
    rating: 5,
    age: "miesiąc temu",
    body:
      "Jestem bardzo zadowolony z wykonanych usług w studiu DUDEK Car Studio. Polecam i na pewno wrócę.",
  },
];
