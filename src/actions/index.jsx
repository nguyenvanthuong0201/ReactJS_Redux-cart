import *as types from '../constants/ActionTypes'
export const actAddToCart = (product,quantity) =>{
    return{
        type: types.ADD_TO_CARD,
        product,
        quantity,
    }
}
export const actChangeMessage = (message) =>{
    return{
        type: types.CHANGE_MESSAGE,
        message,
    }
}

export const actDeleteProduct =(product)=>{
    return{
        type: types.DELETE_PRODUCT,
        product,
    }
}

export const actDeleteMessage = (message) =>{
    return{
        type: types.CHANGE_MESSAGE,
        message,
    }
}
export const actUpdateCart=(product,quantity)=>{
    return{
        type: types.UPDATE_CART,
        product,
        quantity,
    }
}
export const actUpdateMessage = (message) =>{
    return{
        type: types.CHANGE_MESSAGE,
        message,
    }
}
