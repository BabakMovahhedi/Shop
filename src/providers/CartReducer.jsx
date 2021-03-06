

const CartReducer=(state,action)=>{
switch(action.type){

    case 'ADD_TO_CART':
                {
                    const updatCart=[...state.Cart];
                        const updateItemIndex=updatCart.findIndex
                        ((item)=>item.id===action.payload.id);
                        if (updateItemIndex < 0){
                            updatCart.push({...action.payload,quantity:1})
                        }else{
                            const updatedItem={...updatCart[updateItemIndex]};
                            updatedItem.quantity++;
                            updatCart[updateItemIndex]=updatedItem;
                        }

                    return {...state,Cart:updatCart,total:state.total+ action.payload.offPrice};
                }

    case 'REMOVE_TO_CART': 
                    {
                        const updatCart=[...state.Cart];
                        const updateItemIndex=updatCart.findIndex
                        ((item)=>item.id===action.payload.id);
                        const updatedItem={...updatCart[updateItemIndex]};
                        if(updatedItem.quantity===1){
                                const filterCart= updatCart.filter((item)=>item.id !==action.payload.id ) 
                                return {...state,Cart:filterCart,total:state.total- action.payload.offPrice};                   
                        }else{
                            updatedItem.quantity--;
                            updatCart[updateItemIndex]=updatedItem;
                            return {...state,Cart:updatCart,total:state.total- action.payload.offPrice};
                        }
                    }
                        

        default: 
        return state;
}
};

export default CartReducer;