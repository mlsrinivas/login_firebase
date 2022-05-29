var count= 0

function counterReducer (state = count, action){
    switch(action.type){
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;

        default: return state;
    }
}

export default counterReducer;