import { createSelector } from 'reselect';
//input selector
const selectCart= state=> state.cart; 

//output selector
export const selectCartItems= createSelector(
    [selectCart],
    (cart)=> cart.cartItems    //this returns cartItems
);
export const selectCartHidden= createSelector(
    [selectCart],
    (cart)=> cart.hidden
);

export const selectCartItemsCount= createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumalatedQuantity, cartItem) =>
    accumalatedQuantity + cartItem.quantity ,
    0
    )
);

export const selectCartTotal= createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce((accumalatedQuantity, cartItem) =>
    accumalatedQuantity + (cartItem.price * cartItem.quantity) ,
    0
    )
);