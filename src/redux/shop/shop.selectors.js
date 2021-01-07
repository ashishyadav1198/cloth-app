import { createSelector } from 'reselect'

const map = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
}
export const selectShop = state => state.shop
export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)
export const selectCategoryCollections = category => createSelector(
    [selectShopCollections],
    categoryCollections => categoryCollections.find( collection => collection.id === map[category])
)