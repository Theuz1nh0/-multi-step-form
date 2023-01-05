// components
import YourInfo from "./components/Step01"
import YourPlan from "./components/Step02"
import PickAddOns from "./components/Step03"
import FinishingUp from "./components/Step04"
import Thanks from "./components/Step05"
import StepInformations from "./components/StepInformations"

//styles
import './styles/App.css'

// hooks
import { texts } from "./hooks/texts"
import { useForm } from "./hooks/useForm"

function App() {
    const { headerText, arrayInformationsStep } = texts()

    // get the pages of the steps
    const formComponents = [
        <YourInfo />,
        <YourPlan />,
        <PickAddOns />,
        <FinishingUp />,
        <Thanks />
    ]

    const { currentStep, currentComponent, changeStep, isLastStep, isFarstStep } = useForm(formComponents)

    // to keep the 'Next Step' button in the same place
    const styleToActions = isFarstStep ? 'end' : 'space-between'

    return (
        <div>
            <aside>
                <div className='step-background'>
                    <div className="step-bar">
                        {arrayInformationsStep.map(step => <StepInformations key={step.num} array={step} step={currentStep} />)}
                    </div>
                </div>
            </aside>

            <main className="main-container">
                <div className="header-container">
                    <h1>
                        {currentStep + 1 >= formComponents.length ? null : headerText[currentStep].h1}
                    </h1>

                    <p>
                        {currentStep + 1 >= formComponents.length ? null : headerText[currentStep].p}
                    </p>
                </div>
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <div className="inputs-container">{currentComponent}</div>
                    <div className="actions" style={{ justifyContent: styleToActions }}>
                        {!isFarstStep && (
                            <button
                                type="button"
                                className="btn-go-back"
                                onClick={() => changeStep(currentStep - 1)}
                            >
                                <span>Go Back</span>
                            </button>
                        )}

                        {!isLastStep ? (
                            <button type="submit" className="btn-next-step">
                                <span>Next Step</span>
                            </button>
                        ) : (
                            <button type="button" className="btn-next-step">
                                <span>Next Step</span>
                            </button>
                        )}
                    </div>
                </form>
            </main>
            <div className="bottom-space"></div>
        </div>
    )
}

export default App