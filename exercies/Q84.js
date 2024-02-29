/* Question 83: WAP to create a counter (count down 30 to 0) */

const counter = (initVal = 10, interValSecond) => {
    let counterInitValue = initVal;
    let counterInterValSecond = interValSecond * 1000;

    const counterInterval = setInterval(() => {
        counterInitValue === -1
            ? clearInterval(counterInterval)
            : console.log(`Count : ${counterInitValue}`);
        counterInitValue--;
    }, counterInterValSecond);

    return true;
};

console.log(counter(30, 1));
