import { SaveSurveySubmission } from "./TransientState.js";

const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        SaveSurveySubmission()
    }
}

export const SaveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick)

    return "<div><button id='saveSubmission'>Save Submission</button></div>"
}