// returns the left side of the page, where it shows the current step highlighted
function Steps() {

    return (
        <div className="step-bar">
            <div className="step-informations">
                <span className="step-number">1</span>
                <div className="step-text">
                    <span>step 1</span>
                    <span className="step-title">your info</span>
                </div>
            </div>
            <div>
                <span className="step-number">2</span>
                <div className="step-text">
                    <span>step 2</span>
                    <span className="step-title">select plan</span>
                </div></div>
            <div>
                <span className="step-number">3</span>
                <div className="step-text">
                    <span>step 3</span>
                    <span className="step-title">add-ons</span>
                </div></div>
            <div>
                <span className="step-number">4</span>
                <div className="step-text">
                    <span>step 4</span>
                    <span className="step-title">summary</span>
                </div></div>
        </div>
    )
}

export default Steps