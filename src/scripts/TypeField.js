import { setCraftTypeChoice } from "./TransientStates.js";

document.addEventListener("change", (event) => {
  if (event.target.dataset.id === "TypeFieldForm") {
    setCraftTypeChoice(parseInt(event.target.value));
  }
});

export const TypeField = async () => {
  const response = await fetch(`http://localhost:8088/craftTypes`).then((res) =>
    res.json()
  );
  let html = `
  <label class="label" for="type">Type</label>
    <select data-id="TypeFieldForm">
        <option value="0" data-name="brewOption" selected disabled hidden>Select a type</option>`;

  const htmlArray = response.map((brew) => {
    return `<option value="${brew.id}">${brew.type}</option>`;
  });
  html += htmlArray.join("");
  html += `</select>`;
  return html;
};
