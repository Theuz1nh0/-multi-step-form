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
import { useState } from "react"
import { texts } from "./hooks/texts"
import { useForm } from "./hooks/useForm"

const formTemplate = {
    name: '',
    email: '',
    number: '',
    plan: {
        name: 'arcade',
        value: 9,
    },
    typePlan: "Monthly",
    services: {
        service01: {
            name: 'Online service',
            isChecked: false
        },
        service02: {
            name: 'Larger storage',
            isChecked: false
        },
        service03: {
            name: 'Customizable profile',
            isChecked: false
        }
    },
}

function App() {
    const [data, setData] = useState(formTemplate)

    const { headerText, arrayInformationsStep } = texts()

    const updateFielHandler = (key, value) => {
        setData(prev => {
            return { ...prev, [key]: value }
        })
    }

    // get the pages of the steps
    const formComponents = [
        <YourInfo data={data} updateFielHandler={updateFielHandler} />,
        <YourPlan data={data} updateFielHandler={updateFielHandler} />,
        <PickAddOns data={data} updateFielHandler={updateFielHandler} />,
        <FinishingUp data={data} />,
        <Thanks />
    ]

    const { currentStep, currentComponent, changeStep, isFarstStep} = useForm(formComponents, data)

    // to keep the 'Next Step' button in the same place
    const styleToActions = isFarstStep ? 'end' : 'space-between'
    const isThankyouStep = currentStep == formComponents.length - 1 ? 'center' : 'space-between'
    const displayOff = currentStep != formComponents.length - 1 ? 'flex' : 'none'

    return (
        <div>

            <main className="main-container">
                <aside>
                    <div className='step-background'>
                        <div className="step-bar">
                            {arrayInformationsStep.map(step => <StepInformations key={step.num} array={step} step={currentStep} />)}
                        </div>
                    </div>
                </aside>

                <div className="header-and-form-container">
                    <div className="header-container">
                        <h1>
                            {currentStep + 1 >= formComponents.length ? null : headerText[currentStep].h1}
                        </h1>

                        <p>
                            {currentStep + 1 >= formComponents.length ? null : headerText[currentStep].p}
                        </p>
                    </div>
                    <form onSubmit={(e) => changeStep(currentStep + 1, e)} className='form' style={{ justifyContent: isThankyouStep }}>
                        <div className="inputs-container">{currentComponent}</div>
                        <div className="actions" style={{ justifyContent: styleToActions, display: displayOff }}>
                            {!isFarstStep && currentStep != formComponents.length - 1 ? (
                                <button
                                    type="button"
                                    className="btn-go-back"
                                    onClick={() => changeStep(currentStep - 1)}
                                >
                                    <span>Go Back</span>
                                </button>
                            ) : ''}

                            {currentStep < formComponents.length - 2 ? (
                                <button type="submit" className="btn-next-step">
                                    <span>Next Step</span>
                                </button>
                            ) : (
                                <button type="submit" className="btn-confirm">
                                    <span>Confirm</span>
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </main>

            <footer>
                <p className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="#">Your Name Here</a>.
                </p>
            </footer>
            <div className="bottom-space"></div>
        </div>
    )
}

export default App