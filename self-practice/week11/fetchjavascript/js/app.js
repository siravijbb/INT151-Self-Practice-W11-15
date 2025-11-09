async function fetchQuotes() {
    try {
        const response = await fetch('http://localhost:3000/quotes');
        const quotes = await response.json();
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}

// Call on page load
fetchQuotes();