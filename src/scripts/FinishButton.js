//export a function with a "finish" button
//this function will trigger a custom event that calls a function that sends transient state to the database under
//finished brews
//import a function to save the transient state

// import {WhateverSavesTheTransientState} from "./dataAccess.js" //NEEDS REAL FUNCTION NAME

const handleFinishedBrew = (clickEvent) => {
    if (clickEvent.target.id === "finishBrew") {
        // WhateverSavesTheTransientState()                    //NEEDS REAL FUNCTION NAME
    }
}

export const FinishButton = () => {
    document.addEventListener("click", handleFinishedBrew)

    return `<div><button id="finishBrew">Finish</button></div>`
}