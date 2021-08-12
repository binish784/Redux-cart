const defaultState = {
    total:0,
    items:[]
}

const addToCart = (state,item)=>{
    let itemID = state.items.length;
    item = {...item,...{id:itemID}};

    let newTotal = state.total + item.price;
    let newItems = [...state.items,item];  
    let newState = {...state,...{total:newTotal,items:newItems}}

    return newState;
}

const removeFromCart = (state,itemId)=>{

    let targetItem = state.items.filter((item)=>item.id===itemId);
    targetItem = targetItem[0];

    let items = state.items.filter((item)=>itemId!=item.id);
    let total = state.total - targetItem.price;
    return {...state,...{items,total}};
}

const cartReducer = (state = defaultState,action) =>{
    switch(action.type){
        case "ADD_ITEM":   
            return addToCart(state,action.item);
        case "REMOVE_ITEM":
            return removeFromCart(state,action.itemId);
        default:
            return state;        
    }
}

export default cartReducer;