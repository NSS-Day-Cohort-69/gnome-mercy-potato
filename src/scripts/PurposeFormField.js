import { setCraftIntentChoice } from "./TransientStates.js";

document.addEventListener("change", (event) =>
{
  if(event.target.dataset.id === "purpose")
  {
    setCraftIntentChoice(event.target.value)
  }
});

export const PurposeFormField = () =>
{
  return `
    <label class="label " for="purpose">Purpose</label>
    <input placeholder="What should the effect be?" type="text" data-id="purpose" class=""/>
    `;
};
