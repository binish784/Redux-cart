export const addToCart = (item)=>{
    return (dispatch)=>{
        dispatch({
            type:"ADD_ITEM",
            item,
        })
    }
}

export const removeFromCart = (itemId)=>{
    return (dispatch)=>{
        dispatch({
            type:"REMOVE_ITEM",
            itemId,
        })
    }
}