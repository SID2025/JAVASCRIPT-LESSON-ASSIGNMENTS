
/* Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]  */




function first(arr,b) { 
  if(b==null)
   {    
return arr.slice(-1);
}
else{
return arr.slice(-b);

  }
 }
console.log(first([7, 9, 0, -2,-3,-7]));
console.log(first([7, 9, 0, -2,4,5,8,7],3));
console.log(first([7, 9, 0, -2,2,2,7,3],10));

/* Write a JavaScript function to find the most frequent item of an array.
Sample array: 
var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
Sample Output: q ( 5 times )  */

function frequent(arr1) { 
    let mostOccurance;
    let occurance = 0;
    for(let i=0;i<arr1.length;i++){
         let ele1 = arr1[i];
         let count =0;
         
        for(let j=0;j<arr1.length;j++){
           let ele2 = arr1[j];
           if(ele1 === ele2){
               count++
           }
        }
        
        if(count > occurance){
            mostOccurance = ele1;
            occurance = count;
        }
        
    }
     return mostOccurance +' ('+occurance + ') times'
    }
   console.log(frequent([3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3]));