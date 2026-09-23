import foodImage from "./img/food.webp";

export function renderHomePage() {
  const contentDiv = document.querySelector("#content");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content");

  const contentImg = document.createElement("img");
  contentImg.src = foodImage;
  contentImg.classList.add("bg-img");

  const contentH1 = document.createElement("h1");
  contentH1.textContent = "Enjoy our healthy foods!";

  const contentDesc = document.createElement("p");
  contentDesc.textContent = "Daily selected dishes made just for you!";

  contentContainer.appendChild(contentH1);
  contentContainer.appendChild(contentDesc);
  homeContent.appendChild(contentImg);
  homeContent.appendChild(contentContainer);

  contentDiv.appendChild(homeContent);
}
