// styles
import '../styles/Step01.css'

function YourInfo() {

    return (
        <div className="form-container">
            <div className="input-container">
                <label htmlFor="name">Name</label>
                <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="e.g. Stephen King"
                />
            </div>

            <div className="input-container">
                <label htmlFor="email">Email Address</label>
                <input
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="e.g. stephenking@lorem.com"
                />
            </div>

            <div className="input-container">
                <label htmlFor="phone">Phone Number</label>
                <input
                    className="input"
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="e.g. +1 234 567 890"
                />
            </div>
        </div>
    )
}

export default YourInfo