// react
import { useState } from 'react';

// hooks
import { texts } from '../hooks/texts'

// images
import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'

// styles
import '../styles/Step02.css'

function YourPlan() {
    const [toggle, setToggle] = useState(0)
    const [changePlan, setChangePlan] = useState('')

    const { plans } = texts();

// function to define the content that will appear depending on the switch button option
    const changeClass = (event) => {
        const className = event.target.className

        if (className == 'switch-button') {
            setToggle(1)
            event.target.className += " cliked"
        } else {
            event.target.className = "switch-button"
            setToggle(0)
        }
    }

//function to add a style to the container of the plan that the client clicked on
    const IsChecked = (event) => {
        const planId = event.target.id
        setChangePlan(planId)
    }

    return (
        // step02
        <div className="form-container">
            <div className={`input relative${changePlan == "arcade" ? ' current-plan' : ''}`}>
                <div className="radio-container">
                    <input type="radio" name="plan" id="arcade" onChange={IsChecked}/>
                </div>
                <div className="radio-content">
                    <div>
                        <img src={iconArcade} alt="icon arcade" />
                    </div>
                    <div className="plan-informations">
                        <h2>Arcade</h2>
                        <span className="plan-value">{toggle == 0 ? plans.monthly[0] : plans.yearly[0]}</span>
                        <span className="yearly-discount">{toggle != 0 ? '2 months free': null}</span>
                    </div>
                </div>
            </div>

            <div className={`input relative${changePlan == "advanced" ? ' current-plan' : ''}`}>
                <div className="radio-container">
                    <input type="radio" name="plan" id="advanced" onChange={IsChecked} />
                </div>
                <div className="radio-content">
                    <div>
                        <img src={iconAdvanced} alt="icon advanced" />
                    </div>
                    <div className="plan-informations">
                        <h2>Advanced</h2>
                        <span className="plan-value">{toggle == 0 ? plans.monthly[1] : plans.yearly[1]}</span>
                        <span className="yearly-discount">{toggle != 0 ? '2 months free': null}</span>
                    </div>
                </div>
            </div>

            <div className={`input relative${changePlan == "pro" ? ' current-plan' : ''}`}>
                <div className="radio-container">
                    <input type="radio" name="plan" id="pro" onChange={IsChecked} />
                </div>
                <div className="radio-content">
                    <div>
                        <img src={iconPro} alt="icon pro" />
                    </div>
                    <div className="plan-informations">
                        <h2>Pro</h2>
                        <span className="plan-value">{toggle == 0 ? plans.monthly[2] : plans.yearly[2]}</span>
                        <span className="yearly-discount">{toggle != 0 ? '2 months free': null}</span>
                    </div>
                </div>
            </div>
            
            {/* toggle button, switch between monthly plan and annual plan */}
            <div className="toggle-option">
                <span style={{color: toggle == 0 ? 'var(--cool-gray)' : 'var(--marine-blue)'}}>Monthly</span>
                <span className="switch-button" onClick={(e) => changeClass(e)}></span>
                <span style={{color: toggle == 1 ? 'var(--cool-gray)' : 'var(--marine-blue)'}}>Yearly</span>
            </div>
        </div>
    )
}

export default YourPlan