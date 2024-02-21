import { CraftRequests } from "./CraftRequests.js"
import { Crafters } from "./Crafters.js"
import { Ingredients } from "./Ingredients.js"

export const CraftForm = async () => {
    const craftRequestsHTML = await CraftRequests()
    const craftersHTML = await Crafters()
    const ingredientsHTML = await Ingredients()

    let formHTML = `
    <div class="row flex">
        <div class="column flex">
            <section class="section">
                ${craftRequestsHTML}
            </section>
            <section class="section">
                ${craftersHTML}
            </section>
        </div>
        <div class="column">
            <section class="section">
                ${ingredientsHTML}
            </section>
        </div>
    </div>
    `

    return formHTML
}