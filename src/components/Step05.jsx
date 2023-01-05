// images
import iconThankYou from '../assets/images/icon-thank-you.svg'

function Thanks() {

    return (
        <div>
            <div>
                <img src={iconThankYou} alt="" />
            </div>
            <h1>Thank you!</h1>
            <p>
                Thanks for confirming your subscription!
                We hope you have fun using our platform. If you ever need support, please feel free to email us at
                <a href="#">support@loremgaming.com</a>
            </p>
        </div>
    )
}

export default Thanks