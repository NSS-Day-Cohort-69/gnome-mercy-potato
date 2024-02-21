import { setCraftNameChoice } from "./TransientStates.js";

document.addEventListener("change", (event) =>
{
  if(event.target.dataset.id === "name")
  {
    setCraftNameChoice(event.target.value)
  }
});

export const NameFormField = () =>
{
  return `
      <label class="label" for="name">Name</label>
      <input placeholder="What's the potions name?" type="text" data-id="name" class="input">
      `;
};
