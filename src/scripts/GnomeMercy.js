/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/

import { CraftRequests } from "./CraftRequests.js";

export const GnomeMercy = async () => {
  const craftRequestsHTML = await CraftRequests()
  
  return `
    <h1>Gnome Mercy</h1>
    <article>
      <section class="section">
        ${craftRequestsHTML}
      </section>
    </article>`;
};
