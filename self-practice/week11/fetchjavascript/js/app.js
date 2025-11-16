async function fetchQuotes() {
    try {
        const response = await fetch('http://localhost:3000/quotes');
        const quotes = await response.json();
        displayQuotes(quotes);
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}

function displayQuotes(quotes) {
    const quoteList = document.getElementById('quoteList');

    quotes.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
      <p class="quote-content">${quote.content}</p>
      <p class="quote-author">— ${quote.author}</p>

    `;
        quoteList.appendChild(quoteCard);
    });
}

fetchQuotes();