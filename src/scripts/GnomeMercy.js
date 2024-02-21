/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/

import { Completions } from "./Completions.js";
import { CraftForm } from "./CraftForm.js";
import { RequestForm } from "./RequestForm.js";

export const GnomeMercy = async () => {
  const CraftFormHTML = await CraftForm();
  const CompletionsHTML = await Completions();
  const requestFormHTML = await RequestForm();

  return `
    <h1>Gnome Mercy</h1>
    ${requestFormHTML}
    
    <article class="formSection" id="crafting">
      ${CraftFormHTML}
    </article>
    
    <article class="formSection" id="completions">
      ${CompletionsHTML}
    </article>`;
};
