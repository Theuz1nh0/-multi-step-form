//hooks
import { texts } from "../hooks/texts"

// styles
import "../styles/Step03.css"

function PickAddOns({ data, updateFielHandler }) {
    const { services } = texts()

    return (
        <div className="form-container">
            <div className={`input input-flex${data.services.service01 == true ? " clicked-style" : ""}`}>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        name="online service"
                        id="onService"
                        onChange={e => updateFielHandler("services", { ...data.services, service01: e.target.checked })}
                        checked={data.services.service01}
                    />

                    <span className="checkmark"></span>
                </div>

                <div className="service-informations">
                    <div className="service-type">
                        <label htmlFor="onService">Online service</label>
                        <span>Acess to multiplayer games</span>
                    </div>

                    <div className="service-value">
                        <span>
                            {data.typePlan == "monthly" ? `+$${services.monthly[0]}/mo` : `+$${services.yearly[0]}/yr`}
                        </span>
                    </div>
                </div>
            </div>

            <div className={`input input-flex${data.services.service02 == true ? " clicked-style" : ""}`}>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        name="larger storage"
                        id="larStorage"
                        onChange={e => updateFielHandler("services", { ...data.services, service02: e.target.checked })}
                        checked={data.services.service02}
                    />

                    <span className="checkmark"></span>
                </div>

                <div className="service-informations">
                    <div className="service-type">
                        <label htmlFor="larStorage">Larger storage</label>
                        <span>Extra 1TB of cloud save</span>
                    </div>

                    <div className="service-value">
                        <span>
                            {data.typePlan == "monthly" ? `+$${services.monthly[1]}/mo` : `+$${services.yearly[1]}/yr`}
                        </span>

                    </div>
                </div>
            </div>

            <div className={`input input-flex${data.services.service03 == true ? " clicked-style" : ""}`}>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        name="customizable profile"
                        id="customProfile"
                        onChange={e => updateFielHandler("services", { ...data.services, service03: e.target.checked })}
                        checked={data.services.service03}
                    />

                    <span className="checkmark"></span>
                </div>

                <div className="service-informations">
                    <div className="service-type">
                        <label htmlFor="customProfile">Customizable profile</label>
                        <span>Custom theme on your profile</span>
                    </div>

                    <div className="service-value">
                        <span>
                            {data.typePlan == "monthly" ? `+$${services.monthly[2]}/mo` : `+$${services.yearly[2]}/yr`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickAddOns