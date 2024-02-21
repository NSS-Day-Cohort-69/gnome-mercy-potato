/*
  Responsibility
    Generate the HTML for the complete requests button,
    and POST a new item to the API when clicked.
*/
//import { saveCraftSubmission } from "./dataAccess.js"

const onSubmitRequestPressed = (event) =>
{
  if(event.target.id === "submit-request")
  {
    /*
    if(craftSubmissionIsValid)
    {
      //saveCraftSubmission()
    } else
    {
      window.alert("Craft submission form is not valid")
    }
    */
  }
}

export const CompleteButton = () =>
{
  document.addEventListener(
    "mouseup",
    onSubmitRequestPressed
  )

  let returnHTML = `<div class="complete-button">`
  returnHTML += `<button class="complete-button--button" id="submit-request">Submit Request</button>`
  returnHTML += `</div>`

  return returnHTML
}