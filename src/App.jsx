// components
import Steps from "./components/Steps"
import YourInfo from "./components/Step01"
import YourPlan from "./components/Step02"
import PickAddOns from "./components/Step03"
import FinishingUp from "./components/Step04"

// hooks
import { headerContent } from "./hooks/HeaderText"
import { toggle } from "./hooks/ToggleStep"

function App() {
    const { headerText } = headerContent()

    // get the pages of the steps
    const arraySteps = [
        <YourInfo />,
        <YourPlan />,
        <PickAddOns />,
        <FinishingUp />
    ]

    const { step, changeStep } = toggle(arraySteps)

    return (
        <div>
            <aside>
                <Steps />
            </aside>
            <main>
                <div>
                    <h1>{headerText[step].h1}</h1>
                    <p>{headerText[step].p}</p>
                </div>
                <div>
                    {arraySteps[step]}
                </div>
                <div>
                    <button disabled={step === 0} onClick={() => changeStep(step - 1)}>Go Back</button>
                    <button onClick={() => changeStep(step + 1)}>Netx Step</button>
                </div>
            </main>
        </div>
    )
}

export default App