let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin!')
}else {
    console.log('Welcome!')
} 

let temp = 50

if (temp > 45) {
    console.log('It is hot outside!')
} else if (temp === 45) {
    console.log('Go for it. It is pretty nice')
}else {
    console.log('It is freezing outside!')
}