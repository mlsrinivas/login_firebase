const InitialState = {
    cart:[]
}

export default function cartReducer (state=InitialState, action) {
    switch(action.type){
        case 'ADD_PRODUCT': 
            return {...state, cart: [...state.cart, ...action.payload]}
        case 'DELETE_ITEM': 
            return {...state, cart: state.cart.filter(i => i.id != action.payload)}
        default: 
            return state;
    }
}