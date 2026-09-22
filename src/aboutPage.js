import foodImage from "./img/food.jpg";

export function renderAboutPage() {
  const contentDiv = document.querySelector("#content");

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content");

  const contentImg = document.createElement("img");
  contentImg.src = foodImage;
  contentImg.classList.add("bg-img");

  const contentH1 = document.createElement("h1");
  contentH1.textContent = "About us";

  const contentDesc = document.createElement("p");
  contentDesc.textContent =
    "Our kitchen focuses on local, seasonal produce — from humble vegetables like beetroot and celery to foraged herbs and small-batch cheeses — transformed with care and technique into vibrant, elegant dishes. While expanding our horizons to the Balkans for some of the fish & meats.";

  contentContainer.appendChild(contentH1);
  contentContainer.appendChild(contentDesc);
  aboutContent.appendChild(contentImg);
  aboutContent.appendChild(contentContainer);

  contentDiv.appendChild(aboutContent);
}
