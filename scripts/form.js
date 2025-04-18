
    const lastModified = document.querySelector("#lastModified");
    const year = document.querySelector("#currentyear");
    const form = document.querySelector("form");
    const selectProduct = document.querySelector("#product");
    let objProductOption, intReviewCount = 0;
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


window.addEventListener("load", () => {
    products.forEach(productitem => {
        objProductOption = document.createElement("option");
        objProductOption.innerText = productitem.name;
        objProductOption.setAttribute("value", productitem.id);
        selectProduct.append(objProductOption);
    });
    
    form.addEventListener("submit", function (event) {
        
        if (localStorage.getItem("ReviewCount")) {
            intReviewCount = parseInt(localStorage.getItem("ReviewCount"));
        }
        {
            intReviewCount++;
            
       }
        
        localStorage.setItem("ReviewCount", intReviewCount );
    });
         
});