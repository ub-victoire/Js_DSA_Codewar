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

console.log(findEvenIndex([1,2,3,4,3,2,1]));
