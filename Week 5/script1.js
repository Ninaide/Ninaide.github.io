let shoppinhCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpark", price: 30 },
];

let total = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  total = total + shoppingCart[i].price;
  // total += shoppingCart [i].price
  console.log("total so far", total);
}
