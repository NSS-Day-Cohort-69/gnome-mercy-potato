document.addEventListener("change", (event) => {
  if (event.target.id === "purpose") {
    // Pretend the console.log, is our future transient edit.
    console.log(event.target.value);
  }
});

export const makePurposeFormField = () => {
  return `
    <label class="label" for="purpose">Purpose</label>
    <input placeholder="What should the effect be?" type="text" id="purpose" class="input">
    `;
};
