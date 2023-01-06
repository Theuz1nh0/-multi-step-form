// react
import { useState } from 'react'

// styles
import '../styles/Step01.css'

function YourInfo( { data, updateFielHandler } ) {

    return (
        <div className="form-container">
            <div className="input-container">
                <label htmlFor="name">Name</label>
                <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    value={data.name || ""}
                    onChange={(e) => updateFielHandler("name", e.target.value)}
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
                    value={data.email || ""}
                    onChange={(e) => updateFielHandler("email", e.target.value)}
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
                    value={data.number || ""}
                    onChange={(e) => updateFielHandler("number", e.target.value)}
                    placeholder="e.g. +1 234 567 890"
                />
            </div>
        </div>
    )
}

export default YourInfo