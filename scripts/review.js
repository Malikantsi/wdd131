const objHeader = document.querySelector("#ReviewCount");
window.addEventListener("load", () => {

    console.log(localStorage);
    objHeader.innerHTML = `Review Count:${parseInt(localStorage.getItem("ReviewCount"))}`;
 
});