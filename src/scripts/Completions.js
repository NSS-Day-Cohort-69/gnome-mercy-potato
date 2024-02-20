/*
  Responsibility
    Generate the HTML for all completed potions and elixirs
*/

export const Completions = async () =>
{
  const craftRequests = await getCraftRequests()
  const completedCraftRequests = craftRequests.filter(request => request.completions.length)

  let returnHTML = `<div class="completions">`
  returnHTML += `<h2 class="completions--header">Completed Potions And Elixirs</h2>`
  returnHTML += `<ul class="completions--list"></ul>`
  returnHTML += completedCraftRequests.map(request => `<li class="completion">${request.name}</li>`).join("")
  returnHTML += `</ul>`
  returnHTML += `</div>`

  return returnHTML
}

const getCraftRequests = () =>
{
  return fetch("http://localhost:8088/craftRequests?_embed=completions").then(request => request.json())
}