// styles
import '../styles/Step01.css'

function YourInfo({ data, updateFielHandler }) {
    // function to change the className of the input and 
    // label to warn that the client has not filled in that field
    const verifyInputsInvalids = (e) => {
        e.target.classList.add('inputInvalid')
        e.target.labels[0].className = 'inputLabel beforeInputInvalid'
    }

    //function to bring back to normal the input
    //that the client filled in correctly
    const verifyInputs = (e) => {
        updateFielHandler(e.target.id, e.target.value)

        e.target.classList.remove("inputInvalid")
        e.target.labels[0].className = 'inputLabel'

    }

    return (
        <div className="form-container">
            <div className="input-container">
                <label htmlFor="name" className='inputLabel'>Name</label>
                <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    value={data.name || ""}
                    onChange={(e) => verifyInputs(e)}
                    placeholder="e.g. Stephen King"
                    onInvalid={verifyInputsInvalids}
                    required
                />
            </div>

            <div className="input-container">
                <label htmlFor="email" className='inputLabel'>Email Address</label>
                <input
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    value={data.email || ""}
                    onChange={(e) => verifyInputs(e)}
                    placeholder="e.g. stephenking@lorem.com"
                    onInvalid={verifyInputsInvalids}
                    required
                />
            </div>

            <div className="input-container">
                <label htmlFor="number" className='inputLabel'>Phone Number</label>
                <input
                    className="input"
                    type="number"
                    name="number"
                    id="number"
                    value={data.number || ""}
                    onChange={(e) => verifyInputs(e)}
                    placeholder="e.g. +1 234 567 890"
                    onInvalid={verifyInputsInvalids}
                    required
                />
            </div>
        </div>
    )
}

export default YourInfo