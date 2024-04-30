// let func1=(n)=>{
//     if(n==0){
//         return  
//     }
//     else{
//     console.log("gfg")
//     }
//     func1(n-1)

// }

// console.log(func1(3))

// question - 1

// let fun=(n)=>{
//     if(n==0){
//         return
//     }
//     console.log("the output is:",n)
//     fun(n-1)
//     console.log(n)

// }
// fun(3)

// question - 2

// let fun=(n)=>{
//     if(n==0){
//         return
//     }
//     fun(n-1)
//     console.log("the output is:",n)
//     // console.log(n)
//     fun(n-1)
//     // console.log(n)


// }
// fun(3)


// let fun2=(n)=>{
//     if(n==1){
//         return 0
//     }
//     else{
//         return 1+fun2(parseInt(n/2))
//     }

// }

// console.log(fun2(16))

// let func3=(n)=>{
//   let res=[]
//     if(n==0){
//         return 1
//     }
//     else{
//         func3(parseInt(n/2))
//         console.log(n%2)
//         res.push(n%2)
//     }
//     return res
// }

// console.log(func3(6))


// //  Tail recurive code  to 

// let func=(n)=>{
//     let res=[]
//     if(n==0){
//         return 
//     }
//     console.log(n)
//     func(n-1)
    
// }


// func(4)
// //---> //Non Tail recursive code 

// let func1=(n)=>{
//     let res=[]
//     if(n==0){
//         return 
//     }
//     console.log(n)
//     func(n-1)
    
// }


// func1(4)
 

//Non Recursive to recursive Call

// function factTR(n, a)
// {
//     if (n == 0)
//         return ;
//     console.log(a)
  
//     factTR(n - 1, a + 1);
// }
  

// console.log(factTR(5,1))


// let sum=(n)=>{
//     if(n==0){
//         return 0
//     }
//     return n+sum(n-1)

// }

// console.log(sum(4))


//is Palindrome

// let isPalindrome=(str,start,end)=>{
//     if(start>=end){
//         return true
//     }

//     return (str.charAt(start)==str.charAt(end) &&isPalindrome(str,start+1,end-1))


// }
// let str="aba"
// console.log(isPalindrome(str,0,str.length-1))


// let sum=(n)=>{
//     if(n==0){
//         return 0
//     }
//     return sum(parseInt(n/10))+n%10

// }

// console.log(sum(10))



// let maxpiece=(n,a,b,c)=>{
//     if(n===0){
//         return 0
//     }
//     if(n<0){
//         return -1
//     }
//     let res=Math.max(maxpiece(n-a,a,b,c), maxpiece(n-b,a,b,c), maxpiece(n-c,a,b,c))
//     if(res==-1){
//         return -1
//     }
//     return res+1
// }
// console.log(maxpiece(23,12,9,11))
// console.log(maxpiece(5,2,5,1))

// let subsets=(string,curr,i)=>{
//     if(i==string.length){
//         console.log(curr)
//         return 1;
//     }
//     subsets(string,curr,i+1)
//     subsets(string,curr+string[i],i+1)


// }

// subsets("ABC","-",0)



// //Tower of Honio 

// let TOH=(n,charA,charB,charC)=>{
//     if(n==1){
//         console.log(`Movie${n} ${charA} to ${charC}`)
//         return
//     }
//     TOH(n-1,charA,charC,charB)
//     console.log(`Movie${n} ${charA} to ${charC}`)
//     TOH(n-1,charB,charA,charC)


// }

// TOH(3,"A","B","C")

// //let the joseph problem 

// let jso=(n,k)=>{
//     if(n==1){
//         return 0
//     }
//     return (jso(n-1,k)+k)%n

// }

// console.log(jso(5,3))


// var name="john"
// function sayname(name){
//     console.log(name);
//     var name="jane";
// }
// sayname(name);
// var x = 10; function foo() { var x = 5; console.log(x); } 
// foo();
// console.log(x);


// const mergeAndUnique=(array1,array2)=>{
//     // 
//     let array=[...array1,...array2]
//     let arr=[...new Set(array)]
//     console.log(arr);
//     return arr;

// }

// let arr1=[2,3,4];
// let arr2=[1,3,5];
// console.log(mergeAndUnique(arr1,arr2))


// program to sort array by property name

// let compareName=(array1,array2)=>{
//    let arr1=array1.name.upperCase;
//    let arr2=array2.name.upperCase;
//    if(arr1<arr2){
//     return 1;
//    }
//    else{
//     return -1;
//    }

// }

// const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

// console.log(students.sort(compareName))



// let create2Darray=(a,b)=>{
//     let arr=[];
//     for(i=0;i<b;i++){
//          arr[i]=[]
//     }
//     for(i=0;i<a;i++){
//         for(j=0;j<b;j++){
//         arr[i][j]=j;
//         }
//    }
//     console.log(arr);
// }

// console.log(create2Darray(3,3))


// program to extract value as an array from an array of objects

// let objextract=(objArray,ext)=>{
//     let obj=objArray.map((x)=>x[ext]);
//     return obj;
// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// console.log(objextract(objArray,'a'))

// let compareArray=(array1,array2)=>{
//     for(i=0;i<array1.length;i++){
//         if(array1[i]!=array2[i]){
//             return false;
//         }
//         return true;
//     }
// }
// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 8];

// console.log(compareArray(array1,array2));

// const splitChunks=(array,c)=>{
//     for(i=0;i<array.length;i+=c){
//         // console.log(i+=c);
//         let temp;
//         temp=array.slice(i,i+c);
        
//         console.log(temp);
//         console.log(array);
//     }
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// splitChunks(array,2);


// let n=5;
// let string=""
// for(i=0;i<n;i++){
//     for(j=0;j<i;j++){
//         string+=" ";
//     }
//     for(k=0;k<2*(n-i)-1;k++){
//         string+="*";
//     }
//     string+="\n";
// }
// console.log(string);


//Remove Duplicate

// function RemoveDuplicate(array){
// //    let arr=[];
// //    for(i of array){
// //     if(arr.indexOf(i)===-1){
// //         arr.push(i);
// //     }
// //    }
// // return arr;
// let arr=[...new Set(array)]
// return arr;
// }
// const array = [1, 2, 3, 2, 3];
// console.log(RemoveDuplicate(array));


// function additem(arr){
//     // arr.splice(0,1,5);
//     let temp=arr.slice(0,1);
//     console.log(arr);
//     return temp;
// }
// const arr = [1, 2, 3];
// console.log(additem(arr));


// function emptyArray(array){
    
//     // array.splice(0,array.length);
//     // array.length=0;
//     array=[];
//     return array;
// }
// const array = [1, 2 ,3];
// console.log(emptyArray(array));


// program to append an object to an array

// function insertObject(array,object){
    // array.push(object);
    // console.log(array);
    // let arr=[...array,object]
    // console.log(arr);
    // array.splice(array.length,0,object);
    // console.log(array);

// }


// original array
// let array = [1, 2, 3];

// object to add
// let object = {x: 12, y: 8};


// insertObject(array,object)

//removeSpecificElementfromArray
// function removeElement(array,element){
//     let index=array.indexOf(element);
//     if(index>-1){
//         array.splice(index,1);
//     }
//     return array;
// }
// console.log(removeElement([1,2,3,4],2))


// function removefromArray(array,elemet){
    // let arr=[];
    // for(i=0;i<array.length;i++){
    //     if(array[i]!==elemet){
    //         arr.push(i);
    //     }
    // }
    // return arr;
    // let index=array.includes(elemet);
    // if(index>-1){
    //     array.splice(index,1)
    // }
    // return array;
// }

// console.log(removefromArray([1,2,3],2))

//CheckPalindrome

// let checkPalindrome=(string)=>{
//     let str=string.split("").reduce((acc,r)=>r+acc+"");
//     // return str;
//     if(str===string){
//         return true;
//     }
//     return false;
// }

// console.log(checkPalindrome('dad'))

// function checkPalindrome(string){
//     const len=string.length;
//     for(i=0;i<len/2;i++){
//         if(string[i]!==string[i-1]){
//             return 1;
//         }
//     }
//     return -1;
// }
// console.log(checkPalindrome('dad'))

//Generate the string

// function *Generate(a,b){
//     for(i=a;i<=b;i++){
//         yield i;
//     }
// }


// function be(a,b){
//     if(typeof a==='string'){
//         let res=[...Generate(a.charCodeAt(),b.charCodeAt())].map((n)=>String.fromCharCode(n))
//         console.log(res);
//     }
// }

// console.log(be("a","d"))


// function countString(string,occurence){
//     let count=0;
//     for(i=0;i<string.length;i++){
//         if(string.charAt(i)===occurence){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countString("DaD","D"))


function CountVowel(string){
    let cnt=0;
    let vowel=["a","e","i","o","u"]
    for(i of string.toLowerCase()){
        if(vowel.includes(i)){
            cnt++;
        }
    }
    return cnt;

}
console.log(CountVowel("DaeD"))