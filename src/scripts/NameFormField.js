document.addEventListener("change", (event) => {
  if (event.target.dataset.id === "name") {
    // Pretend the console.log, is our future transient edit.
    console.log(event.target.value);
  }
});

export const NameFormField = () => {
  return `
      <label class="label formSection" for="name">Name</label>
      <input placeholder="What's the potions name?" type="text" data-id="name" class="input formSection">
      `;
};
