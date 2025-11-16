//CRUD on quotes
import { getItems, deleteItem, createItem, editItem } from "./myLib/fetchUtils.js"
const quoteURL = `${import.meta.env.VITE_APP_URL}/quotes`

//GET Quotes
async function loadQuotes() {
    try {
        const quotes = await getItems(quoteURL)
        console.log(quotes)
        return quotes
    } catch (error) {
        alert(`Quote: ${error}`)
    }
}

//Create Quote
async function createQuote(newQuote) {
    try {
        return await createItem(quoteURL, newQuote)
    } catch (error) {
        alert(`Create Quote Error: ${error}`)
    }
}

//Edit Quote
async function editQuote(quoteId, editedQuote) {
    try {
        return await editItem(quoteURL, quoteId, editedQuote)
    } catch (error) {
        alert(`Edit Quote Error: ${error}`)
    }
}

//Delete Quote
async function deleteQuote(id) {
    try {
        return await deleteItem(quoteURL, id)
    } catch (error) {
        alert(`Quote: ${error}`)
    }
}

export { loadQuotes, createQuote, editQuote, deleteQuote }