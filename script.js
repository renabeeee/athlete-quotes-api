document.addEventListener("DOMContentLoaded", () => {
  const newQuoteBtn = document.getElementById("newQuoteBtn");
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://localhost:3000/quote");
      const data = await response.json();

      quoteElement.textContent = data.quote;
      authorElement.textContent = `- ${data.author}`;
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  newQuoteBtn.addEventListener("click", fetchQuote);

  fetchQuote();
});
