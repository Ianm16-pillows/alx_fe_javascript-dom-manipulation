let quotes = [
  { text: "Discipline beats motivation.", category: "Mindset" },
  { text: "Code, sleep, repeat.", category: "Tech" },
  { text: "Be so good they can’t ignore you.", category: "Inspiration" }
];

function showRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerText = `"${quotes[random].text}" — ${quotes[random].category}`;
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);

function addQuote() {
  const text = document.getElementById("newQuoteText").value.trim();
  const category = document.getElementById("newQuoteCategory").value.trim();

  if (text && category) {
    quotes.push({ text, category });
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    alert("Quote added!");
  } else {
    alert("Please fill out both fields.");
  }
}
