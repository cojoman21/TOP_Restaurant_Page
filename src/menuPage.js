import foodImage from "./img/food.jpg";

export function renderMenuPage() {
  const contentDiv = document.querySelector("#content");

  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content");

  const contentImg = document.createElement("img");
  contentImg.src = foodImage;
  contentImg.classList.add("bg-img");

  const contentH1 = document.createElement("h1");
  contentH1.textContent = "Daily menu";

  const menuList = document.createElement("ul");

  const dishes = ["Dish1", "Dish2", "Dish3"];

  for (const dish of dishes) {
    const menuEntry = document.createElement("li");
    menuEntry.textContent = dish;
    menuList.appendChild(menuEntry);
  }

  contentContainer.appendChild(contentH1);
  contentContainer.appendChild(menuList);
  menuContent.appendChild(contentImg);
  menuContent.appendChild(contentContainer);

  contentDiv.appendChild(menuContent);
}
