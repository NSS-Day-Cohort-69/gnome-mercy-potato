/* 
    Responsibiity: 

    Initiate process to covert all state to HTML (via the
    GnomeMercy component) and update the DOM with the 
    final result.

    Also, listen for any state change and covert state to
    HTML again.
*/

import { GnomeMercy } from "./GnomeMercy.js";
import { addBrewIngredientsChoice, brewSubmissionIsValid, craftSubmissionIsValid, removeBrewIngredientChoice, saveBrewSubmission, saveCraftSubmission, setBrewCraftChoice, setBrewCrafterChoice, setCraftIntentChoice, setCraftNameChoice, setCraftTypeChoice } from "./TransientStates.js";

const mainContainer = document.querySelector("#container");

const render = async () =>
{
    debugger
    setCraftNameChoice("Name")
    setCraftTypeChoice(2)
    setCraftIntentChoice("To Use")

    if(craftSubmissionIsValid())
    {
        await saveCraftSubmission()
    }

    setBrewCraftChoice(2)
    setBrewCrafterChoice(1)
    addBrewIngredientsChoice(3)
    addBrewIngredientsChoice(2)
    addBrewIngredientsChoice(1)
    removeBrewIngredientChoice(4)
    removeBrewIngredientChoice(2)
    addBrewIngredientsChoice(4)

    if(brewSubmissionIsValid())
    {
        await saveBrewSubmission()
    }
    /*
          Fetch all of the database so that it's stored in 
          application state. After all data is fetched, 
          invoke GnomeMercy component to kick off the conversion
          of state to HTML
      */
    const mainHTML = await GnomeMercy()
    mainContainer.innerHTML = mainHTML
};

render();

// Listen for state changes and invoke render() when it does
