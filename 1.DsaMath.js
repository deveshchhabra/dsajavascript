// //finding the number 
// let number=prompt(`Enter the number`)

// function CountDigit(number){
//     let count=0;
//     while(number>0){
//        number= Math.floor(number/10)

//         count++
//         console.log(number)
//     }
//     return count;

// }


// console.log(CountDigit(number))


// finding the palindrome of the number
// let number=prompt(`Enter the number`)
// const palindrome=(number)=>{
//     let temp=number;
//     let rev=0;
//     let ld;
//     while(temp!=0){ //123
//          ld=temp%10; ///3
//         rev=rev*10+ld///3
//          temp=parseInt(temp/10)
//     }
//     return rev==number && rev

// }
// console.log(palindrome(number))

//factorial of number
// 5*4*3*2*1 = 5!
// let fact=prompt(`Enter the number`)
// let num=1;
// for(i=1;i<=fact;i++){
//     num=num*i;
// }
// console.log(num)
 

//O(n) --->T.C

//finding the factorial of number



//  O(n-1)+O(1) =O(n) --->T.C




//count the number of factorial in the given number
 

//navie solutions --> not the good solution
//factorial program 
// let number=10;
// let fact=1;
// let count = 0;
// const factorial=(number)=>{
// for(i=1;i<=number;i++){
//     fact=fact*i
// }
// while(fact%10 == 0){
//     count++;
//     fact=parseInt(fact/10)
// }

// return count;
// }
// console.log(factorial(number))


//efficient solution 

// console.log(Math.floor(251/5))

// let number=251;
// let fact=1;
// let count=0;
// const factorial=(number)=>{
// for(i=1;i<=number;i++){
//     fact=fact*i
// }
// for(i=5;i<=number;i=i*5){
    //     count=count+parseInt(number/i)
    // }
    
    // return count;
    // }
    // console.log(factorial(number))
    
    
    // //count the number of digit in factorial 
    
    
    
    
    
    // count the number of trailing zeros 
//     let res=0;
//     let tt=prompt(`Enter the number`)
//     let number=1;
//     for(i=1;i<=tt;i++){
//         number=i*number;
//     }
//     console.log(number)
    
//     const CountZeros=(number)=>{
//         for(i=5;i<=number;i=i*5){
//                 res=res+parseInt(number/i)
//             }
            
//             return res;
        
        
//     }
// // let factNumber=prompt(`The number of fact `)
// console.log(CountZeros(tt))


// const CountDigit=(factNumber)=>{
//     let number=1;
//   for(i=1;i<=factNumber;i++){
//     number=i*number;
//   }
//   console.log(number)
//   if(factNumber < 0 ){
//     return 0
//   }
//   if(factNumber < 1){
//     return 1
//   }
//   let digit=0;
//   for(i=2;i<factNumber;i++){
//     digit+=Math.log10(i)
//   }
//   return Math.floor(digit)+1;

// //   let x = ((factNumber * Math.log10(factNumber / Math.E) +  
// //                 Math.log10(2 * Math.PI * factNumber) /  
// //                 2.0));  
  
// //     return Math.floor(x) + 1; 
  

// }

// let factDigit=prompt(`The number of fact `)
// console.log(CountDigit(factDigit))


// const gcd=(a,b)=>{
//   let res=Math.min(a,b)
//   while(res>0){
//     if(a%res==0 && b%res==0){
//       break
//     }
//     res--
//   }
//   return res
// }

// console.log(gcd(100,155))

//using euiclidian algorithm

// const gcd=(a,b)=>{
//   while(a!=b){
//     if(a>b){
//       a=a-b
//     }
//     else {
//       b=b-a
//     }
//   }
//   return a
// }
// console.log(gcd(10,25))

//optimized solution 
// const gcd=(a,b)=>{
//   if(b==0){
//     return a

//   }
//   else{
//     return gcd(a,a%b)

//   }


// }
// console.log(gcd(100,255))

// //Navie Solution 
// const Prime1=(n)=>{
//   if(n===1){
//     return false
//   }
//   else{
//     for(i=2;i<n;i++){
//       if(n%i==0){
//         return false;
//       }
//     }
//     return n;

//   }
// }

// console.log(Prime1(7))


// //Efficient Solution
// let isPrime1=(n)=>{
//   if(n==1){
//     return false
//   }
 
//   for(i=2;i*i<=n;i++){
//     if(n%i==0){
//       return false
//     }
//   }
//   return n

// }

// console.log(isPrime1(7))

// let isPrime=(n)=>{

//   if(n==1){
//     return false
//   }
//   if(n==2||n==3){
//     return n 
//   }
//   if(n%2==0||n%3==0){
//     return false
//   }
//   for(i=2;i*i<=n;i++){
//     if(n%i==0 ||n%(i+2)==0){
//       return false
//     }
//   }
//   return n

// }

// console.log(isPrime(2))

// let primeFactor=(n)=>{
//   for(i=2;i<n;i++){
//     // console.log(isPrime(i))
//     if(isPrime(i)){
//       let x=i;
//       while(n%x==0){
//         console.log(i)
//         x=x*i;
//       }  
//     }


//   }
// }


// primeFactor(12)


// let PrimeFactor=(n)=>{
//   let res=[]
//   if(n<=1){
//     return 0
//   }
//   for(i=2;i*i<=n;i++){
//     while(n%i==0){
//       console.log(i,"\n")
//       n=n/i;
//       res.push(i)

//     }
//   }
//   if(n>1){
//     res.push(n) 
//   }
//   console.log(res)
// }

// PrimeFactor(100)


// let PrimeFactor1=(n)=>{
//   let res=[]
  
//   if(n<=1) {
//     return false
//   } 
//   while(n%2==0){
//     res.push(2)
//     n=n/2
//   }
//   while(n%3==0){
//     res.push(3)
//     n=n/3
//   }
//   for(i=5;i*i<=n;i=i+6){
//     while(n%i==0){
//       res.push(i)
//       n=n/i
//     }
//     while(n%(i+2)==0){
//       res.push(i+2)
//       n=n/(i+2)
//     }
//   }
//   if(n>3){
//     res.push(n)
//   }
//   console.log(res)
// }
// PrimeFactor1(100)

// //Navie Solution 

// let divisor1=(n)=>{
//   let res=[]
//   for(i=1;i<=n;i++){
//     if(n%i==0){
//       res.push(i)
//     }
//   }
//   console.log(res)
// }

// divisor1(6)

// //Efficient solution
// let divisor=(n)=>{
//   let res=[]
//   for(i=1;i*i<=n;i++){
//     if(n%i==0){
//       res.push(i)
//       if(i!=n/i){
//         res.push(n/i)
//       }
//     }
//   }
//   console.log(res)
// }

// divisor(10)
// //More Effecient Solution 
// let printdivisor=(n)=>{
//   let res=[]
//   for(i=1;i*i<=n;i++){
//     if(n%i==0){
//       res.push(i)
//     }
// }
// for(i;i>=1;i--){
//   if(n%i==0){
//     res.push(n/i)
//   }
// }

// console.log(res)

// }
// printdivisor(15)


//SEIVE PF ERATOSTHENSES

let isPrime=(n)=>{

  if(n==1){
    return false
  }
  if(n==2||n==3){
    return n 
  }
  if(n%2==0||n%3==0){
    return false
  }
  for(i=2;i*i<=n;i++){
    if(n%i==0 ||n%(i+2)==0){
      return false
    }
  }
  return n

}


// sieve-of-eratosthenes

//naive solution
// for(i=2;i<=12;i++){
//   if(isPrime(i)){
//     console.log(i)
//   }
// }

//over flow 

// sieve-of-eratosthenes //method
let result=[]

let seive=(n)=>{
  let primes=new Array(n+1).fill(true)
  primes[0]=false
  primes[1]=false
  for(i=2;i*i<=n;i++){
    if(primes[i]){
      result.push(i)

      for(j=i*i;j<=n;j+=i){
        primes[j]=false
      }
    }
  }
  for(let i=2;i<=n;i++){
    if(primes[i]){
      result.push(i)
      }
}
console.log(result)
}
seive(20)


function sieveOfEratosthenes(n) {
  // Create a boolean array of size n+1
  let primes = new Array(n + 1).fill(true);
  // Set first two values to false
  primes[0] = false;
  primes[1] = false;
  // Loop through the elements
  for (let i = 2; i <= Math.sqrt(n); i++) {
     if (primes[i]) {
        for (let j = i * i; j <= n; j += i) {
           primes[j] = false;
        }
     }
  }

  let result = [];
  // Loop through the array from 2 to n
  for (let i = 2; i <= n; i++) {
     if (primes[i]) {
        result.push(i);
     }
  }
   
  return result;
}
console.log("All prime numbers up to 20");
console.log(sieveOfEratosthenes(20));


//Navie to find the power 

// let power=(x,n)=>{
//   let res=1;
//   for(i=0;i<n;i++){
//     res=res*x
//   }
//   return res;
// }

// console.log(power(3,4))


// let power1=(x,n)=>{
//   if(n==0){
//     return 1
//   }
//   let temp=power1(x,parseInt(n/2))
//   temp=temp*temp
//   if(n%2!=0){
//     return temp
//   }
//   else{
//     return temp*x
//   }

// }
// console.log(power1(3,5))


// let power=(x,n)=>{
//   let res=1;
//   while(n>0){
//     if(n%2!=0){
//       res=res*x
    
//       n=n/2
//     x=x*x
//   }
  
// }
// return res;
// 
// }


 
function power(x, y) 
{ 
// Initialize result 
    let res = 1; 
 
    while (y > 0) { 
        // If y is odd, multiply x with result 
        if (y &1) 
            res = res * x; 
 
        // y must be even now 
        // y = y >> 1; 
        y = y/2 
        x = x * x; // Change x to x^2 
    } 
    return res; 
} 
 
 
console.log(power(4,5))