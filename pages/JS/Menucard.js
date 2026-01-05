const menuCard = [
    {
        id: 1,
        name: "Chicken Thali",
        price: "300",
        type: "non-veg"
    },
    {
        id: 2,
        name: "Mutton Thali",
        price: "500",
        type: "non-veg"
    },
    {
        id: 3,
        name: "Veg Thali",
        price: "200",
        type: "veg"
    },
    {
        id: 4,
        name: "Paneer Butter Masala",
        price: "250",
        type: "veg"
    },
    {
        id: 5,
        name: "Fried Rice",
        price: "150",
        type: "veg"
    },
    {
        id: 6,
        name: "Chicken Biryani",
        price: "350",
        type: "non-veg"
    },
    {
        id: 7,
        name: "Dal Makhani",
        price: "180",   
        type: "veg" 
    },
     {
        id: 8,
        name: "Veg-hundi",
        price: "400",   
        type: "veg" 
    },
     {
        id: 9,
        name: "Chicken-chilly",
        price: "200",   
        type: "non-veg" 
    },
    {
        id: 10,
        name: "Chicken-chilly",
        price: "200",   
        type: "non-veg" 
    }
];

function displayMenuCard() {
    menuCard.forEach((item) => {
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
        
        document.body.appendChild(cardDiv);
    });
}

displayMenuCard();