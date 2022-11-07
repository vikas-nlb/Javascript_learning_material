const reverseArray = (arr) => {
   for(let i = 0 , j = arr.length -1 ; i < Math.floor(arr.length/2);i++,j--){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
   }
   return arr  
}

let ans = reverseArray(['V','I','K','A','S'])
console.log('Answer = ',ans)