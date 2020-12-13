export const addItemToCart = (existingItems, item) => {
  let duplicateItem = existingItems.find((itemObj) => itemObj.id === item.id);

  if (duplicateItem) {
    return existingItems.map((itemObj) => {
      if (itemObj.id === duplicateItem.id) {
        return { ...itemObj, quantity: itemObj.quantity + 1 };
      }
      return itemObj;
    });
  }

  return [...existingItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (existingItems, item) => {
  const updatedCartItems = [];
  for (let cartItem of existingItems) {
    if (cartItem.id === item.id) {
      if (item.quantity > 1) {
        updatedCartItems.push({ ...item, quantity: item.quantity - 1 });
      }
    } else {
      updatedCartItems.push(cartItem);
    }
  }
  return updatedCartItems;
};
