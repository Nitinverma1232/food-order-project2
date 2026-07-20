
let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();


const foodCards = document.querySelectorAll(".food-card");

foodCards.forEach(card => {

    const button = card.querySelector("button");

    button.addEventListener("click", () => {

        const name = card.querySelector("h3").innerText;

        const price = parseInt(
            card.querySelector("p").innerText.replace("₹","")
        );

        const image = card.querySelector("img").src;

        const food = {
            name,
            price,
            image
        };

        cart.push(food);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert(name + " Added To Cart ✅");

    });

});



function updateCartCount(){

    document.getElementById("cart-count").innerText = cart.length;

}

document.getElementById("cart-btn").addEventListener("click", () => {
    window.location.href = "cart.html";
});