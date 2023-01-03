function YourInfo() {

    return (
        <form action="#">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name="phone" id="phone" />
            </div>
        </form>
    )
}

export default YourInfo