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

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector(' nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});