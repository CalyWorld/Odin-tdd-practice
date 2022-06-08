function caesarCipher(str, num) {
    //converts string to UpperCase so we could use ascii key;
 
    //variable to put our cypher string
    let solved = "";

    for (let i = 0; i < str.length; i++) {
        //finds the str values of string from ascii code and stores it in asciiNum
        let asciiNum = str[i].charCodeAt();

        //key should start at 65 in ascii code which is A and end at 90 which is Z
        if (asciiNum >= 65 && asciiNum <= 77) {

            //get the asciiNum to sum the shift which is num and gets the value from ascii code then convert to string and stored in solved
            // fromCharCode is the opposite of charCodeAt which is looking for while either is getting out
            solved += String.fromCharCode(asciiNum + num);

        // //key should start at 97 in ascii code which is a and end at 122 which is z
        } else if(asciiNum >=97 && asciiNum <=122){

            solved += String.fromCharCode(asciiNum + num);
        }
         //if outside the asciiNum, it should still be added
        else {
            solved += str[i];
        }
    }
    return solved;
}

export{caesarCipher}