//export a function with a "finish" button
//this function will trigger a custom event that calls a function that sends transient state to the database under
//finished brews
//import a function to save the transient state

import { brewSubmissionIsValid, saveBrewSubmission } from "./TransientStates.js"


const handleFinishedBrew = (clickEvent) =>
{
    if(clickEvent.target.id === "finishBrew")
    {
        if(brewSubmissionIsValid())
        {
            saveBrewSubmission()
        } else
        {
            window.alert("Brew form is not filled")
        }

    }
}

export const FinishButton = () =>
{
    document.addEventListener("click", handleFinishedBrew)

    return `<div><button id="finishBrew">Finish</button></div>`
}