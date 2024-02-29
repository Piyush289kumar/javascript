/* Question 85: WAP to calculate the time it takes between a setTimeout call and the inner function actually running. */

let programExeTime = new Date().getMilliseconds()

const checkRunnigTime = () => {
    setTimeout(() => {
        let funExeTime = new Date().getMilliseconds()

        console.log(`Program Flow goes here : ${funExeTime - programExeTime} Milliseconds`);
    }, 1 * 1000);
    return true

}



console.log(checkRunnigTime());