import { alienPlanets } from "./alienPlanets.js";

const planets = document.querySelector("#planets");

for (let alientPlanet in alienPlanets) {
  const planet = document.createElement("div");
  planet.classList.add("planet");
  const h3 = document.createElement("h4");
  const emoji = document.createElement("h3");
  emoji.textContent = alienPlanets[alientPlanet].emoji;
  h3.textContent = alienPlanets[alientPlanet].name
  planet.appendChild(h3);
  planet.appendChild(emoji);
  console.log(planet);
  planets.appendChild(planet);
}