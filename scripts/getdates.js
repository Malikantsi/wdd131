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