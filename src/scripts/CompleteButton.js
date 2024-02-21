/*
  Responsibility
    Generate the HTML for the complete requests button,
    and POST a new item to the API when clicked.
*/
import { craftSubmissionIsValid, saveCraftSubmission } from "./TransientStates.js"

const onSubmitRequestPressed = (event) =>
{
  if(event.target.id === "submit-request")
  {
    if(craftSubmissionIsValid())
    {
      saveCraftSubmission()
    } else
    {
      window.alert("Craft submission form is not valid")
    }
  }
}

export const CompleteButton = () =>
{
  document.addEventListener(
    "mouseup",
    onSubmitRequestPressed
  )

  let returnHTML = `<button class="complete-button__button" id="submit-request">Submit Request</button>`

  return returnHTML
}