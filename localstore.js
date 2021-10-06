// Add Data into LocalSore
const AddTodb = id => {
    const store_Cart = getStoredb()
    if (id in store_Cart) {
        store_Cart[id] = store_Cart[id] + 1
    }
    else {
        store_Cart[id] = 1
    }
    //Call the update function and keep data there 
    UpdateLocalDb(store_Cart)
}

// Update the localstore 
    const UpdateLocalDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart))
}

// Remove single data from localstore
    const removeFromDb = id => {
    const storedCart = getStoredb()
    delete storedCart[id]

    // after delete data then update localstore
    UpdateLocalDb(storedCart)
}
//Find the data from localstore(store db and ui)
    const getStoredb = () => {
    const exists = localStorage.getItem('shopping_cart')
    return exists ? JSON.parse(exists) : {}
}

// clear all data after completed order/procedure
    const clearAll = () => localStorage.removeItem('shopping_cart')

export { AddTodb, getStoredb, removeFromDb, clearAll }