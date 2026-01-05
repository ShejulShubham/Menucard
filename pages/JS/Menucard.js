const menus = [
    {
        id: 1,
        name: "Chicken Thali",
        price: "300",
        type: "non-veg",
    },
    {
        id: 2,
        name: "Mutton Thali",
        price: "500",
        type: "non-veg",
    },
    {
        id: 3,
        name: "Veg Thali",
        price: "200",
        type: "veg",
    },
    {
        id: 4,
        name: "Paneer Butter Masala",
        price: "250",
        type: "veg",
    },
    {
        id: 5,
        name: "Fried Rice",
        price: "150",
        type: "veg",
    },
    {
        id: 6,
        name: "Chicken Biryani",
        price: "280",
        type: "non-veg",
    },
    {
        id: 7,
        name: "Dal Makhani",
        price: "180",
        type: "veg",
    },
    {
        id: 8,
        name: "Veg-hundi",
        price: "400",
        type: "veg",
    },
    {
        id: 9,
        name: "Chicken-chilly",
        price: "350",
        type: "non-veg",
    },
    {
        id: 10,
        name: "Chicken-khima",
        price: "320",
        type: "non-veg",
    },
];

const menu = document.getElementById("menu-card");
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", searchName);

function createCard(item) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-div");
    let nameH3 = document.createElement("h3");
    nameH3.innerText = item.name;
    let priceP = document.createElement("p");
    priceP.innerText = `Price: ₹${item.price}`;
    let typeP = document.createElement("p");
    typeP.innerText = `Type: ${item.type}`;
    cardDiv.appendChild(nameH3);
    cardDiv.appendChild(priceP);
    cardDiv.appendChild(typeP);
    return cardDiv;
}

function displayMenuCard() {
    menus.forEach((item) => {
        const card = createCard(item);
        menu.appendChild(card);
    });
}

displayMenuCard();

function searchName(e) {
    const input = e.target.value.trim();

    if (!input) {
        displayMenuCard();
        return;
    }

    menu.innerHTML = "";

    const result = menus.filter((item) => {
        if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return item;
        }
    });

    console.log(result);
    result.forEach((item) => {
        const card = createCard(item);
        menu.appendChild(card);
    });
}


let sortAndFilter = document.getElementById("sortAndFilter");
sortAndFilter.addEventListener("change", function (e) {
    let selectedOption = e.target.value;
    let sortedAndFilteredMenu = [...menus];

    console.log(e.target.value);

    if (selectedOption === "sort-asc") {
        sortedAndFilteredMenu.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (selectedOption === "sort-desc") {
        sortedAndFilteredMenu.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (selectedOption === "filter-veg") {
        sortedAndFilteredMenu = sortedAndFilteredMenu.filter(item => item.type === "veg");
    } else if (selectedOption === "filter-nonveg") {
        sortedAndFilteredMenu = sortedAndFilteredMenu.filter(item => item.type === "non-veg");
    }

    // Clear and re-render the menu
    menu.innerHTML = "";
    sortedAndFilteredMenu.forEach((item) => {
        const card = createCard(item);
        menu.appendChild(card);
    });
});
