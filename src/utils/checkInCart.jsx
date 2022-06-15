
export function checkInCart(Cart,product) {
return Cart.find((c)=> c.id === product.id);
};