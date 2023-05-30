import { SaveSurveySubmission } from "./TransientState.js";

const handleSurveySubmissionClicl = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        SaveSurveySubmission()
    }
}

export const SaveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClicl)

    return "<button id='saveSubmission'>Save Submission</button>"
}