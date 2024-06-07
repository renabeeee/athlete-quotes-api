document.addEventListener("DOMContentLoaded", () => {
  const newQuoteBtn = document.getElementById("newQuoteBtn");
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const sportElement = document.getElementById("sport");
  const teamElement = document.getElementById("team");

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://localhost:3000/quote");
      const data = await response.json();

      quoteElement.textContent = data.quote;
      authorElement.innerHTML = `- ${data.author}, <span class="grey-text">${data.team}</span>`;
      teamElement.textContent;
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  newQuoteBtn.addEventListener("click", fetchQuote);

  fetchQuote();
});
