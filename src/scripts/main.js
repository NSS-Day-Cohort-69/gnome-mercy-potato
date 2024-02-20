/* 
    Responsibiity: 

    Initiate process to covert all state to HTML (via the
    GnomeMercy component) and update the DOM with the 
    final result.

    Also, listen for any state change and covert state to
    HTML again.
*/

//import { Completions } from "./Completions.js";
import { GnomeMercy } from "./GnomeMercy.js";

const mainContainer = document.querySelector("#container");

const render = async() =>
{
    //mainContainer.innerHTML = await Completions()
};

render();

// Listen for state changes and invoke render() when it does
