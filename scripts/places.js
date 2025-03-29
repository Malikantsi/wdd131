const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");
const today = new Date();
const temperature = 20;
const windSpeed = 5;

lastModified.innerHTML = `Last Modified: ${new Intl.DateTimeFormat(
    "en-UK",
    {
        dateStyle: "full"
    }
).format(today)}`;

year.innerHTML = today.getFullYear();



function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function updateWindChill() {
    const windChillElement = document.querySelector('#windChillValue');
    let windChill = 'N/A';

    
    if (temperature <= 10 && windSpeed > 4.8) {
        const calculatedChill = calculateWindChill(temperature, windSpeed);
        windChill = `${calculatedChill.toFixed(1)} °C`;
    }

    windChillElement.textContent = windChill;
    console.log( windChill);
}
document.addEventListener('DOMContentLoaded', updateWindChill);