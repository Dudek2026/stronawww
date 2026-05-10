export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Kontakt",
    body:
      "Telefon, e-mail lub wiadomość w social media. Zbieramy podstawowe informacje o aucie i oczekiwaniach.",
  },
  {
    number: "02",
    title: "Konsultacja i wycena",
    body:
      "Diagnoza stanu lakieru i wnętrza. Indywidualna rekomendacja zabiegów oraz transparentna wycena.",
  },
  {
    number: "03",
    title: "Realizacja",
    body:
      "Auto trafia do zamkniętego studia. Każdy etap dokumentujemy. Pracujemy bez kompromisów na profesjonalnych kosmetykach.",
  },
  {
    number: "04",
    title: "Odbiór",
    body:
      "Wspólny przegląd efektów, instrukcja pielęgnacji powłok i protokół wykonanych prac.",
  },
];
