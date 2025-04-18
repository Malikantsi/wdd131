const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");
const today = new Date();

lastModified.innerHTML = `Last Modified: ${new Intl.DateTimeFormat(
    "en-UK",
    {
        dateStyle: "full"
    }
).format(today)}`;

year.innerHTML = today.getFullYear();

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];  
const BakeryProducts = [
    {
        name: "Birthday Cake",
        image: "images/birthday-cake.webp",
        price: "R 350.00"
    },
    {
        name: "cupcakes",
        image: "images/cupcake.webp",
        price: "R 400.00/12"
    },
    {
        name: "Small Desserts",
        image: "images/small-desserts.webp",
        price: "R 500.00/25"
    },
    {
        name: "Pies",
        image: "images/pies.webp",
        price: "R 100.00"
    },
    {
        name: "6 Donuts",
        image: "images/donuts.webp",
        price: "R 100.00"
    },
    {
        name: "Pipping-tips",
        image: "images/pipping-tips.webp",
        price: "R 400.00"
    },
    {
        name: "Starter pack",
        image: "images/baking-tools.webp",
        price: "R 200.00"
    },
    {
        name: "Wedding cake",
        image: "images/wedding-cake.webp",
        price: "R 1000.00"
    },
    {
        name: "vintage cake",
        image: "images/vintage-cake.webp",
        price: "R 500.00"
    },
    {
        name: "Celebration cake",
        image: "images/custom-cake.webp",
        price: "R 1000.00"
    },
    {
        name: "cookies",
        image: "images/cookies.webp",
        price: "R 1000.00"
    },
    {
        name: "6 scones",
        image: "images/scones.webp",
        price: "R 100.00"
    }
];


window.addEventListener("load", () => {
    alert("Welcome to the Bakery Page!");
    const productContainer = document.querySelector(".product-grid");
    BakeryProducts.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productName = document.createElement("h3");
        productName.textContent = product.name;
        productCard.appendChild(productName);

        const productImage = document.createElement("img");
        productImage.src = `images/${product.id}.webp`;
        productImage.alt = `${product.name} image`;
        productCard.appendChild(productImage);

        const rating = document.createElement("p");
        rating.textContent = `Average Rating: ${product.averagerating}`;
        productCard.appendChild(rating);

        productContainer.appendChild(productCard);
    });
}