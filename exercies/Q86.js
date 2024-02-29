/* Question 86: WAP to create a terminal clock (HH:MM:SS) */

const terminalClock = () => {
    setInterval(() => {
        let HH = new Date().getHours();
        let MM = new Date().getMinutes();
        let SS = new Date().getSeconds();

        console.log(`Terminal Clock ==> ${HH}:${MM}:${SS}`);
    }, 1 * 1000);
};

terminalClock();
