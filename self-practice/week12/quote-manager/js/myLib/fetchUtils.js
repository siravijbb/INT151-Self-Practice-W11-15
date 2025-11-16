//fetchUtils.js
//ADD
//POST
async function addItem(url, item) {
    try {
        const res = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
        if (res.status !== 201) throw new Error("Fail to add item")
        const addedItem = res.json()
        return addedItem
    } catch (error) {
        throw new Error(error.message)
    }
}

//quoteManagement.js
//ADD
async function addQuote(item) {
    try {
        const addedQuote = await addItem(quoteURL, item)
        return addedQuote
    } catch (error) {
        alert(`Quote: ${error}`)
    }
}

//DELETE
async function delteitem(url, item) {
    try {
        const res = await fetch(`${url}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
        if (res.status !== 201) throw new Error("Fail to add item")
        const addedItem = res.json()
        return addedItem
    } catch (error) {
        throw new Error(error.message)
    }
}
//PUT
async function editItem(url, item) {
    try {
        const res = await fetch(`${url}/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
        if (res.status !== 200) throw new Error("Fail to edit item")
        const editedItem = res.json()
        return editedItem
    } catch (error) {
        throw new Error(error.message)
    }
}