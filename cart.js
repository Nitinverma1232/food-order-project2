let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");

const totalPrice = document.getElementById("total-price");

displayCart();

function displayCart(){

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<img src="${item.image}">

<div class="cart-info">

<h3>${item.name}</h3>

<h2>₹${item.price}</h2>

</div>

<button class="remove-btn" onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

totalPrice.innerText=total;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}
function placeOrder(){

if(cart.length==0){

alert("Cart is Empty");

return;

}

alert("Order Placed Successfully 🎉");

cart=[];

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}