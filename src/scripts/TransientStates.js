

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

export const setCraftNameChoice = (choiceMade) =>
{
    craftRequestTransientState.name = choiceMade
}

export const setCraftTypeChoice = (choiceMade) =>
{
    craftRequestTransientState.craftTypeId = choiceMade
}

export const setCraftIntentChoice = (choiceMade) =>
{
    craftRequestTransientState.intendedUse = choiceMade
}

export const setBrewCraftChoice = (choiceMade) =>
{
    finishBrewTransientState.craftRequestedId = choiceMade
}

export const setBrewCrafterChoice = (choiceMade) =>
{
    finishBrewTransientState.crafterId = choiceMade
}

export const addBrewIngredientsChoice = (choiceMade) =>
{
    finishBrewTransientState.ingredientsId.push(choiceMade)
}

export const removeBrewIngredientChoice = (choiceMade) =>
{
    const index = finishBrewTransientState.ingredientsId.indexOf(choiceMade)
    finishBrewTransientState.ingredientsId.splice(index, 1)
}

export const craftSubmissionIsValid = () =>
{
    return craftRequestTransientState.name !== "" && craftRequestTransientState.intendedUse !== "" && craftRequestTransientState.craftTypeId !== 0
}

export const brewSubmissionIsValid = () =>
{
    return finishBrewTransientState.crafterId !== 0 && finishBrewTransientState.craftRequestedId !== 0 && finishBrewTransientState.ingredientsId.length > 0
}


export const saveCraftSubmission = async () =>
{
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

export const saveBrewSubmission = async () =>
{
    const brewObject = {
        craftRequestId: finishBrewTransientState.craftRequestedId,
        crafterId: finishBrewTransientState.crafterId
    }

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(brewObject)
    }
    await fetch("http://localhost:8088/completions", postOptions)


    const finishedBrewEvent = new CustomEvent("newBrewCreated")
    document.dispatchEvent(finishedBrewEvent)

    const brewsArray = await fetch("http://localhost:8088/completions").then(res => res.json())
    const brewsLength = brewsArray.length

    for(const ingredientId of finishBrewTransientState.ingredientsId)
    {
        const objectIngredient = {
            ingredientId: ingredientId,
            completionId: brewsLength
        }
        const ingredientPostOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objectIngredient)
        }
        await fetch("http://localhost:8088/craftIngredients", ingredientPostOptions)
    }

}