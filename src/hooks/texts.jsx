// function to store the titles of each step
export function texts() {
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
        }
    ]

    const arrayInformationsStep = [
        {
            num: 1,
            name: 'your info'
        },
        {
            num: 2,
            name: 'select plan'
        },
        {
            num: 3,
            name: 'add-ons'
        },
        {
            num: 4,
            name: 'summary'
        }
    ]

    return {
        headerText: headerText,
        arrayInformationsStep: arrayInformationsStep
    }
}