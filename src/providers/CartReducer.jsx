const CartReducer=(state,action)=>{
switch(action.type){
    case 'ADD_TO_CART':
    const updatCart=[...state.Cart];
    const updateItemIndex=updatCart.findIndex((item)=>item.id===action.payload.id);
    if (updateItemIndex < 0){
        updatCart.push({...action.payload,quantity:1})
    }else{
        const updatedItem={...updatCart[updateItemIndex]};
        updatedItem.quantity++;
        updatCart[updateItemIndex]=updatedItem;
    }

        return {...state,Cart:updatCart};
        default: 
        return state;
}
}

export default CartReducer;