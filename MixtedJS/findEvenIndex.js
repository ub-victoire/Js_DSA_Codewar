// The easiest way to solve the index that has equal sum of it left and right
const findEvenIndex = (arr)=>{
    let leftSum = 0;
    let rightSum = arr.reduce((sum, num)=> sum + num, 0);

    for (let i = 0; i<arr.length; i++){
        rightSum -=arr[i];

        if(leftSum === rightSum){
            return i;
        }
        leftSum += arr[i];
    }

    return -1;

}

console.log(findEvenIndex([1,2,3,3,2,1]));

/*
1. leftSum = 0 -> Nothing is on the left initially
2. rightSum -> add all  numbers in the array.
3. loop through the array
4. Remove the current number from rightSum
5. Compare leftSum and rightSum
6. If they are equal, return the index
7. Otherwise, add the current number to leftSum
8. if no match is found, return -1
1. What does reduce() in a simple way
Js's reduce() takes all the elements in an array and combines them intp one sigle value

eg:

let numbers =  [1,2,3,4];

let total = numbers.reduce((sum, num)=> sum + num, 0);

console.log(total); // 10

2. Understand each part

numbers.reduce((sum, num)=>sum + num, 0);
- sum-> The accumulated total
- num-> the current number being processed
- 0 -> The starting value of sum

Let's see how js processes it :
Step    sum    num    sum+num
1        0      1        1
2        1      2        3
3        3      3        6
4        6      4        10
the final result is 10; 

*/
