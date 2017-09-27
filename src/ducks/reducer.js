// Redux is needed in order to save and change state for the following components: 
// Cart
// Home Page Products
// Catalog
// login

//Create the initial state. This will determine what will eventually be changed or updated. Our cart will be updated based on what a buyer wants, and our catalog of products will be updated based on what the admin adds. In this case an empty array of products is created for the home page, an empty of array of products is created for the catalog page, and an empty array for products is created for the cart.
const initialState={
    products: [],
    cart: [],
    // catalog: [],
    // login: ''
}

// const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";
// const DISPLAY_CATALOG_PRODUCTS= "DISPLAY_CATALOG_PRODUCTS";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_CART="UPDATE_CART";

//This is the reducer function, which allows you to take in two things: the type? and the payload. The Type is.... and the payload is any info that we will need to update state. 

export default (state = initialState, action) => {
    switch(action.type){
    //     case DISPLAY_PRODUCTS:
    //         return Object.assign({},state, {products: action.payload})
        case ADD_TO_CART: 
            
            return Object.assign({},state, {cart: action.payload})
        // case DISPLAY_CATALOG_PRODUCTS:
        //     return Object.assign({},state, {catalog: action.payload})
        
        case REMOVE_FROM_CART:
            return Object.assign({},state, {cart: action.payload})

        
        case UPDATE_CART:     
            return Object.assign({},state, {cart: action.payload})
        default: return state;
    }
}

//Action Creators
// export function displayProducts(products){
// //Action (the object)   
//     return{
//         type: 'DISPLAY_PRODUCTS',
//         payload: products
//     }
// }

// export function displayCatalogProducts(products){
//     return{
//         type: 'DISPLAY_CATALOG_PRODUCTS',
//         payload: products
//     }
// }

export function addToCart(product){
    return{
        type: 'ADD_TO_CART',
        payload: product,
    }
}


export function removeFromCart(product){
    return{
        type: 'REMOVE_FROM_CART',
        payload: product,
    }
}

export function updateCart(product){
    return{
        type: 'UPDATE_CART',
        payload: product,
    }
}