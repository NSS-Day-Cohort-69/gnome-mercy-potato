import { CompleteButton } from "./CompleteButton.js";
import { NameFormField } from "./NameFormField.js";
import { PurposeFormField } from "./PurposeFormField.js";
import { TypeField } from "./TypeField.js";


document.addEventListener("click", (clickEvt) => {
  if (clickEvt.target.id === "submitRequest") {
  }
});

export const RequestForm = async () => {
  const nameFieldHTML = await NameFormField()
  const purposeFieldHTML = await PurposeFormField()
  const typeFieldHTML = await TypeField()
  const submitButtonHTML = await CompleteButton()
  
  let html = `
    <div class="field flex column">
      ${nameFieldHTML}
      ${purposeFieldHTML}
      ${typeFieldHTML}
      ${submitButtonHTML}
    </div>
    `;
  return html;
};
