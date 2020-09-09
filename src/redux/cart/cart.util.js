//imp comments
export const addItemToCart= (cartItems, cartItemToAdd) => {
    const existingCartItem= cartItems.find(cartItem=>
        cartItem.id===cartItemToAdd.id
        ); 
        //existing stores the item if found else it is undefined/null

    if(existingCartItem){
        return cartItems.map(cartItem=>   //auto returns for single line(thing)
            cartItem.id===cartItemToAdd.id?{...cartItem, quantity: cartItem.quantity+1}
            : cartItem
            ) //always return a complete obj not just a property(like quantity) as it will not rerender if only a single property of an obj is changed
    }
    else{
        //cartItemToAdd has dots so that we can add another property of quantity without
        // replacing the cartItemToadd with only quantity, hence given obj form as well.
        // array is used because it will be an array(of objs) that holds all the cart items so
        //we use araywith spread operator so that all the other array items remain the same and
        //an(new) obj({...cartItemToadd, q:1}), is added to the array of objects. 
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
};

export const removeItemFromCart= (cartItems, cartItemToRemove)=> {
    const existingCartItem= cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if(existingCartItem.quantity==1){
        return cartItems.filter(cartItem=>
            cartItem.id !== cartItemToRemove.id //filter on true returns that current item and gives us back the array of true items
            )
    }
    else{
        return cartItems.map(
            cartItem=>
            cartItem.id === cartItemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity-1}
            :
            cartItem
            );
    }
};