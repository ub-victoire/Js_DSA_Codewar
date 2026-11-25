
/**
 * Challenge 001 - Who ate the cookie?
 * Level:    8 kyu
 * Tags:     Fundamentals
 * Codewars: https://www.codewars.com/kata/55a996e0e8520afab9000055
 *
 * SCENARIO
 *   You look after the office snack jar. A bot reads each message and blames
 *   someone for the missing cookie. Text blames Zach, numbers blame Monica,
 *   and anything else blames the dog.
 *
 * INSTRUCTIONS (from Codewars)
 *   For this problem you must create a program that says who ate the last cookie.
 *   If the input is a string then "Zach" ate the cookie.
 *   If the input is a Double or an Integer then "Monica" ate the cookie.
 *   If the input is anything else "the dog" ate the cookie.
 *   The way to return the statement is:
 *   "Who ate the last cookie? It was (name)!"
 *
 *   Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach!"
 *   (The reason you return Zach is because the input is a string)
 *
 *   Note: Make sure you return the correct message with correct spaces and punctuation.
 *
 * SYNTAX TO REMEMBER
 *   x instanceof String   -> true when x is a text value
 *   if / else if / else   -> choose exactly one branch
 */

const cookie = (X) => {
    if (typeof X === "string" ){
        return "Who ate the last cookie? It was Zach!";
    }else if (typeof x === "number"){
        return "Who ate the last cookie? It was Monica"
    }else{
        return "Who ate the last cookie? It was the dog!"
    }

};

console.log(cookie("hello")); // Zach
console.log(cookie(10));      // Monica
console.log(cookie(true));    // the dog

