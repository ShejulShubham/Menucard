const hero = document.getElementById("hero");
const api = "https://free-food-menus-api-two.vercel.app";
const fetchBtn = document.getElementById("fetch");
const loadingElement = document.getElementById("loading");

fetchBtn.addEventListener("click", getData);

async function getData() {
  loadingElement.classList.remove("hidden");
  try {
    setTimeout(async () => {
      const result = await fetch(`${api}/all`);

      const GroupedItems = await result.json();

      for (array in GroupedItems) {
        const header = document.createElement("h2");
        header.innerText = `Type: ${array}`;
        hero.appendChild(header);
        renderItems(GroupedItems[array], 10);
      }
      loadingElement.classList.remove("hidden");
    }, 2000);
  } catch (error) {
    console.error("Error: ", error.message);
    loadingElement.classList.remove("hidden");
  }
}

function renderItems(items, limit) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < limit; i++) {
    const item = items[i];
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-div");

    let nameH3 = document.createElement("h3");
    nameH3.innerText = item.name;

    let priceP = document.createElement("p");
    priceP.innerText = `Price: ₹${item.price}`;

    let countryP = document.createElement("p");
    countryP.innerText = `country: ${item.country}`;
    cardDiv.appendChild(nameH3);
    cardDiv.appendChild(priceP);
    cardDiv.appendChild(countryP);
    fragment.appendChild(cardDiv);
  }

  hero.appendChild(fragment);
}
