// function to generate containers that 
// will have the information of the current step you are in

function StepInformations(props) {
    const num = props.array.num
    const name = props.array.name
    const step = props.step + 1

    const verifyStep = () => {
        if (num === step) {
            return 'step-number current-step'
        } else {
            return 'step-number'
        }
    }

    return (
        <div className="step-informations">
            <div className={verifyStep()}  >
                <span>{num}</span>
            </div>
            <div className="step-text display">
                <span>step {num}</span>
                <span className="step-title">{name}</span>
            </div>
        </div>
    )
}

export default StepInformations