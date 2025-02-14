document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded and script is running!");

  const newQuoteBtn = document.getElementById("newQuoteBtn");
  console.log("🔍 Button found:", newQuoteBtn);

  if (!newQuoteBtn) {
    console.error("❌ ERROR: Button with ID 'newQuoteBtn' not found!");
    return;
  }

  newQuoteBtn.addEventListener("click", () => {
    console.log("🎯 Button clicked! Fetching new quote...");
    fetchQuote();
  });

  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const sportElement = document.getElementById("sport");
  const teamElement = document.getElementById("team");

  const fetchQuote = async () => {
    console.log("🌍 Fetching quote from API...");

    try {
      const response = await fetch("http://localhost:3000/quote");

      console.log("📡 API Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Fetched quote data:", data);

      if (quoteElement) quoteElement.textContent = `"${data.quote}"`;
      if (authorElement)
        authorElement.innerHTML = `- ${data.author}, <span class="grey-text">${
          data.team || "Unknown Team"
        }</span>`;
    } catch (error) {
      console.error("❌ ERROR fetching quote:", error);
    }
  };

  fetchQuote();
});
