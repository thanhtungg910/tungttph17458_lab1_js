let cart = [];
if (localStorage.getItem("cart") !== null) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
const addToCart = (newProduct, callback = false) => {
    const existCart = cart.find((item) => item.id === newProduct.id);
    if (existCart) {
        existCart.amount += 1;
    } else {
        cart.push(newProduct);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    if (callback)callback();
};
const increaseItem = (id, callback = false) => {
    cart.find((item) => item.id === id).amount += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    if (callback)callback();
};
export { addToCart, increaseItem };