document.addEventListener("change", (event) => {
  if (event.target.dataset.id === "purpose") {
    // Pretend the console.log, is our future transient edit.
    console.log(event.target.value);
  }
});

export const PurposeFormField = () => {
  return `
    <label class="label formSection" for="purpose">Purpose</label>
    <input placeholder="What should the effect be?" type="text" data-id="purpose" class="formSection"/>
    `;
};
