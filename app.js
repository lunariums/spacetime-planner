const quotes = [
  "Kendini bilen, evreni bilir.",
  "Zaman, en büyük öğretmendir.",
  "Küçük adımlar büyük yollar açar.",
  "Düşünmek, insanın gizli gücüdür.",
  "Kainatın sırrı sabırdır."
];

function todayQuote() {
  const day = new Date().getDate();
  return quotes[day % quotes.length];
}
