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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Lima Peru Los Olivos ",
        location: "San Martin de Porres Lima Peru",
        dedicated: "2024, January, 14",
        area: 47413,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524-main.jpg"
    },
    {
        
        templeName: "Modesto, California",
        location: "Modesto, California United States",
        dedicated: " 2023, October,7",
        area: 30000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/modesto-california-temple/modesto-california-temple-32830.jpg"
    
        
    },

    {

        templeName: "Tampa Florida Temple",
        location: "Tampa Florida United States",
        dedicated: " 2022, April,3",
        area: 29000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tampa-florida-temple/tampa-florida-temple-34775-main.jpg"


    },

     {

        templeName: "Parktown Johannesburg",
         location: "Parktown Johannesburg South Africa",
         dedicated: "1985, August, 10",
         area: 5765,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22477.jpg"


    }
    
];

createTempleCard(temples);

function createTempleCard(filteredTemple) {
    document.querySelector(".container").innerHTML = "";
    filteredTemple.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class ="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class ="label">Dedication: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class ="label">Area: </span> ${temple.area} sq ft`;
        img.setAttribute ( "src", temple.imageUrl );
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);

        


    })
}

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filterType = e.currentTarget.getAttribute('href').substring(1);
        let filteredTemples;

        if (filterType === 'old') {
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0].trim());
                return year < 1900;
            });
        } else if (filterType === 'new') {
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0].trim());
                return year > 2000;
            });
        } else if (filterType === 'large') {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        } else if (filterType === 'small') {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        } else {
            // Default: Show all temples (for "home" or unknown filters)
            filteredTemples = temples;
        }

        createTempleCard(filteredTemples);
    });
});