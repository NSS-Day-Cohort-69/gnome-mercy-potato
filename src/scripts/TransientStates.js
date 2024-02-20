

let craftRequestTransientState = {
    "name": "",
    "intendedUse": "",
    "craftTypeId": 0
}

let finishBrewTransientState = {
    "crafterId": 0,
    "craftRequestedId": 0,
    "ingredientsId": []
}

export const setCraftNameChoice = (choiceMade) => {
    craftRequestTransientState.name = choiceMade
    console.log(craftRequestTransientState)
}

export const setCraftTypeChoice = (choiceMade) => {
    craftRequestTransientState.craftTypeId = choiceMade
    console.log(craftRequestTransientState)
}

export const setCraftIntentChoice = (choiceMade) => {
    craftRequestTransientState.intendedUse = choiceMade
    console.log(craftRequestTransientState)
}

export const setBrewCraftChoice = (choiceMade) => {
    finishBrewTransientState.craftRequestedId = choiceMade
    console.log(finishBrewTransientState)
}

export const setBrewCrafterChoice = (choiceMade) => {
    finishBrewTransientState.crafterId = choiceMade
    console.log(finishBrewTransientState)
}

export const addBrewIngredientsChoice = (choiceMade) => {
    finishBrewTransientState.ingredientsId.push(choiceMade)
    console.log(finishBrewTransientState)
}

export const removeBrewIngredientChoice = (choiceMade) => {
    const index = finishBrewTransientState.ingredientsId.indexOf(choiceMade)
    finishBrewTransientState.ingredientsId.splice(index, 1)
}

export const saveCraftSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(craftRequestTransientState)
    }
    await fetch("http://localhost:8088/craftRequests", postOptions)

    const customCraftEvent = new CustomEvent("newCraftCreated")
    document.dispatchEvent(customCraftEvent)
}

export const saveBrewSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(finishBrewTransientState)
    }
    await fetch("http://localhost:8088/completions", postOptions)

    const finishedBrewEvent = new CustomEvent("newBrewCreated")
    document.dispatchEvent(finishedBrewEvent)
}