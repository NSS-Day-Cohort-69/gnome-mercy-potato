/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/

import { Completions } from "./Completions.js"
import { CraftForm } from "./CraftForm.js";

export const GnomeMercy = async () => {
  const CraftFormHTML = await CraftForm()
  const CompletionsHTML = await Completions()
  
  return `
    <h1>Gnome Mercy</h1>
    <article id="request">
      
    </article>
    
    <article id="crafting">
      ${CraftFormHTML}
    </article>
    
    <article id="completions">
      ${CompletionsHTML}
    </article>`;
};
