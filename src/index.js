import "./styles.css";
import { renderHomePage } from "./homePage.js";
import { renderMenuPage } from "./menuPage.js";
import { renderAboutPage } from "./aboutPage.js";

document.addEventListener("DOMContentLoaded", () => {
  contentDiv.innerHTML = "";
  renderHomePage();
});
const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector("#home-nav-btn");
const menuBtn = document.querySelector("#menu-nav-btn");
const aboutBtn = document.querySelector("#about-nav-btn");

homeBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  renderHomePage();
});
menuBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  renderMenuPage();
});
aboutBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  renderAboutPage();
});
