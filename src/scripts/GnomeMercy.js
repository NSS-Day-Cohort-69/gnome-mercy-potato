/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/

import { CraftRequests } from "./CraftRequests.js";
import { Completions } from "./Completions.js";
import { NameFormField } from "./NameFormField.js";
import { PurposeFormField } from "./PurposeFormField.js";
import { TypeField } from "./TypeField.js";

export const GnomeMercy = async () => {
  const craftRequestsHTML = await CraftRequests();
  const CompletionsHTML = await Completions();
  const brewTypeField = await TypeField();

  return `
    <h1>Gnome Mercy</h1>
    <div id="request" class="flex column">
      ${NameFormField()}
      ${PurposeFormField()}
      ${brewTypeField}
    </div>
    
    <article id="crafting">
      ${CraftFormHTML}
      ${craftRequestsHTML}
    </article>
    
    <article class="section" id="completions">
      ${CompletionsHTML}
    </article>`;
};
