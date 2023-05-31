const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}

export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState)
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}

export const SaveSurveySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const resposne = await fetch("http://localhost:8088/submissions", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}