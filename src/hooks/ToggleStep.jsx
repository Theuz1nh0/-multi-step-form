import { useState } from "react";

// function to switch the current page for the client to the next step when some button is clicked
export function toggle(currentStep) {
    const [step, setStep] = useState(0);

    // function acctived when buttom Next Step or Go Back is clicked
    function changeStep(i) {
        if (i < 0 || i > currentStep.length) {
            return
        }

        setStep(i)
    }

    return {
        step: step,
        changeStep
    }

}

