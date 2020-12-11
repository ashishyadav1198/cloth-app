export const addItemToCart = (existingItems, item) => {
    let duplicateItem = existingItems.find( itemObj => itemObj.id === item.id)

    if (duplicateItem) {
        return existingItems.map( itemObj => {
            if (itemObj.id === duplicateItem.id) {
                return {...itemObj,quantity: itemObj.quantity + 1}
            } 
            return itemObj
        })
    }

    return [...existingItems, {...item, quantity: 1}]
}