const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");
const divOutterContainer = document.querySelector(".product-grid");
const txtSearchText = document.querySelector("#txtSearch");
const btnSearch = document.querySelector("#btnSearch");
const selSort = document.querySelector("#selSort");
const today = new Date();
let divProductContainer, objProductImgContainer, objProductImg, objProductH3Name, objProductDesc, objProductPriceobjProductOrder, objProductPrice, objProductOrderBtn;
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
        image: "images/product1.webp",
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
        image: "images/pipping-tips.avif",
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


lastModified.innerHTML = `Last Modified: ${new Intl.DateTimeFormat(
    "en-UK",
    {
        dateStyle: "full"
    }
).format(today)}`;

year.innerHTML = today.getFullYear();


window.addEventListener("load", () => {
    loadAllProducts();
    btnSearch.addEventListener("click", () => { 
       searchProductByName(txtSearchText.value);
    });
    selSort.addEventListener("change", () => {
       sortProducts();
    });
   
});

function sortProducts() {
    divOutterContainer.innerHTML = ""; 
    const strSelectedValue = selSort.value;
    if (strSelectedValue === "Asc") {
        BakeryProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (strSelectedValue === "Desc") { 
        BakeryProducts.sort((b, a) => a.name.localeCompare(b.name));
    }
    loadAllProducts(); 
 }
   

function searchProductByName(strSearch) {
    divOutterContainer.innerHTML = ""; 
    if (strSearch == "") {
        loadAllProducts();
        return;
    }
    strSearch = strSearch.toLowerCase();
    const objFilteredArray = BakeryProducts.filter(product =>
        product.name.toLowerCase().includes(strSearch)
    );
     
    objFilteredArray.forEach(productitem => {
        divProductContainer = document.createElement("div");
        divProductContainer.classList.add("product");

        objProductImgContainer = document.createElement("div");
        objProductImgContainer.classList.add("product-img");

        objProductImg = document.createElement("img");
        objProductImg.classList.add("product-img");
        objProductImg.setAttribute("src", productitem.image);
        objProductImg.setAttribute("alt", productitem.name);
        objProductImg.setAttribute("loading", "lazy");
        objProductImgContainer.append(objProductImg);

        objProductH3Name = document.createElement("h3");
        objProductH3Name.innerText = productitem.name;

        objProductDesc = document.createElement("p");
        objProductDesc.innerText = productitem.name;

        objProductOrder = document.createElement("div");
        objProductOrder.classList.add("price-order");

        objProductPrice = document.createElement("span");
        objProductPrice.classList.add("price");
        objProductPrice.innerText = productitem.price;

        objProductOrderBtn = document.createElement("button");
        objProductOrderBtn.classList.add("btn-order");
        objProductOrderBtn.innerText = "ORDER";
        objProductOrder.append(objProductPrice, objProductOrderBtn);
        divProductContainer.append(objProductImgContainer, objProductH3Name, objProductDesc, objProductOrder);

        divOutterContainer.append(divProductContainer);
    });
   
  }

function loadAllProducts() { 
    
    BakeryProducts.forEach(productitem => {
        divProductContainer = document.createElement("div");
        divProductContainer.classList.add("product");

        objProductImgContainer = document.createElement("div");
        objProductImgContainer.classList.add("product-img");

        objProductImg = document.createElement("img");
        objProductImg.setAttribute("src", productitem.image);
        objProductImg.setAttribute("alt", productitem.name);
        objProductImg.setAttribute("loading", "lazy");
        objProductImgContainer.append(objProductImg);

        objProductH3Name = document.createElement("h3");
        objProductH3Name.innerText = productitem.name;

        objProductDesc = document.createElement("p");
        objProductDesc.innerText = productitem.name;

        objProductOrder = document.createElement("div");
        objProductOrder.classList.add("price-order");

        objProductPrice = document.createElement("span");
        objProductPrice.classList.add("price");
        objProductPrice.innerText = productitem.price;

        objProductOrderBtn = document.createElement("button");
        objProductOrderBtn.classList.add("btn-order");
        objProductOrderBtn.innerText = "ORDER";
        objProductOrder.append(objProductPrice, objProductOrderBtn);
        divProductContainer.append(objProductImgContainer, objProductH3Name, objProductDesc, objProductOrder);

        divOutterContainer.append(divProductContainer);
    });
}