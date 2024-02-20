document.addEventListener("change", (event) => {
  if (event.target.id === "name") {
    // Pretend the console.log, is our future transient edit.
    console.log(event.target.value);
  }
});

export const makeNameFormField = () => {
  return `
      <label class="label" for="name">Name</label>
      <input placeholder="What's the potions name?" type="text" id="name" class="input">
      `;
};
