/*
  Responsibility
    Generate HTML for checkboxes for each ingredient and
    store each choice in transient state.
*/

import { addBrewIngredientsChoice, removeBrewIngredientChoice } from "./TransientStates.js"

const onIngredientChanged = (event) =>
{
  const checkbox = event.target
  if(event.target.dataset.type === "ingredient")
  {
    if(checkbox.checked)
    {
      addBrewIngredientsChoice(event.target.value)
    } else
    {
      removeBrewIngredientChoice(event.target.value)
    }
  }
}

export const Ingredients = async () =>
{
  document.addEventListener(
    "change", onIngredientChanged
  )

  const ingredients = await getIngredients()

  let returnHTML = `<div class="ingredients">`
  returnHTML += `<h3>Crafting Ingredients</h3>`
  returnHTML += ingredients.map(ingredient => `
  <input type="checkbox" name="ingredient${ingredient.id}" value="${ingredient.id}" data-type="ingredient">
  <label for="ingredient${ingredient.id}">${ingredient.name}</label><br>
  `).join("")
  returnHTML += `</div>`

  return returnHTML
}

const getIngredients = () =>
{
  return fetch("http://localhost:8088/ingredients").then(res => res.json())
}