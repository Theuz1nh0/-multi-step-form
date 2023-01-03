// function to store the titles of each step
export function headerContent() {
    const headerText = [
        {
            h1: 'Personal info',
            p: 'Please provide your name, email address, and phone number.'
        },
        {
            h1: 'Select your plan',
            p: 'You have the option of monthly or yearly billing.'
        },
        {
            h1: 'Pick add-ons',
            p: 'Add-ons help enhance your gaming experience.'
        },
        {
            h1: 'Finishing up',
            p: 'Double-check everything looks OK before confirming.'
        },
        {
            h1: 'Thank you!',
            p: 'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.'
        }
    ]

    return {
        headerText: headerText
    }
}