let temp = 150

//Logical "And" Operator - True if both sides are true, False otherwise; characterised by "&&"
// Logical "Or" Operator - True if atleast one side is true. False when no side is true
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp >= 50 && temp <= 59) {
    console.log('It is a bit chilly, but you can move')
}else if (temp >= 91 && temp <= 95) {
    console.log('Wear light clothes, the heat is mild')
}else {
    console.log('Do not bother to step out')
}

if (temp <= 0 || temp >= 120) {
    console.log('Extreme weather condition, do not go out!')
}

//challenge area

let isGuestoneVegan = false
let isGuesttwoVegan = false
if (isGuestoneVegan && isGuesttwoVegan) {
    console.log('Offer only vegan dishes')
} else if (isGuestoneVegan || isGuesttwoVegan) {
    console.log('Offer some vegan dishes')
}else {
    console.log('Offer up anything on the menu')
}