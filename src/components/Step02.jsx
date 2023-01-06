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

function YourPlan({ data, updateFielHandler }) {
    const { plans } = texts();

    const changeTipePlan = () => {
        if (data.typePlan == "monthly") {
            updateFielHandler('typePlan', "yearly")
        } else {
            updateFielHandler('typePlan', "monthly")
        }
    }


    //function to add a style to the container of the plan that the client clicked on
    const IsChecked = (event) => {
        const planId = event.target.id
        updateFielHandler("plan", planId)
    }

    return (
        // step02
        <div className="form-container">
            <div className={`input relative${data.plan == "arcade" ? " clicked-style" : ""}`}>
                <div className="radio-container">
                    <input
                        type="radio"
                        name="plan"
                        id="arcade"
                        onChange={IsChecked}
                        checked={data.plan == "arcade"}
                    />
                </div>
                <div className="radio-content">
                    <div>
                        <img src={iconArcade} alt="icon arcade" />
                    </div>
                    <div className="plan-informations">
                        <h2>Arcade</h2>
                        <span className="plan-value">
                            {data.typePlan == "monthly" ? `$${plans.monthly[0]}/mo` : `$${plans.yearly[0]}/yr`}
                        </span>

                        <span className="yearly-discount">
                            {data.typePlan != "monthly" ? '2 months free' : null}
                        </span>
                    </div>
                </div>
            </div>

            <div className={`input relative${data.plan == "advanced" ? ' clicked-style' : ''}`}>
                <div className="radio-container">
                    <input
                        type="radio"
                        name="plan"
                        id="advanced"
                        onChange={IsChecked}
                        checked={data.plan == "advanced"}
                    />
                </div>
                <div className="radio-content">
                    <div>
                        <img src={iconAdvanced} alt="icon advanced" />
                    </div>
                    <div className="plan-informations">
                        <h2>Advanced</h2>
                        <span className="plan-value">
                            {data.typePlan == "monthly" ? `$${plans.monthly[1]}/mo` : `$${plans.yearly[1]}/yr`}
                        </span>

                        <span className="yearly-discount">
                            {data.typePlan != "monthly" ? '2 months free' : null}
                        </span>
                    </div>
                </div>
            </div>

            <div className={`input relative${data.plan == "pro" ? ' clicked-style' : ''}`}>
                <div className="radio-container">
                    <input
                        type="radio"
                        name="plan"
                        id="pro"
                        onChange={IsChecked}
                        checked={data.plan == "pro"}
                    />
                </div>
                <div className="radio-content">
                    <div>
                        <img src={iconPro} alt="icon pro" />
                    </div>
                    <div className="plan-informations">
                        <h2>Pro</h2>
                        <span className="plan-value">
                            {data.typePlan == "monthly" ? `$${plans.monthly[2]}/mo` : `$${plans.yearly[2]}/yr`}
                        </span>

                        <span className="yearly-discount">
                            {data.typePlan != "monthly" ? '2 months free' : null}
                        </span>
                    </div>
                </div>
            </div>

            {/* toggle button, switch between monthly plan and annual plan */}
            <div className="toggle-option">
                <span style={{ color: data.typePlan == "monthly" ? 'var(--cool-gray)' : 'var(--marine-blue)' }}>Monthly</span>
                <span
                    className={data.typePlan == "monthly" ? "switch-button" : "switch-button  cliked"}
                    onClick={changeTipePlan}
                ></span>
                <span
                    style={{ color: data.typePlan == "yearly" ? 'var(--cool-gray)' : 'var(--marine-blue)' }}
                >Yearly</span>
            </div>
        </div>
    )
}

export default YourPlan