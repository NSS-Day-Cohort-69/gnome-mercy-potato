// Returns an Array of Craft Requests that does NOT include any Requests that have already been completed
const filterCraftRequests = (craftRequestsArray, completionsArray) => {
  const filteredCraftRequests = []
  
  for (const craftRequest of craftRequestsArray) {
    let isCompleted = false

    // Checks if the current Craft Request has already been completed
    for (const completion of completionsArray) {
      if (completion.craftRequestId === craftRequest.id) {
        isCompleted = true
        break
      }
    }

    if (isCompleted === false) {
      filteredCraftRequests.push(craftRequest)
    }
  }

  return filteredCraftRequests
}

// Generates the HTML for the dropdown list of Crafting Requests
const generateDropdownHTML = (craftRequestsArray) => {
  let craftRequestsHTML = `<select class="dropdown">`

  craftRequestsHTML += `<option value="0" selected disabled hidden>--Choose A Request--</option>`

  const optionStringArray = craftRequestsArray.map(request => `<option value="${request.id}">${request.name}</option>`)

  craftRequestsHTML += optionStringArray.join()

  craftRequestsHTML += `</select>`

  return craftRequestsHTML
}

// Generates a filtered dropdown list of Crafting Requests
export const CraftRequests = async () => {
  const responseForCraftRequests = await fetch("http://localhost:8088/craftRequests")
  const craftRequests = await responseForCraftRequests.json()

  const responseForCompletions = await fetch("http://localhost:8088/completions")
  const completions = await responseForCompletions.json()

  const filteredCraftRequests = filterCraftRequests(craftRequests, completions)

  const craftRequestsHTML = generateDropdownHTML(filteredCraftRequests)

  return craftRequestsHTML
}