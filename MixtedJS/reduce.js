/*

Reduce() is like a snawball rolling down a hill: it starts with a ssamll value, pick s up each item in an array one by one,
and combines them until you are left with one single final result

Normally, an array  holds a list of things(like 5 prices) 
reduce() loops through that list and keeps "running total" (called the accumulatorr) in its memory

To use it, you give reduce() two things

1. A rule (function): How to combine the running total with the current item
2. A starting value: what the running total begins at before the loop starts(usually 0 for math, " "for text, or {}} for object ) 

*/


const numbers = ;

// Starting at 0. For each number, add it to the running total 
const total = numbers.reduce((runningTotal, CurrentNumber)=>{
    return runningTotal + currentNumber;
}, 0);

console.log(total);
