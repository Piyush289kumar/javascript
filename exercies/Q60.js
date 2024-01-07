/* Question 60: WAP to test whether a string ends with "Script". The string length must be greater than or equal to 6.
Solution: */

function checkLastString(strParam) {
    
    try {
        if (strParam.length < 6) {        
            throw ("Length is Greater Then 6 is Must");
        }    
        try {
            if (strParam.slice(-6) === 'script') {
             console.log(`Found: ${strParam}`);   
             return true;
            } else {
                throw("Not Found");
            }
             
        } catch (error) {
            console.log(`Inner Error: ${error}`);
            return false;
        }

    } catch (error) {
        console.log(`Error : ${error}`);
        return false;
        
    }    
}

// checkLastString('java');
console.log(checkLastString('java'));
console.log(checkLastString('javasdfdfdf'));
console.log(checkLastString('javascript'));