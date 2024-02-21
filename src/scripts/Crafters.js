/*
  Responsibility
    Generate HTML for the dropdown of crafters. When one is
    selected, update transient state.
*/

//import { setBrewCrafterChoice } "./TransientState.js"

const onCrafterChosen = (event) => {
  if (event.target.id === "crafter") {
    //setBrewCrafterChoice(event.target.value)
  }
};

export const Crafters = async () => {
  document.addEventListener("change", onCrafterChosen);

  const crafters = await getCrafters();
  let returnHTML = `<div class="crafters">`;
  returnHTML += `<h3>Crafters</h3>`;
  returnHTML += `<select id="crafter">`;
  returnHTML += `<option value="0" selected disabled hidden>--Choose A Crafter--</option>`;
  returnHTML += crafters
    .map((crafter) => `<option value=${crafter.id} >${crafter.name}</option>`)
    .join("");
  returnHTML += `</select>`;
  returnHTML += `</div>`;

  return returnHTML;
};

const getCrafters = () => {
  return fetch("http://localhost:8088/crafters").then((res) => res.json());
};
