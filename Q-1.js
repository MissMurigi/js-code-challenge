//using if conditions
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
function calculategrade() {
    let marks = 64
    if (marks >= 79) {
        console.log('You Got A')
    } else if (marks <= 78 && marks >= 60) {
        console.log('you Got B')
    } else if (marks <= 58 && marks >= 49) {
        console.log('You Got C')
    } else if (marks <= 48 && marks <= 40) {
        console.log('You got A D')
    } else if (marks <= 39 && marks > 0) {
        console.log('You Got An E')
    } else {
        console.log('Out Of Range')
    }
}
calculategrade()
