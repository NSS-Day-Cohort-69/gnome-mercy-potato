/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/

import { CraftRequests } from "./CraftRequests.js";
import { Completions } from "./Completions.js"

export const GnomeMercy = async () => {
  const craftRequestsHTML = await CraftRequests()
  const CompletionsHTML = await Completions()
  
  return `
    <h1>Gnome Mercy</h1>
    <article id="request">
      
    </article>
    
    <article id="crafting">
      <div class="crafting--column">
        <section class="section">
          ${craftRequestsHTML}
        </section>
      </div>
      <div class="crafting--column">

      </div>
    </article>
    
    <article id="completions">
      ${CompletionsHTML}
    </article>`;
};
